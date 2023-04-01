import { useState, createContext, useEffect } from "react";
import initialContacts from "../data";

export const ChatContext = createContext();

export default function ChatProvider(props) {
  const [contacts, setContacts] = useState(initialContacts);
  useEffect(() => {
    console.log("contacts", contacts);
  }, []);

  return (
    <ChatContext.Provider value={{ contacts, setContacts }}>
      {props.children}
    </ChatContext.Provider>
  );
}
