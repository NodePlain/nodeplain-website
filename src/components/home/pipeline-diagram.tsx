"use client";

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
                <div
                    className="w-full bg-gradient-to-b from-transparent via-amber to-transparent h-[100px] absolute animate-pipeline-flow"
                />
            </div>

            <div className="flex flex-col gap-12 w-full max-w-lg relative">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-6 relative animate-fade-in-left"
                        style={{ animationDelay: `${i * 200}ms` }}
                    >
                        <div className={`w-12 h-12 rounded-full bg-white shadow-lg border border-stone/10 flex items-center justify-center relative z-10 ${step.color}`}>
                            <step.icon size={20} />
                            <div
                                className="absolute inset-0 rounded-full bg-current opacity-20 animate-ping-slow"
                                style={{ animationDelay: `${i * 500}ms` }}
                            />
                        </div>
                        <div className="glass-panel px-4 py-2 flex-1">
                            <span className="font-headline-bold text-ink text-sm">{step.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
