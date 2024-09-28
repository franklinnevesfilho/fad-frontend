import React, { useState } from 'react';
import {CustomInput} from "../components/customInput.tsx";

export function RegistrationScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [legalStatus, setLegalStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('DOB:', dob);
        console.log('Legal Status:', legalStatus);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-10 transform translate-y-[-10%]">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <CustomInput
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        required
                    />

                    <CustomInput
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        placeholder="Date of Birth"
                        required
                    />

                    <CustomInput
                        type="text"
                        id="legalStatus"
                        value={legalStatus}
                        onChange={(e) => setLegalStatus(e.target.value)}
                        placeholder="Legal Status"
                        required
                    />

                    {/* Email Input */}
                    <CustomInput
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />

                    {/* Password Input */}
                    <CustomInput
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />

                    {/* Confirm Password Input */}
                    <CustomInput
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-4 text-center">
                    <span className="text-gray-700">Already have an account?</span>
                    <a href="#login" className="text-blue-500 hover:underline ml-2">
                        Log in here
                    </a>
                </div>
            </div>
        </div>
    );
}
