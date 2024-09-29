import {CustomInput} from "../components/customInput.tsx";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export function HomeScreen(){
    const [question, setQuestion] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Reroute to the messaging screen with the current question
        if (question.trim()) {
            navigate('/connected', { state: { message: question } }); // Pass the question as state
        }
    };

    // Detect "Enter" key press in the input
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            handleSubmit(e as never); // Trigger the submit logic
        }
    };
    return (
        <div className="container mx-auto p-4 text-center">
            <div id="home" className="my-8">
                <h1 className="text-4xl font-bold mb-4">Ask FAD</h1>
                {/* Form to handle submit */}
                <form onSubmit={handleSubmit}>
                    <CustomInput
                        className="w-full"
                        type="text"
                        id="question"
                        placeholder="Ask a question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}  // Handle input change
                        onKeyDown={handleKeyDown}  // Detect Enter key
                        required
                    />
                </form>
            </div>
            <div id="about" className="my-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4 ">About Us</h2>
                    <p>Empowering immigrants seeking asylum by leveraging
                        generative AI to provide personalized, accessible
                        guidance on obtaining legal entry into the United States
                        through Green Card pathways, fostering a clearer path to safety,
                        security, and opportunity.
                    </p>
                </div>

            </div>

            <div id="services" className="my-8">
                <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
                <p>Details about the services offered.</p>
            </div>
        </div>
    );
}
