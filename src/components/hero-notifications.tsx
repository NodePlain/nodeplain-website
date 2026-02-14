"use client";

import { useState, useEffect } from "react";
import { Check, Calendar } from "lucide-react";

const NOTIFICATIONS = [
    {
        id: 1,
        source: "Cliniko",
        title: "New Booking",
        message: "Sarah M. — Initial Consultation",
        time: "Just now",
        color: "bg-blue-500",
        icon: <Check size={14} className="text-white" />,
    },
    {
        id: 2,
        source: "Google Calendar",
        title: "New Appointment",
        message: "James T. — Follow-up Session",
        time: "2m ago",
        color: "bg-green-500",
        icon: <Calendar size={14} className="text-white" />,
    },
    {
        id: 3,
        source: "Cliniko",
        title: "New Booking",
        message: "Emma L. — Remedial Massage",
        time: "5m ago",
        color: "bg-blue-500",
        icon: <Check size={14} className="text-white" />,
    },
];

export function HeroNotifications() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-[320px] h-[100px] flex flex-col justify-end pointer-events-none select-none">
            <div
                key={NOTIFICATIONS[index].id}
                className="absolute bottom-0 w-full animate-fade-in"
            >
                <div className="glass-card p-4 flex items-start gap-4 shadow-lg border-white/20 bg-white/40 backdrop-blur-md">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm shrink-0 ${NOTIFICATIONS[index].color}`}
                    >
                        {NOTIFICATIONS[index].icon}
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-stone-dark opacity-70">
                                {NOTIFICATIONS[index].source}
                            </span>
                            <span className="text-[0.65rem] text-stone-mid">
                                {NOTIFICATIONS[index].time}
                            </span>
                        </div>
                        <span className="text-xs font-semibold text-ink truncate leading-tight">
                            {NOTIFICATIONS[index].message}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
