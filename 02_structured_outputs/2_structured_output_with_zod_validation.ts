/*
  Structured Output with Zod Validation

  Demonstrates how to define the expected response shape with a Zod schema,
  pass that schema to Claude's structured output API, and receive a parsed,
  validated TypeScript object.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod/v4";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const BusinessInfoSchema = z.object({
  businessName: z.string(),
  location: z.string(),
  industry: z.string(),
  businessPurpose: z.string(),
});

type BusinessInfo = z.infer<typeof BusinessInfoSchema>;

async function generateBusinessProfile(): Promise<BusinessInfo> {
  const message = await anthropic.messages.parse({
    model: "claude-sonnet-4-5",
    max_tokens: 500,
    temperature: 0,
    system:
      "You create realistic fictional business profiles and return structured data matching the schema.",
    messages: [
      {
        role: "user",
        content: "Create a fictional business profile.",
      },
    ],
    output_config: {
      format: zodOutputFormat(BusinessInfoSchema),
    },
  });

  return message.parsed_output!;
}

async function main() {
  try {
    const business = await generateBusinessProfile();

    console.log();
    console.log(`BUSINESS NAME: ${business.businessName}`);
    console.log(`LOCATION: ${business.location}`);
    console.log(`INDUSTRY: ${business.industry}`);
    console.log(`BUSINESS PURPOSE: ${business.businessPurpose}`);
    console.log();
  } catch (error) {
    console.error("Failed to generate structured business profile.");
    console.error(error);
    process.exit(1);
  }
}

main();