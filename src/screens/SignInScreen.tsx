import React, { useState } from 'react';

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-10 transform translate-y-[-10%]">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Password"
                            required
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>

                {/* Forgot Password Link */}
                <div className="mt-4 text-center">
                    <a href="#forgot-password" className="text-blue-500 hover:underline">
                        Forgot your password?
                    </a>
                </div>

                {/* Sign Up Link */}
                <div className="mt-4 text-center">
                    <span className="text-gray-700">Don't have an account?</span>
                    <a href="#signup" className="text-blue-500 hover:underline ml-2">
                        Sign up here
                    </a>
                </div>
            </div>
        </div>
    );
}
