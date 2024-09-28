import React from 'react';


export function CustomInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="mb-4">
            <input
                {...props}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
}

