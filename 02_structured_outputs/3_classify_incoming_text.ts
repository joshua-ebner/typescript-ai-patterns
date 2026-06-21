/*
  Classify Incoming Text

  Demonstrates how to classify unstructured incoming text into a structured,
  validated TypeScript object using Claude's structured output API and Zod.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod/v4";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const TextClassificationSchema = z.object({
  category: z.enum(["sales", "support", "billing", "technical", "other"]),
  urgency: z.enum(["low", "medium", "high"]),
  summary: z.string(),
  recommendedAction: z.string(),
});

type TextClassification = z.infer<typeof TextClassificationSchema>;

async function classifyIncomingText(
  incomingText: string
): Promise<TextClassification> {
  const message = await anthropic.messages.parse({
    model: "claude-sonnet-4-5",
    max_tokens: 500,
    temperature: 0,
    system:
      "You classify incoming business messages and return structured data matching the schema.",
    messages: [
      {
        role: "user",
        content: `
Classify the following incoming text:

${incomingText}
`,
      },
    ],
    output_config: {
      format: zodOutputFormat(TextClassificationSchema),
    },
  });

  return message.parsed_output!;
}

async function main() {
  try {
    const incomingText = `
Hi, I was charged twice for my subscription this month.
Can someone fix this before my finance report is due tomorrow?
`;

    const classification = await classifyIncomingText(incomingText);

    console.log();
    console.log(`CATEGORY: ${classification.category}`);
    console.log(`URGENCY: ${classification.urgency}`);
    console.log(`SUMMARY: ${classification.summary}`);
    console.log(`RECOMMENDED ACTION: ${classification.recommendedAction}`);
    console.log();
  } catch (error) {
    console.error("Failed to classify incoming text.");
    console.error(error);
    process.exit(1);
  }
}

main();