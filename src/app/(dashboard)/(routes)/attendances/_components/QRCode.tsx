"use client";

import { devUrl } from '@/utils/global-variables';
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QRCode() {
    const [loading, setLoading] = useState(false);
    const { userId, getToken } = useAuth();
    const [qrtoken, setQRToken] = useState("");
    const url = `${devUrl}/qr/validate/${qrtoken}`;

    const fetchQRMetadata = useCallback(async () => {
        const token = await getToken();
        try {
            const res = await axios.post(`${devUrl}/qr/metadata`,
                { userId },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }

                });
            if (res?.data?.qrMetadata) {
                setQRToken(res.data.qrMetadata); // Set the token only when valid data is received
            } else {
                console.error("Failed to fetch QR metadata: No data received");
            }
        } catch (error) {
            console.error("Error fetching QR metadata:", error);
        }
    }, [userId, getToken]);

    useEffect(() => {
        if (userId) {
            fetchQRMetadata();
            setLoading(false);
        }
    }, [fetchQRMetadata, userId]);

    return (
        <div className={`flex justify-center items-center min-h-min bg-gray-900 overflow-hidden ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 `}>
            <div className="p-4 bg-white rounded-lg shadow-md max-w-xs w-full text-center space-y-2">
                <QRCodeSVG
                    value={"https://www.google.com"}
                    title="Scan to Validate"
                    size={256}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="H"
                    imageSettings={{
                        src: "/static/mainlogo(qr).jpg",
                        height: 32,
                        width: 32,
                        opacity: 1,
                        excavate: true,
                    }}
                    className="mx-auto" />
                <p className="text-gray-400 text-xs font-medium tracking-wide">Scan the QR Code</p>
            </div>
        </div>
    );
}
