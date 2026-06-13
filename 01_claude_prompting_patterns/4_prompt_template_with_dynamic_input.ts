/*
  Prompt Template with Dynamic Input

  Demonstrates how to define one reusable prompt template
  and call Claude with different runtime inputs.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type PromptInput = {
  businessContext: string;
  question: string;
};

function promptTemplate(input: PromptInput): string {
  return `
You are analyzing a business situation.

Business context:
${input.businessContext}

Question:
${input.question}

Give a concise, practical answer.
`;
}

async function callClaude(prompt: string): Promise<string> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 500,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const firstBlock = message.content[0];

  if (firstBlock.type === "text") {
    return firstBlock.text;
  }

  return "";
}

async function main() {
  const input1: PromptInput = {
    businessContext:
      "A mid-sized B2B SaaS company has a small sales team and too many low-quality leads.",
    question:
      "What are 3 practical AI use cases that could improve sales efficiency?",
  };

  const input2: PromptInput = {
    businessContext:
      "A professional services firm has many internal documents, repeated client questions, and slow onboarding for new employees.",
    question:
      "What are 3 practical AI use cases that could improve internal knowledge work?",
  };

  const prompt1 = promptTemplate(input1);
  const prompt2 = promptTemplate(input2);

  const response1 = await callClaude(prompt1);
  const response2 = await callClaude(prompt2);

  console.log("\n--- Response 1 ---\n");
  console.log(response1);

  console.log("\n--- Response 2 ---\n");
  console.log(response2);
}

main();