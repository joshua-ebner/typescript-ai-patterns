/*
  Object Types as Data Models

  This example demonstrates how TypeScript object types can define
  structured data models for AI systems.

  The goal is not to call an AI model yet. The goal is to understand how
  TypeScript describes the shape of data that moves through a system.
*/

type IncomingMessage = {
    id: string;
    sender: string;
    text: string;
  };
  
  type MessageSummary = {
    messageId: string;
    originalSender: string;
    summary: string;
  };
  
  function summarizeMessage(message: IncomingMessage): MessageSummary {
    return {
      messageId: message.id,
      originalSender: message.sender,
      summary: `Message contains ${message.text.length} characters.`,
    };
  }
  
  function main() {
    const message: IncomingMessage = {
      id: "msg_001",
      sender: "customer@example.com",
      text: "I was charged twice for my subscription and need help.",
    };
  
    const summary = summarizeMessage(message);
  
    console.log();
    console.log("INCOMING MESSAGE");
    console.log(message);
  
    console.log();
    console.log("MESSAGE SUMMARY");
    console.log(summary);
    console.log();
  }
  
  main();