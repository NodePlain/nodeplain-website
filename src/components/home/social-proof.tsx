"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Star } from "lucide-react";

export function SocialProof() {
    return (
        <section id="proof" className="py-24 px-6 bg-[#F0EDE4] relative">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-16 relative z-10">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-stone">Results</span>
                    <h2 className="font-headline text-4xl text-ink">
                        The numbers speak for <span className="italic text-amber">themselves</span>.
                    </h2>
                </div>

                {/* Featured Case Study */}
                <GlassCard className="p-8 md:p-12 relative group">
                    {/* Background blur accent */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber/10 transition-colors duration-700" />

                    <div className="flex flex-col gap-8 relative z-10">
                        <div className="flex flex-col gap-1">
                            <div className="font-mono text-xs text-stone uppercase tracking-widest mb-1">Featured Case Study</div>
                            <h3 className="font-headline font-semibold text-2xl text-ink">Head to Toe Therapies</h3>
                            <p className="text-stone">Sports & Paediatric Physiotherapy — Sydney, Australia</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { val: "$1,000", label: "Ad Spend" },
                                { val: "15", label: "New Patients" },
                                { val: "$67", label: "Cost Per Patient" },
                                { val: "100%", label: "Rebook Rate" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col p-4 rounded-lg bg-white/40 border border-white/40 backdrop-blur-sm">
                                    <span className="font-headline-bold text-2xl text-ink">{stat.val}</span>
                                    <span className="text-xs uppercase tracking-wide text-stone pt-1">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <blockquote className="font-headline italic text-lg text-warm-body leading-relaxed">
                            "NodePlain redesigned our website, built our Meta Ads pipeline, and delivered 15 new sports physio patients from just $1,000 in ad spend. Every single patient rebooked. The system runs itself — we just treat patients."
                        </blockquote>
                        <div className="font-body font-medium text-sm text-ink">— Clinic Director, Head to Toe Therapies</div>
                    </div>
                </GlassCard>

                {/* Testimonial Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { quote: "We went from 12 new patients a month to 47 in 90 days. The automation alone was worth the investment.", author: "Dr. Sarah M., MSK Physiotherapy" },
                        { quote: "I'd been burned by three agencies before NodePlain. The profitability guarantee made me take the leap.", author: "Tom R., Spinal Clinic" },
                        { quote: "For the first time, I don't worry about where the next patient is coming from. The pipeline just works.", author: "Dr. James L., Osteopath" },
                    ].map((t, i) => (
                        <GlassCard key={i} intensity="light" className="p-6 flex flex-col gap-4">
                            <div className="flex gap-0.5 text-amber">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="font-headline italic text-warm-body text-lg leading-relaxed">"{t.quote}"</p>
                            <div className="mt-auto pt-4 border-t border-stone/10">
                                <p className="font-body text-xs font-bold text-ink">{t.author}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
