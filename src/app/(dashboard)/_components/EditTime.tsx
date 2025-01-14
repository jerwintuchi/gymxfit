import { Button } from '@/components/ui/button';
import React from 'react'

interface EditTimeProps {
    openingTime: string;
    closingTime: string;
    originalOpeningTime: string; // Original opening time passed as a prop
    originalClosingTime: string; // Original closing time passed as a prop
    handleTimeChange: (type: "opening" | "closing", value: string) => void;
    handleSave: () => void;
    setIsEditing: (isEditing: boolean) => void;
}

export default function EditTime({
    openingTime,
    closingTime,
    originalOpeningTime,
    originalClosingTime,
    handleTimeChange,
    handleSave,
    setIsEditing,
}: EditTimeProps) {
    const isSaveDisabled = openingTime === originalOpeningTime && closingTime === originalClosingTime;

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-row'>
                <div className="mb-4 mr-4">
                    <label
                        htmlFor="opening-time"
                        className="block text-lg font-medium mb-2"
                    >
                        Opening Time
                    </label>

                    <input
                        id="opening-time"
                        type="time"
                        value={openingTime}
                        onChange={(e) => handleTimeChange("opening", e.target.value)}
                        className="p-2 rounded bg-gray-700 text-white w-max-auto"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="closing-time"
                        className="block text-lg font-medium mb-2"
                    >
                        Closing Time
                    </label>

                    <input
                        id="closing-time"
                        type="time"
                        value={closingTime}
                        onChange={(e) => handleTimeChange("closing", e.target.value)}
                        className="p-2 rounded bg-gray-700 text-white w-max-auto"
                    />
                </div>
            </div>


            <div className="flex flex-row items-start">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => setIsEditing(false)}
                >
                    Cancel
                </button>

                <Button
                    disabled={isSaveDisabled} // Enable only if at least one field has changed
                    className="bg-teal-700 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSave}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
