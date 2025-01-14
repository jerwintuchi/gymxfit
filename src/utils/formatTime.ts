import { format } from 'date-fns';

function formatTime(time: string): string {
    const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/; // Validate HH:MM format

    if (!timeRegex.test(time)) {
        console.error(`Invalid time format: ${time}`);
        return 'Invalid Time'; // Provide a fallback value
    }

    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    return format(date, 'h:mm aa'); // Format as h:mm AM/PM
}

export default formatTime;
