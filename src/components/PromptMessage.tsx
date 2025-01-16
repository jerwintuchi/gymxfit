import React from "react";

interface PromptMessageProps {
    message: string; // Message to display
    type: messageType;
    customStyle?: string; // Optional custom styles for this condition
}

type messageType = "success" | "error" | "info";

/* interface PromptMessageProps {
    conditions: Condition[]; // Array of conditions with messages
    className?: string; // Default styling for the message
} */

const PromptMessage: React.FC<PromptMessageProps> = ({ type, message, customStyle }: PromptMessageProps) => {
    const defaultStyles: Record<messageType, string> = {
        success: "text-sm text-green-500",
        error: "text-sm text-red-500",
        info: "text-sm text-yellow-500",
    };

    const styles = `${defaultStyles[type]} ${customStyle || ""}`;

    return message ? <p className={styles}>{message}</p> : null;
};






export default PromptMessage;
