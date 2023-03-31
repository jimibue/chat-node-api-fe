// Board.js
import React, { useState } from "react";
import { fetchCompletion } from "../helpers/api";
import MessageList from "./MessageList";

export default function Board({contact}) {
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setContent("");

    const userMessage = { role: "user", content };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const completion = await fetchCompletion([...messages, userMessage], contact.apiPath);
      setLoading(false);
      setMessages((prevMessages) => [...prevMessages, completion]);
    } catch (error) {
      setLoading(false);
      console.error("ERROR:", error);
    }
  };

  return (
    <div className="demo-component">
      <div>
      <MessageList contact={contact} messages={messages} loading={loading} />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Ask Jesus</button>
        </form>
      </div>
    </div>
  );
}