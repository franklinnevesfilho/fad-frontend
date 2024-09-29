const { OpenAI } = require("openai");
require('dotenv').config();  // Load environment variables
const fs = require('fs');
const path = require('path');

// Initialize OpenAI directly with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure your .env file has this key
});

// Load the prompt from a separate file
const prompt = fs.readFileSync(path.resolve(__dirname, 'prompt.prompt'), 'utf8');

// Send Message to OpenAI using Chat Completion API
async function sendMsgToOpenAI(message) {

  // Add the current user message
  const messages = [
    {
      role: "system",
      content: prompt,  // Load prompt from the separate file
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

    const responseText = res.choices[0].message.content;
    console.log("Response: ", responseText);  // Print the AI response

    // Here you can implement logic to check if the response is well-formed
    // based on your <response_format>

    return responseText;
  } catch (error) {
    console.error("Error with OpenAI API: ", error.response ? error.response.data : error.message);
  }
}

// Example usage
sendMsgToOpenAI("Hello, my name is Max Payne, I am from Miami Florida. I want to learn more about Green card application");
