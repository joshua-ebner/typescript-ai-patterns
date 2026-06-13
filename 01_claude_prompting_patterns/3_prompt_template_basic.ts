/*
  Prompt Template Example

  Demonstrates how to use a simple prompt template with dynamic inputs.

  This is similar to a basic prompt template in LangChain, but implemented
  directly with TypeScript.
*/

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

function promptTemplate(context: string, question: string): string {
  return `
Context:
${context}

Question:
${question}
`;
}

async function main() {
  const context =
    "AI and LLMs are changing how companies operate, improving efficiency and decision-making.";

  const question =
    "What are practical AI use cases for startups and mid-sized businesses?";

  const prompt = promptTemplate(context, question);

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
    console.log(firstBlock.text);
  }
}

main();