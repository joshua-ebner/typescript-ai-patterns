# Structured Outputs

This folder contains examples of getting structured, machine-usable responses from Claude using TypeScript.

The examples progress from a simple JSON output pattern to a more robust structured-output pattern using Zod validation.

## Files

### `1_structured_output_json.ts`

Demonstrates a basic structured-output pattern using JSON.

Shows:

- asking Claude to return JSON
- cleaning the response if Claude wraps it in markdown
- parsing the JSON with `JSON.parse()`
- accessing fields from the parsed object

This example is simple and useful for understanding the basic idea, but it does not validate the returned object against a runtime schema.

### `2_structured_output_with_zod_validation.ts`

Demonstrates structured output with Zod validation using Claude's structured output API.

Shows:

- defining the expected response shape with a Zod schema
- passing the schema to Claude's structured output API
- receiving a parsed, validated TypeScript object
- handling errors with a simple `try/catch`

## Run Examples

From the project root:

```bash
npx tsx 02_structured_outputs/1_structured_output_json.ts
npx tsx 02_structured_outputs/2_structured_output_with_zod_validation.ts