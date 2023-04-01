// SingleMessage.js
import React from "react";
import ClipboardCopy from "../components/messaging/CopyText";

const ASSISTANT_IMG =
  "https://i.etsystatic.com/25672526/r/il/9926ae/4736624079/il_1588xN.4736624079_o07h.jpg";
const USER_IMG =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

export default function SingleMessage({ role, content, contact }) {
  const isAI = role === "assistant";
  const imgSrc = isAI ? contact.imgSrc : USER_IMG;
  const messageContent = content !== null ? content : "loading...";

  return (
    <div className={`single-message ${role}`}>
      <img alt="user img" src={imgSrc} />
      {!isAI && <p>{messageContent}</p>}
      {isAI && <ClipboardCopy text={messageContent}/>}
    </div>
  );
}
