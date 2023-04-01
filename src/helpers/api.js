// api.js
import axios from "axios";
import { DEFAULT_OPTIONS1 } from "../data";
import { PROMPT_OPTIONS, createChatGPTPrompt } from "./prompts";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://gpt-node-api-jimibue.onrender.com"
    : "http://localhost:8080";

export const fetchCompletion = async (messages, apiPath, system, options = {}) => {
  try {
    if (!apiPath) throw new Error("apiPath is required");
    const response = await axios.post(`${API_URL}/${apiPath}`, {
      messages,
      system,
      options,
    });
    return response.data.completion;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
};

export const fetchQueryTest = async (messages, apiPath) => {
  let queryString = createChatGPTPrompt(PROMPT_OPTIONS);
  try {
    if (!apiPath) throw new Error("apiPath is required");
    const response = await axios.post(`${API_URL}/${apiPath}`, {
      messages: [...messages, { role: "user", content: queryString }],
      options: DEFAULT_OPTIONS1,
    });
    // not sure why this is different from fetchCompletion
    return response.data.result.completion;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
};
