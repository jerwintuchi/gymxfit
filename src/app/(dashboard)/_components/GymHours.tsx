"use client";

import React, { useEffect, useState } from "react";
import DisplayTime from "./DisplayTime";
import EditTime from "./EditTime";
import axios from "axios";
import { devUrl } from "@/utils/global-variables";
import { showPromiseToast } from "@/utils/toasts/showPromiseToast";
import showErrorToast from "@/utils/toasts/showErrorToast";



export default function GymHours() {
    //states for the original times
    const [originalOpeningTime, setOriginalOpeningTime] = useState("");
    const [originalClosingTime, setOriginalClosingTime] = useState("");

    //states for the updated times
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");

    const [isEditing, setIsEditing] = useState(false); // Track editing state

    let successMessage = "";
    //dynamic successMessage if openingTime is changed or closingTime is changed
    if (openingTime !== originalOpeningTime && closingTime !== originalClosingTime) {
        successMessage = `Updated opening time from ${originalOpeningTime} to ${openingTime} and closing time from ${originalClosingTime} to ${closingTime}`;
    } else if (closingTime !== originalClosingTime) {
        successMessage = `Updated closing time from ${originalClosingTime} to ${closingTime}`;
    } else if (openingTime !== originalOpeningTime) {
        successMessage = `Updated opening time from ${originalOpeningTime} to ${openingTime}`;
    }

    useEffect(() => {
        // Fetch gym hours from the backend 
        // Update the state with the fetched data
        const fetchGymHours = async () => {
            try {
                const gymHours = await axios.get(`${devUrl}/settings/get/gym-hours`);
                if (!gymHours) {
                    console.log("No gym hours found");
                    return;
                }
                const { openingTime, closingTime } = gymHours.data.value;
                console.log("Fetched gym hours:", gymHours.data.value);


                // Set both original and editable states
                setOriginalOpeningTime(openingTime);
                setOriginalClosingTime(closingTime);
                setOpeningTime(openingTime);
                setClosingTime(closingTime);
                
            } catch (error) {
                console.error("Error fetching gym hours:", error);
            }
        }
        if (!isEditing) {
            fetchGymHours();
        }
    }, [isEditing]);

    const handleTimeChange = (type: "opening" | "closing", value: string) => {
        if (type === "opening") {
            setOpeningTime(value);
        } else {
            setClosingTime(value);
        }
    };

    const handleSave = (openingTime: string, closingTime: string) => {
        // Implement logic to save the updated times to your backend (e.g., API call)
        const gymHours = { openingTime, closingTime };
        try {
            const response = axios.post(`${devUrl}/settings/update/gym-hours`, { gymHours });
            if (!response) {
                showErrorToast({ message: "Failed to save gym hours" });
                console.log("Failed to save gym hours");
                return;
            }
            console.log("gyHours: ", gymHours);
            console.log("Response:", response);
            showPromiseToast(response, { loading: "Saving gym hours...", success: successMessage, error: "Failed to save gym hours." });

            // Update original times after successful save
            setOriginalOpeningTime(openingTime);
            setOriginalClosingTime(closingTime);

        } catch (error) {
            showErrorToast({ message: "Error saving gym hours" });
            console.error("Error saving gym hours:", error);
        }
        setIsEditing(false); // Switch back to display mode
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="flex flex-col text-white p-4 bg-gray-900 rounded-lg">
            {isEditing ? ( // Conditionally render edit mode
                <EditTime
                    openingTime={openingTime}
                    closingTime={closingTime}
                    originalOpeningTime={originalOpeningTime}
                    originalClosingTime={originalClosingTime}
                    handleTimeChange={handleTimeChange}
                    handleSave={() => handleSave(openingTime, closingTime)}
                    setIsEditing={setIsEditing} />
            ) : (
                // Display mode
                <DisplayTime openingTime={openingTime} closingTime={closingTime} handleEdit={handleEdit} />
            )}
        </div>
    );
}
