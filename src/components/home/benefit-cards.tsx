"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { GraphicCostChart, GraphicSpeedToLead, GraphicIntegration } from "@/components/ui/animated-graphics";
import { ShieldCheck, FileCheck, BarChart3 } from "lucide-react";

export function BenefitCards() {
    return (
        <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-white/30">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-stone">Why NodePlain</span>
                    <h2 className="font-headline text-4xl md:text-5xl text-ink">
                        Every advantage your competitors wish they <span className="italic text-amber">had</span>.
                    </h2>
                </div>

                <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 1. Cost Per Patient (Large) */}
                    <BentoCard className="col-span-1 md:col-span-2 p-0">
                        <div className="w-full h-64 relative rounded-t-xl bg-gradient-to-br from-amber/5 to-white overflow-hidden flex-shrink-0">
                            <GraphicCostChart />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">$67 Average Cost Per New Patient</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                Our proven Meta Ads system delivers new private patients at a fraction of what most clinics pay. Real patients, real bookings — not tyre-kickers.
                            </p>
                        </div>
                    </BentoCard>

                    {/* 2. Speed to Lead */}
                    <BentoCard className="col-span-1 p-0">
                        <div className="w-full h-64 relative rounded-t-xl bg-gradient-to-br from-stone/5 to-white overflow-hidden p-6 flex-shrink-0 flex items-center justify-center">
                            <GraphicSpeedToLead />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">{"<60s"} Response Time</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                Leads are contacted via SMS within seconds of inquiring. This is the #1 factor in show rates.
                            </p>
                        </div>
                    </BentoCard>

                    {/* 3. Integration */}
                    <BentoCard className="col-span-1 p-0">
                        <div className="w-full h-64 relative rounded-t-xl bg-gradient-to-br from-blue-50 to-white overflow-hidden p-6 flex-shrink-0 flex items-center justify-center">
                            <GraphicIntegration />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">Practice Integration</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                No new platforms. We plug directly into Cliniko, Halaxy, or Nookal. Automated reporting.
                            </p>
                        </div>
                    </BentoCard>

                    {/* 4. Guarantee */}
                    <BentoCard className="col-span-1 p-0">
                        <div className="w-full h-64 flex items-center justify-center relative rounded-t-xl bg-gradient-to-br from-moss/10 to-white overflow-hidden flex-shrink-0">
                            <div className="animate-pulse-glow">
                                <ShieldCheck size={64} className="text-moss" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">90-Day Guarantee</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                Profitable in 90 days or we waive our fees. We have skin in the game.
                            </p>
                        </div>
                    </BentoCard>

                    {/* 5. AHPRA Compliant */}
                    <BentoCard className="col-span-1 p-0">
                        <div className="w-full h-64 flex items-center justify-center relative rounded-t-xl bg-gradient-to-br from-stone/5 to-white overflow-hidden flex-shrink-0">
                            <FileCheck size={64} className="text-stone" />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="font-headline-bold text-lg text-ink">AHPRA Compliant</h3>
                            <p className="font-body text-sm text-warm-body leading-relaxed">
                                Every ad reviewed. No testimonial violations. Zero compliance risk.
                            </p>
                        </div>
                    </BentoCard>

                </BentoGrid>
            </div>
        </section>
    );
}
