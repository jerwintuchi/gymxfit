import React from 'react';
import Link from 'next/link'; // If you're using Next.js for routing
import { SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
const Unauthorized = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
                <div className='justify-items-center p-4'>
                    <Image src={"/static/unauthorized-image.png"} alt="unauthorized" width={100} height={100} />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-red-500">Unauthorized</h1>
                <p className="text-gray-500 mb-6">
                    You do not have permission to access this page.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/sign-in" className="bg-gray-900 hover:bg-gray-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <SignOutButton redirectUrl="/sign-in">Back to Sign In</SignOutButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;