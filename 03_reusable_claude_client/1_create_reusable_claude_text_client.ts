/*
  Create a Reusable Claude Text Client

  Demonstrates how to wrap a basic Claude text call in a reusable TypeScript
  function instead of repeating the Anthropic SDK call in every file.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type ClaudeTextInput = {
  prompt: string;
  system?: string;
  maxTokens?: number;
  temperature?: number;
};

async function callClaudeText(input: ClaudeTextInput): Promise<string> {
  const message = await anthropic.messages.create({
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
  });

  const firstBlock = message.content[0];

  if (firstBlock.type !== "text") {
    throw new Error("Expected a text response from Claude.");
  }

  return firstBlock.text;
}

async function main() {
    try {
      const response = await callClaudeText({
        system:
          "You explain practical AI engineering concepts clearly and concisely. Do not use markdown or code examples.",
        prompt:
          "In one short paragraph, explain why a reusable Claude text client is useful in a TypeScript AI system.",
        maxTokens: 150,
        temperature: 0,
      });
  
      console.log();
      console.log(response);
      console.log();
    } catch (error) {
      console.error("Failed to call Claude.");
      console.error(error);
      process.exit(1);
    }
  }

main();