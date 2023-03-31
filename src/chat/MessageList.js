// MessageList.js
import React from "react";
import SingleMessage from "./SingleMessage";

export default function MessageList({ messages, loading, contact }) 
{
  return (
    <div>
      {messages.length === 0 && (
        <SingleMessage
          role="assistant"
          contact={contact}
          content={contact.openingMessage || 'ask me a question'}
        />
      )}
      {messages.map((message, index) => (
        <SingleMessage key={index} contact={contact} {...message} />
      ))}
      {loading && <SingleMessage contact={contact} role="assistant" content={null} />}
    </div>
  );
}