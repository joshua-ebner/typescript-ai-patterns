# Claude Prompting Patterns

This folder contains basic Claude prompting examples written in TypeScript using the Anthropic SDK.

The goal is to demonstrate simple, reusable LLM prompting patterns before moving into more advanced topics like structured outputs, tool use, RAG, and agents.

## Files

### `1_simple_llm_call.ts`

Demonstrates a basic Claude API call from TypeScript.

Shows:

* loading environment variables with `dotenv`
* creating an Anthropic client
* sending a simple user prompt
* printing Claude's text response

### `2_system_prompt.ts`

Demonstrates how to use a system prompt with Claude.

Shows:

* setting assistant behavior with the `system` field
* sending a user message
* reading and printing the response

### `3_prompt_template_basic.ts`

Demonstrates a basic prompt template pattern.

Shows:

* creating a reusable TypeScript function for prompt construction
* inserting dynamic values into a prompt
* sending the completed prompt to Claude

### `4_prompt_template_with_dynamic_input.ts`

Demonstrates using the same prompt template with multiple dynamic inputs.

Shows:

* defining a typed input object
* reusing one prompt template for different business scenarios
* calling Claude multiple times with different inputs

## Run Examples

From the project root:

```bash
npx tsx 01_claude_prompting_patterns/1_simple_llm_call.ts
npx tsx 01_claude_prompting_patterns/2_system_prompt.ts
npx tsx 01_claude_prompting_patterns/3_prompt_template_basic.ts
npx tsx 01_claude_prompting_patterns/4_prompt_template_with_dynamic_input.ts
```

## Notes

These examples intentionally use the Anthropic SDK directly instead of a higher-level framework. The purpose is to understand the basic Claude API patterns and TypeScript structure before adding additional abstractions.
