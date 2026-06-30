/*
  Optional Properties for Pending Results

  This example demonstrates how TypeScript optional properties can model
  values that may not exist yet.

  This pattern is useful in AI systems where a record may start without
  a result or error, then receive one later after processing.
*/

type ProcessingState = "pending" | "completed" | "failed";

type ProcessingResult = {
  summary: string;
  confidence: number;
};

type ProcessingRecord = {
  id: string;
  inputText: string;
  state: ProcessingState;
  result?: ProcessingResult;
  error?: string;
};

function completeRecord(
  record: ProcessingRecord,
  result: ProcessingResult
): ProcessingRecord {
  return {
    ...record,
    state: "completed",
    result,
  };
}

function failRecord(record: ProcessingRecord, error: string): ProcessingRecord {
  return {
    ...record,
    state: "failed",
    error,
  };
}

function main() {
  let record: ProcessingRecord = {
    id: "record_001",
    inputText: "Customer says they were charged twice.",
    state: "pending",
  };

  console.log();
  console.log("PENDING RECORD");
  console.log(record);

  record = completeRecord(record, {
    summary: "Customer reports a duplicate charge.",
    confidence: 0.92,
  });

  console.log();
  console.log("COMPLETED RECORD");
  console.log(record);
  console.log();

  const failedRecord = failRecord(
    {
      id: "record_002",
      inputText: "Unreadable input.",
      state: "pending",
    },
    "Could not process the input."
  );

  console.log("FAILED RECORD");
  console.log(failedRecord);
  console.log();
}

main();