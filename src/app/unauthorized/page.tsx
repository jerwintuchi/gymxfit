import React from 'react';
import Link from 'next/link'; // If you're using Next.js for routing
import { SignOutButton } from '@clerk/nextjs';

const Unauthorized = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
            <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-bold mb-4 text-red-500">Unauthorized</h1>
                <p className="text-gray-300 mb-6">
                    You do not have permission to access this page.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/sign-in" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <SignOutButton redirectUrl="/sign-in">Back to Sign In</SignOutButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;