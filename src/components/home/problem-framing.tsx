"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { GraphicLeadsGhost, GraphicAgencyCarousel, GraphicInvisibleSearch } from "@/components/ui/animated-graphics";
import { motion } from "framer-motion";

export function ProblemFraming() {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-stone">The Problem</span>
                    <h2 className="font-headline text-4xl md:text-5xl text-ink">
                        Your clinic is <span className="italic text-amber">busy</span>. But is it growing?
                    </h2>
                </div>

                <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-6">
                    <BentoCard className="col-span-1 p-0">
                        <div className="w-full h-64 relative rounded-t-xl bg-gradient-to-br from-neutral-100 to-white overflow-hidden flex-shrink-0">
                            <GraphicLeadsGhost />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">Leads That Ghost</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                You're paying for ads, but 50% of leads never answer the phone. Your front desk can't follow up fast enough, and every missed lead is a missed patient.
                            </p>
                        </div>
                    </BentoCard>

                    <BentoCard className="col-span-1 p-0">
                        <div className="w-full h-64 relative rounded-t-xl bg-gradient-to-br from-neutral-100 to-white overflow-hidden flex-shrink-0">
                            <GraphicAgencyCarousel />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">The Agency Carousel</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                You've tried two, maybe three agencies. They all promised leads. None delivered patients in chairs. You're paying retainers for vanity metrics.
                            </p>
                        </div>
                    </BentoCard>

                    <BentoCard className="col-span-1 p-0">
                        <div className="w-full h-64 relative rounded-t-xl bg-gradient-to-br from-neutral-100 to-white overflow-hidden flex-shrink-0">
                            <GraphicInvisibleSearch />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">Invisible Where It Matters</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                Patients are searching for exactly what you offer — right now. But they're finding your competitors first. Your clinical skills are world-class, but your digital presence isn't.
                            </p>
                        </div>
                    </BentoCard>
                </BentoGrid>
            </div>
        </section>
    );
}
