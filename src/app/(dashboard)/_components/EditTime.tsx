import PromptMessage from "@/components/PromptMessage";
import { Button } from "@/components/ui/button";

import React from "react";

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
    const validTime = openingTime < closingTime; // Validation: Opening time must be less than closing time
    const renderMessage = () => {
        if (!validTime) {
            return <PromptMessage type="error" message="Opening time must be less than closing time." />;
        }
        if (isSaveDisabled) {
            return <PromptMessage type="info" message="No changes made yet, change time to save." />;
        }
        return <PromptMessage type="success" message="You can now save." />;
    };


    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row font-bold">
                <div className="mb-4 mr-4">
                    <label htmlFor="opening-time" className="block text-lg font-medium mb-2">
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
                    <label htmlFor="closing-time" className="block text-lg font-medium mb-2">
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
            {/* Dynamically display error message using the reusable PromptMessage component */}
            {renderMessage()}
            <div className="flex flex-row items-center pt-4">
                <Button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => setIsEditing(false)}
                >
                    Cancel
                </Button>
                <Button
                    disabled={!validTime || isSaveDisabled} // Save disabled if invalid or unchanged
                    className={`${validTime ? "bg-teal-700 hover:bg-teal-500" : "bg-gray-400 cursor-not-allowed"
                        } text-white font-bold py-2 px-4 rounded`}
                    onClick={handleSave}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
