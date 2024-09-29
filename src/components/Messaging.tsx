import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sendMsgToOpenAI } from "../../openAI.ts";

export function Messaging() {
    const location = useLocation();
    const { message } = location.state || { message: '' }; // Retrieve the passed message
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
        { sender: 'You', text: message }, // Initial message from the current user
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const currentUser = 'You'; // Simulated sender (this can be dynamic or come from props)

    // Function to handle message sending
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (inputMessage.trim()) {
            // Add the user's message to the message history

            const newMsgs = [{sender:"You", text:inputMessage}, ...messages]
            setMessages(newMsgs)
            setInputMessage('')
            await sendMsg(inputMessage, newMsgs)
        }
    };

    // Async function to send message to OpenAI
    const sendMsg = async (msg: string, curMsgs:  {sender: string; text: string;}[] | undefined) => {
        const finishedMsg = 'Here is a list of professionals that can help you with your request'

        try {
            const response = await sendMsgToOpenAI(msg);
            if (response && response.message && response.action !== "GENERATING") {
                // Append GPT's response to the message history
                if (curMsgs){
                    setMessages([{ sender: 'gpt', text: response.message }, ...curMsgs]);
                }else{
                    setMessages([{ sender: 'gpt', text: response.message }, ...messages])
                }
            }else if (response?.action === "GENERATING"){
                if (curMsgs){
                    setMessages([{ sender: 'gpt', text: finishedMsg }, ...curMsgs]);
                }else{
                    setMessages([{ sender: 'gpt', text: finishedMsg}, ...messages])
                }
            }
        } catch (error) {
            console.error("Error while sending message to OpenAI:", error);
        }
    };

    useEffect(() => {
        if (message) {
            // Automatically send the initial message from location state
            sendMsg(message, undefined).then()
        }
    }, []);

    // Message bubble component
    const MessageBubble = ({ sender, text }: { sender: string; text: string }) => (
        <div
            className={`p-2 my-2 rounded-lg w-fit max-w-[80%] 
                ${sender === currentUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}
        >
            <p>{text}</p>
        </div>
    );

    return (
        <div className="h-full w-full p-4 bg-gray-100 flex flex-col justify-between">
            {/* Message List */}
            <div className="flex-grow mb-4 max-h-[70vh] overflow-y-auto flex flex-col-reverse">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} sender={msg.sender} text={msg.text} />
                ))}
            </div>

            {/* Input Field */}
            <form onSubmit={handleSendMessage} className="flex">
                <input
                    type="text"
                    className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type a message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
