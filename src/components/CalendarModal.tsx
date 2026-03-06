import React from 'react';
import { X } from 'lucide-react';

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-700 bg-white/80 rounded-full hover:bg-slate-100 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="w-full bg-white h-[500px]">
                    <iframe
                        src="https://calendar.zoho.com/zc/ui/embed/#calendar=zz080112301ff36847f46335da8e80ee4d12f8ac9425067f3e6f0f6486dbd39b4d0120142e50352b2ea7aca43d973c325351ab0dae&title=navilla&type=1&language=en&timezone=America%2FLos_Angeles&showTitle=1&showTimezone=1&view=day&showDetail=0&theme=1&eventColorType=light"
                        title="navilla"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        className="border-0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
