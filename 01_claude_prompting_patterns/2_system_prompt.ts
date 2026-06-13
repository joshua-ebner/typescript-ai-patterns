/*
  System Prompt Example

  Demonstrates how to use a system prompt with Claude.
  The system prompt sets the assistant's behavior.
  The user message provides the actual request.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function main() {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 300,
    system:
      "You are an AI assistant that always starts your response with 'Answer: ' and then gives a concise answer.",
    messages: [
      {
        role: "user",
        content: "What city is famous for deep dish pizza?",
      },
    ],
  });

  const firstBlock = message.content[0];

  if (firstBlock.type === "text") {
    console.log(firstBlock.text);
  }
}

main();