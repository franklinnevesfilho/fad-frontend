import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {sendMsgToOpenAI} from "../../openAI.ts";

export function Messaging() {
    const location = useLocation();
    const { message } = location.state || { message: '' }; // Retrieve the passed message

    // State to store messages
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
        { sender: 'You', text: message }, // Initial message from the current user
    ]);
    const [inputMessage, setInputMessage] = useState('');

    // Simulated sender (this can be dynamic or come from props)
    const currentUser = 'You';

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputMessage.trim()) {
            setMessages([{ sender: currentUser, text: inputMessage }, ...messages]);
            setInputMessage(''); // Clear input field
        }
    };

    const MessageBubble = (msg: { sender: string; text: string }) => {
        return (
            <div
                className={`p-2 my-2 rounded-lg w-fit max-w-[80%] 
        ${msg.sender === currentUser ?
                    'bg-blue-500 text-white self-end' :
                    'bg-gray-300 text-black self-start'
                }`}
            >
                <p>{msg.text}</p>
            </div>
        );
    };

    // Log the message from the location state
    useEffect(() => {
        sendMsgToOpenAI(message).then((r)=>{
            if (r){
                setMessages([{sender:"gpt", text:r}, ...messages])
                console.log("response",r)
            }else{
                console.log("nothing")
            }
        })
    }, []);

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
