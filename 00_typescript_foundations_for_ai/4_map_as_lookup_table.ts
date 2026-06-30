/*
  Map as Lookup Table

  This example demonstrates how TypeScript Map<K, V> can be used as a
  typed key-value lookup table.

  This pattern is useful in AI systems when storing records by ID, such as
  processing records, workflow runs, cached results, or message records.
*/

type ProcessingState = "pending" | "completed" | "failed";

type ProcessingRecord = {
  id: string;
  inputText: string;
  state: ProcessingState;
};

const records = new Map<string, ProcessingRecord>();

function addRecord(record: ProcessingRecord): void {
  records.set(record.id, record);
}

function getRecord(id: string): ProcessingRecord | undefined {
  return records.get(id);
}

function main() {
  const record: ProcessingRecord = {
    id: "record_001",
    inputText: "Customer says they were charged twice.",
    state: "pending",
  };

  addRecord(record);

  const foundRecord = getRecord("record_001");
  const missingRecord = getRecord("record_999");

  console.log();
  console.log("FOUND RECORD");
  console.log(foundRecord);

  console.log();
  console.log("MISSING RECORD");
  console.log(missingRecord);
  console.log();
}

main();