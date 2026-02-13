"use client";

import { motion } from "framer-motion";
import { Eye, ClipboardCheck, Zap, Calendar, UserCheck } from "lucide-react";

export function PipelineAnimation() {
    const steps = [
        { icon: Eye, label: "Ad Seen", color: "text-stone" },
        { icon: ClipboardCheck, label: "Lead Captured", color: "text-amber" },
        { icon: Zap, label: "Contacted <60s", color: "text-amber-dark" },
        { icon: Calendar, label: "Booked", color: "text-moss" },
        { icon: UserCheck, label: "Patient in Chair", color: "text-moss-dark" },
    ];

    return (
        <div className="relative h-full w-full min-h-[400px] flex flex-col items-center justify-center py-10">
            {/* Connecting Line */}
            <div className="absolute left-[24px] md:left-1/2 top-10 bottom-10 w-0.5 bg-stone/10 md:-translate-x-1/2">
                <motion.div
                    className="w-full bg-gradient-to-b from-transparent via-amber to-transparent h-[100px]"
                    animate={{ top: ["-20%", "120%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ position: 'absolute' }}
                />
            </div>

            <div className="flex flex-col gap-12 w-full max-w-lg relative">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-6 relative"
                    >
                        <div className={`w-12 h-12 rounded-full bg-white shadow-lg border border-stone/10 flex items-center justify-center relative z-10 ${step.color}`}>
                            <step.icon size={20} />
                            {/* Pulse effect for active steps */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-current opacity-20"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            />
                        </div>
                        <div className="glass-panel px-4 py-2 flex-1">
                            <span className="font-headline-bold text-ink text-sm">{step.label}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
