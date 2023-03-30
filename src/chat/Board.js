import React from "react";
import axios from "axios";
import SingleMessage from "./SingleMessage";

export default function Board() {
  const [content, setContent] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      setContent('')
      let newMessages = [...messages, { role: "user", content, }];
      setMessages(newMessages);
      console.log("posting");
      let res = await axios.post(
        // "https://gpt-node-api-jimibue.onrender.com/chat/multiple",
        "http://localhost:8080/chat/multiple",
        { messages: [...messages, { role: "user", content, }] }
      );
      setLoading(false)
      console.log("res:", res);
      
      setMessages([...newMessages, res.data.completion]);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  };
  return (
    <div className="demo-component">
      <div>
        <h1></h1>

        <div>
          {messages.length === 0 && <SingleMessage role='assistant' content='Hello my child, how may I help you?'/>}
          {messages.map((message, index) => (
            <SingleMessage   key={index} {...message} />
          ))}
          {loading && <SingleMessage role='assistant' content={null}/>}
       
        </div>

        {/* <ul className="messages">
    
      </ul> */}
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
