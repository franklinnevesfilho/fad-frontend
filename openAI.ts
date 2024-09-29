import { OpenAI } from "openai";
import Prompt from './src/assets/prompt.txt'
import * as fs from "node:fs";

// Load environment variables from .env file
// Initialize OpenAI directly with the API key

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Define the type for the message parameter
type Message = {
  role: 'system' | 'user';
  content: string;
};

// Send Message to OpenAI using Chat Completion API
export async function sendMsgToOpenAI(message: string): Promise<string | void> {
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
    }
  ];

  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      temperature: 0.7,   // Control randomness
      max_tokens: 256,    // Limit tokens to control response length
    });

    const responseText: string | null = res.choices[0].message.content;
    console.log("Response: ", responseText);  // Print the AI response

    // Here you can implement logic to check if the response is well-formed
    // based on your <response_format>

    if (responseText){
      return responseText
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
  } catch (error: never) {
    console.error("Error with OpenAI API: ", error.response ? error.response.data : error.message);
  }
}
