// api.js
import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://gpt-node-api-jimibue.onrender.com"
    : "http://localhost:8080";

export const fetchCompletion = async (messages, apiPath) => {
  
  try {
    if(!apiPath) throw new Error('apiPath is required')
    const response = await axios.post(`${API_URL}/${apiPath}`, { messages });
    return response.data.completion;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
};