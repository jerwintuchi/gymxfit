"use client";
import { Button } from '@/components/ui/button';
import { PenIcon } from 'lucide-react';
import React, { useState } from 'react';

export default function GymHours() {
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [isEditing, setIsEditing] = useState(false); // Track editing state

    const handleTimeChange = (type: 'opening' | 'closing', value: string) => {
        if (type === 'opening') {
            setOpeningTime(value);
        } else {
            setClosingTime(value);
        }
    };

    const handleSave = () => {
        // Implement logic to save the updated times to your backend (e.g., API call)
        console.log('Saving gym hours:', openingTime, closingTime);
        setIsEditing(false); // Switch back to display mode
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="gym-hours flex flex-col text-white p-4 rounded-lg bg-gray-900">
            {isEditing ? ( // Conditionally render edit mode
                <>
                    <div className="mb-4 flex items-center">
                        <label htmlFor="opening-time" className="text-lg font-medium mr-2">
                            Opening Time
                        </label>
                        <i className="fas fa-clock text-gray-500 hover:text-blue-500 cursor-pointer mr-2" onClick={() => { /* Simulate time picker click */ }}></i>
                        <input
                            id="opening-time"
                            type="time"
                            value={openingTime}
                            onChange={(e) => handleTimeChange('opening', e.target.value)}
                            className="p-2 rounded bg-gray-700 text-white w-max-auto"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="closing-time" className="text-lg font-medium mr-2">
                            Closing Time
                        </label>
                        <i className="fas fa-clock text-gray-500 hover:text-blue-500 cursor-pointer mr-2" onClick={() => { /* Simulate time picker click */ }}></i>
                        <input
                            id="closing-time"
                            type="time"
                            value={closingTime}
                            onChange={(e) => handleTimeChange('closing', e.target.value)}
                            className="p-2 rounded bg-gray-700 text-white w-max-auto"
                        />
                    </div>

                    <div className="flex flex-row justify-start">
                        <button className="bg-gray-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded mr-2" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                        <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-1 px-4 rounded" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </>
            ) : ( // Display mode
                <div className="gym-hours-container flex flex-row">
                    <p className="text-xl pr-2 flex-nowrap">
                        {openingTime && closingTime
                            ? `Open from ${openingTime} to ${closingTime}`
                            : 'Please set the gym hours.'}
                    </p>
                    <Button className="bg-teal-500 hover:bg-green-400 text-white font-bold rounded-full w-4 h-8" onClick={handleEdit}>
                        <PenIcon size={10} />
                    </Button>
                </div>
            )}
        </div>
    );
}