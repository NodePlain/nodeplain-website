"use client";

import { motion } from "framer-motion";
import { Search, Settings, CalendarCheck } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Free Pipeline Audit",
            desc: "We analyse your current patient flow and ad spend. You'll leave with a clear picture of lead leaks.",
            icon: Search
        },
        {
            num: "02",
            title: "System Build (2–4 Weeks)",
            desc: "We build your complete pipeline: AHPRA-compliant creative, automations, and reporting dashboard.",
            icon: Settings
        },
        {
            num: "03",
            title: "Patients in Chairs (Week 1)",
            desc: "Campaigns go live. Leads flow. Patients book. You start seeing results within days of launch.",
            icon: CalendarCheck
        }
    ];

    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-stone">Process</span>
                    <h2 className="font-headline text-4xl text-ink max-w-[700px]">
                        From first call to patients in chairs — in <span className="italic text-amber">weeks</span>, not months.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-stone/10 z-0"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-6 relative z-10 group">
                            <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-stone/10 flex items-center justify-center text-amber relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-300">
                                <step.icon size={32} />
                                <div className="absolute inset-0 bg-amber/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-headline-bold text-4xl text-stone/20">{step.num}</span>
                                <h3 className="font-headline-bold text-lg text-ink">{step.title}</h3>
                                <p className="font-body text-sm text-stone leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
