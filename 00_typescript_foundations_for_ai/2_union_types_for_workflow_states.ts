/*
  Union Types for Workflow States

  This example demonstrates how TypeScript union types can restrict
  a value to a fixed set of allowed workflow states.

  This pattern is useful in AI systems when tracking things like
  processing state, classification status, review status, or job status.
*/

type ProcessingState = "received" | "processing" | "completed" | "failed";

type ProcessingRecord = {
  id: string;
  inputText: string;
  state: ProcessingState;
};

function describeState(state: ProcessingState): string {
  if (state === "received") {
    return "The input has been received but not processed yet.";
  }

  if (state === "processing") {
    return "The input is currently being processed.";
  }

  if (state === "completed") {
    return "The input was processed successfully.";
  }

  return "The input failed during processing.";
}

function updateState(
  record: ProcessingRecord,
  newState: ProcessingState
): ProcessingRecord {
  return {
    ...record,
    state: newState,
  };
}

function main() {
  let record: ProcessingRecord = {
    id: "record_001",
    inputText: "Customer says they were charged twice.",
    state: "received",
  };

  console.log();
  console.log("INITIAL RECORD");
  console.log(record);
  console.log(describeState(record.state));

  record = updateState(record, "processing");

  console.log();
  console.log("UPDATED RECORD");
  console.log(record);
  console.log(describeState(record.state));

  record = updateState(record, "completed");

  console.log();
  console.log("FINAL RECORD");
  console.log(record);
  console.log(describeState(record.state));
  console.log();

  // This would cause a TypeScript error because "done" is not an allowed state:
  // record = updateState(record, "done");
}

main();