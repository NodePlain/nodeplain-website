"use client";

import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WhoWeHelp() {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-stone">Who We Help</span>
                    <h2 className="font-headline text-4xl text-ink">
                        Purpose-built for <span className="italic text-amber">your</span> profession.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: "🦴",
                            title: "Physiotherapy",
                            desc: "Sports/MSK, Paediatric, NDIS. Fill junior columns.",
                            href: "/who-we-help/physiotherapy",
                            cta: "Explore Physio Solutions"
                        },
                        {
                            icon: "🔧",
                            title: "Chiropractic",
                            desc: "Spinal decompression & care plans. 70%+ show rates.",
                            href: "/who-we-help/chiropractic",
                            cta: "Explore Chiro Solutions"
                        },
                        {
                            icon: "🤲",
                            title: "Osteopathy",
                            desc: "Stop losing patients to physios. Rank for back pain.",
                            href: "/who-we-help/osteopathy",
                            cta: "Explore Osteo Solutions"
                        }
                    ].map((card, i) => (
                        <Link key={i} href={card.href} className="group">
                            <GlassCard className="h-full p-8 flex flex-col gap-6 hover:border-amber/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="font-headline-bold text-xl text-ink group-hover:text-amber transition-colors">{card.title}</h3>
                                    <p className="font-body text-warm-body leading-relaxed text-sm">
                                        {card.desc}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-ink group-hover:text-amber transition-colors">
                                    {card.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
