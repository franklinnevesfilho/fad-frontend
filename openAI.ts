import {OpenAI} from "openai";
import {Prompt} from "./src/assets/prompt";
import {useState} from "react";

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
export async function sendMsgToOpenAI(message: string): Promise<GptResponse | undefined> {

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

  // Add the current user message
  const messages: Message[] = [
    {
      role: "system",
      content: Prompt,  // Load prompt from the separate file
    },
    {
      role: "user",
      content: message,
    },
  ];

    const res = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      temperature: 0.7,   // Control randomness
      max_tokens: 256,    // Limit tokens to control response length
    });

    const responseContent = res.choices[0].message.content;

    // Parse and validate the response into the GptResponse type
  return responseContent ? JSON.parse(responseContent) : undefined

}
