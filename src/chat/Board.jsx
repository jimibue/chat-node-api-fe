// Board.js
import React, { useContext, useEffect, useState } from "react";
import { fetchCompletion, fetchQueryTest } from "../helpers/api";
import MessageList from "./MessageList";
import MultipleResults from "../components/messaging/MultipleResults";
import { ChatContext } from "../providers/ChatProvider";

export default function Board({ contact }) {
  const {contacts, setContacts} = useContext(ChatContext);
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState({});
  useEffect(() => {
      setMessages(contact.messages)
  }, [contact])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // query case for testing only
    if (contact.id === 3) {
      let res = await fetchQueryTest([], "chat/prompt");
      console.log("res", res);

      setQ(res);
      return;
    }
    setLoading(true);
    setContent("");

    const userMessage = { role: "user", content };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const completion = await fetchCompletion(
        [...messages, userMessage],
        contact.apiPath,
        contact.system
      );
      setLoading(false);
      let newMessages = [...messages, userMessage,completion];
      setMessages(newMessages);
      let newContacts = contacts.map(c => {
        if (c.id === contact.id) {
          return {...c, messages: newMessages}
        }
        return c
      })
      setContacts(newContacts)
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
        {contact.id === 3 && <div>QUERY:{JSON.stringify(q)}</div>}
        {contact.id === 3 && q.content && <MultipleResults str={q.content} />}
      </div>
    </div>
  );
}
