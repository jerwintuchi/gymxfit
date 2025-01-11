"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // If you're using Next.js for routing
import { SignOutButton, useClerk } from '@clerk/nextjs';
import Image from 'next/image';
import MediaLoader from '@/components/MediaLoader';


const Unauthorized = () => {
    const [loading, setLoading] = useState(true);
    const clerk = useClerk();

    useEffect(() => {
        if (!clerk.loaded) {
            setLoading(false);
        }
    }, [clerk.loaded]);



    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
                <div className="mb-6 justify-items-center">
                    <Image src={"/static/unauthorized-image.png"} alt="Unauthorized" width={150} height={150} layout="fixed" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-red-500">Unauthorized</h1>
                <p className="text-gray-400 mb-6">
                    You do not have permission to access this page.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {!loading ?
                        <Link href="/sign-in" className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <SignOutButton redirectUrl="/sign-in">Back to Sign In</SignOutButton>
                        </Link> :
                        <MediaLoader src="/static/spinning-dot2.svg" width={40} height={40} className='text-black bg-black border px-4 rounded-md' />
                    }
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;