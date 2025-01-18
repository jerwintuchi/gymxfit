import { Button } from '@/components/ui/button';
import { formatTime } from '@/utils/timeHelpers';

import { Pencil } from 'lucide-react';
import React from 'react';

interface DisplayTimeProps {
    openingTime: string;
    closingTime: string;
    handleEdit: () => void;
}
    
export default function DisplayTime({ openingTime, closingTime, handleEdit }: DisplayTimeProps) {
    // Safely format times
    const formattedOpeningTime = openingTime ? formatTime(openingTime) : 'Not set';
    const formattedClosingTime = closingTime ? formatTime(closingTime) : 'Not set';

    return (
        <div className="gym-hours-container flex flex-row justify-center">
            <p className="font-bold text-4xl md:text-4xl lg:text-6xl pb-4 pr-2 lg:pr-2 ">
                {openingTime && closingTime
                    ? `Open from ${formattedOpeningTime} to ${formattedClosingTime}`
                    : "Please set the gym hours."}
            </p>

            <Button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full w-4 h-7" onClick={handleEdit}>
                <Pencil size={10} />
            </Button>
        </div>
    );
}
