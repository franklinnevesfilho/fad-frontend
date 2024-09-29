import { OpenAI } from "openai";
import { Prompt } from "./src/assets/prompt.ts";
import { useState } from "react";

export interface GptResponse {
  action: string;
  message?: string;
  userQuery: {
    first_name: string;
    last_name: string;
    city: string;
    state: string;
    user_topic: string;
  };
  case_info?: {
    user_topic: string;
    language: string;
    city: string;
  };
}

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Define the type for the message parameter
type Message = {
  role: 'system' | 'user';
  content: string;
};

// Custom hook to manage chat history
export function useChatHistory() {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  return [chatHistory, setChatHistory] as const; // Return a tuple
}

// Send Message to OpenAI using Chat Completion API
export async function sendMsgToOpenAI(message: string, chatHistory: Message[]): Promise<GptResponse | undefined> {
  const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

  // Add the current user message
  const messages: Message[] = [
    {
      role: "system",
      content: Prompt,  // Load prompt from the separate file
    },
    ...chatHistory,
    {
      role: "user",
      content: message,
    },
  ];

  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      temperature: 0.7,   // Control randomness
      max_tokens: 256,    // Limit tokens to control response length
    });

    const responseContent = res.choices[0].message.content;

    // Parse and validate the response into the GptResponse type
    const response: GptResponse | undefined = responseContent ? JSON.parse(responseContent) : undefined;

    if (response && validateResponse(response)) {
      return response;
    } else {
      console.error("Invalid response format:", response);
      return undefined;
    }
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    return undefined;
  }
}

// Function to validate the response structure
function validateResponse(response: GptResponse): boolean {
  // Perform necessary validation checks here (e.g., check required fields)
  return typeof response.userQuery === 'object';
}
