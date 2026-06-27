# Reusable Claude Client

This folder contains examples of wrapping Claude API calls in reusable TypeScript functions.

The goal is to move beyond one-off Claude calls and show how AI systems can centralize common API logic in helper functions.

## Files

### `1_create_reusable_claude_text_client.ts`

Demonstrates how to create a reusable Claude text client function.

Shows:

* defining a typed input object for Claude text calls
* setting default values for `maxTokens` and `temperature`
* calling Claude through a reusable helper function
* returning plain text from Claude
* using a simple `try/catch` around the API call

This pattern is useful when you want a simple reusable helper for:

```text
prompt in → Claude call → text response out
```

### `2_create_reusable_structured_output_client.ts`

Demonstrates how to create a reusable Claude structured-output client function.

Shows:

* accepting a Zod schema as an input
* passing the schema to Claude's structured output API
* returning a parsed, typed TypeScript object
* using a generic TypeScript function that can work with different Zod schemas

This pattern is useful when you want a reusable helper for:

```text
Zod schema + prompt → Claude structured-output call → typed object back
```

## Run Examples

From the project root:

```bash
npx tsx 03_reusable_claude_client/1_create_reusable_claude_text_client.ts
npx tsx 03_reusable_claude_client/2_create_reusable_structured_output_client.ts
```

## Notes

The first example handles simple text generation.

The second example handles structured output using a Zod schema.

These examples do not yet handle streaming, retries, rate limits, tool calling, or multi-turn conversations. Those patterns can be added in later examples.
