# Structured Outputs

This folder contains examples of getting structured, machine-usable responses from Claude using TypeScript.

The examples progress from basic JSON output, to validated structured output with Zod, to using structured output for a practical text classification pattern.

## Files

### `1_structured_output_json.ts`

Demonstrates a basic structured-output pattern using JSON.

Shows:

* asking Claude to return JSON
* cleaning the response if Claude wraps it in markdown
* parsing the JSON with `JSON.parse()`
* accessing fields from the parsed object

This example is simple and useful for understanding the basic idea, but it does not validate the returned object against a runtime schema.

### `2_structured_output_with_zod_validation.ts`

Demonstrates structured output with Zod validation using Claude's structured output API.

Shows:

* defining the expected response shape with a Zod schema
* passing the schema to Claude's structured output API
* receiving a parsed, validated TypeScript object
* handling errors with a simple `try/catch`

This is the more robust pattern for TypeScript AI systems because it uses a runtime schema to define and validate the expected output shape.

### `3_classify_incoming_text.ts`

Demonstrates how to classify unstructured incoming text into a structured output object.

Shows:

* passing incoming text to Claude
* defining allowed classification labels with `z.enum()`
* returning a structured classification result
* producing fields such as category, urgency, summary, and recommended action

This pattern is useful for classifying customer messages, leads, emails, support requests, internal requests, documents, and other incoming text.

## Run Examples

From the project root:

```bash
npx tsx 02_structured_outputs/1_structured_output_json.ts
npx tsx 02_structured_outputs/2_structured_output_with_zod_validation.ts
npx tsx 02_structured_outputs/3_classify_incoming_text.ts
```

## Notes

The first example shows the basic JSON parsing pattern.

The second example shows the more professional structured-output pattern using Claude's structured output API with Zod validation.

The third example applies structured outputs to a practical classification workflow.
