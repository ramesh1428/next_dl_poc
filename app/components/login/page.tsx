'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import '../globals.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        console.log(`Logging in with email: ${email} and password: ${password}`);
        // Navigate to home page
        // window.location.href = '/home';
        router.push('/components/home');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-300 via-pink-400 to-red-400">
                <h1 className="text-2xl mb-6 text-center">Welcome to the Login Page</h1>
                <form className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-bold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-bold">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-indigo-700 text-white py-3 rounded-lg hover:bg-indigo-800 w-1/2 flex justify-center ml-auto ml-650"   // Center the button
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;