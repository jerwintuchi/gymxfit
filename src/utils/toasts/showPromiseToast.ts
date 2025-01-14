// utils/toasts/toastUtils.ts
import { toast } from 'react-hot-toast';

type ToastPromiseOptions = {
    loading: string;
    success: string;
    error: string;
};

export const showPromiseToast = (promise: Promise<unknown>, options: ToastPromiseOptions) => {
    toast.promise(
        promise,
        {
            loading: options.loading,
            success: options.success,
            error: options.error,
        },
        {
            style: {
                border: '1px solid #4B5563', // Tailwind GRAY-600
                padding: '16px',
                color: '#F9FAFB', // Tailwind GRAY-50
                background: '#1F2937', // Tailwind GRAY-800
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px', // Ensures icon and text have proper spacing
                textAlign: 'center',
            },
            iconTheme: {
                primary: '#10B981', // Tailwind GREEN-500
                secondary: '#FFFFFF', // WHITE
            },
            success: {
                duration: 3000,
                style: {
                    border: '1px solid #10B981', // Tailwind GREEN-500
                    color: '#10B981', // Tailwind GREEN-500
                    background: '#111827', // Tailwind GRAY-900
                },
                iconTheme: {
                    primary: '#10B981',
                    secondary: '#FFFFFF',
                },
            },
            error: {
                duration: 3000,
                style: {
                    border: '1px solid #EF4444', // Tailwind RED-500
                    color: '#EF4444', // Tailwind RED-500
                    background: '#111827', // Tailwind GRAY-900
                },
                iconTheme: {
                    primary: '#EF4444',
                    secondary: '#FFFFFF',
                },
            },
        }
    );
};
