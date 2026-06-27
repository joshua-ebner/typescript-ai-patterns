/*
  Create a Reusable Claude Structured Output Client

  Demonstrates how to wrap Claude structured-output calls in a reusable
  TypeScript function that accepts a Zod schema and returns typed data.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod/v4";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type ClaudeStructuredInput<TSchema extends z.ZodType> = {
  schema: TSchema;
  prompt: string;
  system?: string;
  maxTokens?: number;
  temperature?: number;
};

async function callClaudeStructured<TSchema extends z.ZodType>(
  input: ClaudeStructuredInput<TSchema>
): Promise<z.infer<TSchema>> {
  const message = await anthropic.messages.parse({
    model: "claude-sonnet-4-5",
    max_tokens: input.maxTokens ?? 500,
    temperature: input.temperature ?? 0,
    system: input.system,
    messages: [
      {
        role: "user",
        content: input.prompt,
      },
    ],
    output_config: {
      format: zodOutputFormat(input.schema),
    },
  });

  return message.parsed_output!;
}

const BusinessInfoSchema = z.object({
  businessName: z.string(),
  location: z.string(),
  industry: z.string(),
  businessPurpose: z.string(),
});

type BusinessInfo = z.infer<typeof BusinessInfoSchema>;

async function main() {
  try {
    const business: BusinessInfo = await callClaudeStructured({
      schema: BusinessInfoSchema,
      system:
        "You create realistic fictional business profiles and return structured data matching the schema.",
      prompt: "Create a fictional business profile.",
      maxTokens: 500,
      temperature: 0,
    });

    console.log();
    console.log(`BUSINESS NAME: ${business.businessName}`);
    console.log(`LOCATION: ${business.location}`);
    console.log(`INDUSTRY: ${business.industry}`);
    console.log(`BUSINESS PURPOSE: ${business.businessPurpose}`);
    console.log();
  } catch (error) {
    console.error("Failed to call Claude with structured output.");
    console.error(error);
    process.exit(1);
  }
}

main();