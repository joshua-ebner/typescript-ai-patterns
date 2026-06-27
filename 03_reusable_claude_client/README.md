# Reusable Claude Client

This folder contains examples of wrapping Claude API calls in reusable TypeScript functions.

The goal is to move beyond one-off Claude calls and show how AI systems can centralize common API logic in helper functions.

## Files

### `1_create_reusable_claude_text_client.ts`

Demonstrates how to create a reusable Claude text client function.

Shows:

- defining a typed input object for Claude text calls
- setting default values for `maxTokens` and `temperature`
- calling Claude through a reusable helper function
- returning plain text from Claude
- using a simple `try/catch` around the API call

## Run Example

From the project root:

```bash
npx tsx 03_reusable_claude_client/1_create_reusable_claude_text_client.ts