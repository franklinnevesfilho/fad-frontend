import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../components/customInput.tsx";

export function HomeScreen() {
    const [message, setMessage] = useState<string>("");
    const navigate = useNavigate();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission
            navigate("/connected", { state: { message } }); // Pass the message as state
        }
    };

    return (
        <div className="container mx-auto p-4 text-center">
            <div id="home" className="my-8">
                <h1 className="text-4xl font-bold mb-4">Ask FAD</h1>
                <CustomInput
                    className="w-full"
                    type="text"
                    id="question"
                    placeholder="Ask a question"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown} // Add key down handler
                />
            </div>
            <div id="about" className="my-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                    <p>
                        Empowering immigrants seeking asylum by leveraging
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
