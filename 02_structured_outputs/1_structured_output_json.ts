/*
  Structured Output JSON Example

  Demonstrates how to ask Claude for a JSON-shaped response,
  clean the response if Claude wraps it in markdown,
  parse the response, and access fields from the resulting object.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type BusinessInfo = {
  businessName: string;
  location: string;
  industry: string;
  businessPurpose: string;
};

function cleanJsonResponse(text: string): string {
  return text
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

async function main() {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `
Create a fictional business profile.

Return only valid JSON.

The JSON object must have these fields:
- businessName
- location
- industry
- businessPurpose

Do not include markdown.
Do not include explanation.
`,
      },
    ],
  });

  const firstBlock = message.content[0];

  if (firstBlock.type !== "text") {
    throw new Error("Expected a text response from Claude.");
  }

  const cleanedText = cleanJsonResponse(firstBlock.text);
  const business = JSON.parse(cleanedText) as BusinessInfo;

  console.log(); 
  console.log(`BUSINESS NAME: ${business.businessName}`);
  console.log(`LOCATION: ${business.location}`);
  console.log(`INDUSTRY: ${business.industry}`);
  console.log(`BUSINESS PURPOSE: ${business.businessPurpose}`);
  console.log();
}

main();