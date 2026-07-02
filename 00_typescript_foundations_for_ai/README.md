# TypeScript Foundations for AI

This folder contains small TypeScript foundation examples for AI engineering patterns.

The examples focus on TypeScript concepts that are especially useful when building AI systems, including structured data models, workflow states, optional results, lookup tables, async functions, generics, and interfaces.

These files do not focus on calling an AI model directly. Instead, they isolate the TypeScript patterns that support the rest of the repo.

## Examples

### `1_object_types_as_data_models.ts`

Demonstrates how TypeScript object types can define structured data models.

Covers:

* object types
* type aliases
* function input types
* function return types
* transforming one object shape into another

### `2_union_types_for_workflow_states.ts`

Demonstrates how union types can restrict a value to a fixed set of allowed options.

Covers:

* string literal union types
* workflow states
* constrained values
* safer state transitions

### `3_optional_properties_for_pending_results.ts`

Demonstrates how optional properties can model values that may not exist yet.

Covers:

* optional properties
* pending results
* successful results
* failed results
* object spread updates

### `4_map_as_lookup_table.ts`

Demonstrates how `Map<K, V>` can be used as a typed key-value lookup table.

Covers:

* `Map<K, V>`
* `.set()`
* `.get()`
* storing records by ID
* retrieving missing values

### `5_value_or_undefined_return_types.ts`

Demonstrates how TypeScript can model functions that may return a value or may return nothing.

Covers:

* `Value | undefined`
* search functions
* missing-value handling
* `Array.find()`
* checking for `undefined` before using a value

### `6_async_functions_and_promises.ts`

Demonstrates how TypeScript models asynchronous work with async functions, Promises, and `await`.

Covers:

* `async` functions
* `Promise<T>`
* `Promise<void>`
* `await`
* simulated async delays
* async patterns used in API calls

### `7_generics_for_reusable_functions.ts`

Demonstrates how generics allow reusable functions to work with different types while preserving type information.

Covers:

* generic functions
* type parameters
* reusable wrappers
* preserving input/output type relationships
* avoiding `any`

### `8_interfaces_for_object_contracts.ts`

Demonstrates how interfaces can define object contracts.

Covers:

* interfaces
* object contracts
* method contracts
* component input/output agreements
* compile-time type checking

## Why This Folder Matters

The rest of this repo uses TypeScript to build practical AI engineering patterns.

These foundation examples support later sections on:

* Claude API calls
* structured outputs
* schema validation
* reusable AI clients
* workflow architecture
* background processing
* job status tracking
* queues and retries

The goal is to make the TypeScript patterns clear before combining them into larger AI systems.

## Run Examples

From the project root:

```bash
npx tsx 00_typescript_foundations_for_ai/1_object_types_as_data_models.ts
npx tsx 00_typescript_foundations_for_ai/2_union_types_for_workflow_states.ts
npx tsx 00_typescript_foundations_for_ai/3_optional_properties_for_pending_results.ts
npx tsx 00_typescript_foundations_for_ai/4_map_as_lookup_table.ts
npx tsx 00_typescript_foundations_for_ai/5_value_or_undefined_return_types.ts
npx tsx 00_typescript_foundations_for_ai/6_async_functions_and_promises.ts
npx tsx 00_typescript_foundations_for_ai/7_generics_for_reusable_functions.ts
npx tsx 00_typescript_foundations_for_ai/8_interfaces_for_object_contracts.ts
```
