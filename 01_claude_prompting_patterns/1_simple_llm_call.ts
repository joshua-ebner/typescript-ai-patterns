import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function main() {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: "Explain TypeScript in one short paragraph.",
      },
    ],
  });

  const firstBlock = message.content[0];

  if (firstBlock.type === "text") {
    console.log(firstBlock.text);
  }
}

main();