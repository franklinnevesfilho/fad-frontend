
export function SplitScreen (){
    return (
        <div className="flex h-screen">
            {/* Left Side: Chat */}
            <div className="w-1/2 border-r border-gray-300 p-4 bg-gray-100">
                <h2 className="text-2xl font-bold mb-4">Chat</h2>
                {/* Replace this div with your chat component */}
                <div className="h-full overflow-y-auto">
                    <div className="p-2 mb-2 bg-white rounded shadow">
                        <p><strong>User:</strong> Hello!</p>
                    </div>
                    <div className="p-2 mb-2 bg-blue-100 rounded shadow">
                        <p><strong>Chatbot:</strong> Hi there! How can I help you?</p>
                    </div>
                    {/* Add more chat messages here */}
                </div>
            </div>

            {/* Right Side: Article */}
            <div className="w-1/2 p-4 bg-white">
                <h2 className="text-2xl font-bold mb-4">Article</h2>
                {/* Replace this div with your article component */}
                <div className="h-full overflow-y-auto">
                    <p className="mb-2">
                        This is an article section.
                    </p>
                    <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    </p>
                    <p>
                        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                    </p>
                    {/* Add more article content here */}
                </div>
            </div>
        </div>
    );
};
