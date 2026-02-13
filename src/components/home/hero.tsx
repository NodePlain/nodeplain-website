"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="relative pt-12 md:pt-20 pb-20 px-6 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center gap-10">
            {/* Tag */}
            <motion.span
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
                className="font-mono text-[0.7rem] uppercase tracking-widest text-amber bg-amber/5 px-3 py-1.5 rounded-full border border-amber/10"
            >
                Performance Marketing for Allied Health
            </motion.span>

            {/* Stat Chips */}
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    { label: "Avg Cost/Patient", value: "$67" },
                    { label: "Guarantee", value: "90-Day Profitability" },
                    { label: "Response Time", value: "<60s" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 + 0.2 }}
                    >
                        <GlassCard intensity="light" className="px-4 py-2 flex items-center gap-2 rounded-full !border-amber/10">
                            <span className="font-headline-bold text-amber text-sm">{stat.value}</span>
                            <span className="w-1 h-1 rounded-full bg-stone/30"></span>
                            <span className="text-[0.7rem] font-medium text-stone uppercase tracking-wide">{stat.label}</span>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            {/* Detailed Content */}
            <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center gap-6 w-full"
            >
                <h1 className="font-headline text-5xl md:text-7xl text-ink leading-[1.05] max-w-[900px]">
                    The patient pipeline that pays for <span className="italic text-amber">itself</span> — or you don't pay us.
                </h1>
                <p className="font-body text-warm-mid text-lg md:text-xl max-w-[700px] leading-relaxed">
                    Done-for-you Meta Ads, speed-to-lead automation, and practice management integration. Built specifically for Physiotherapy, Chiropractic, and Osteopathy clinics.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button asChild className="cta-primary text-sm px-8 py-6 text-cream shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <Link href="#book">Book Your Free Pipeline Audit</Link>
                    </Button>
                    <Button asChild variant="ghost" className="text-ink hover:bg-stone/10 px-8 py-6 border border-stone/10">
                        <Link href="#proof">See Our Results</Link>
                    </Button>
                </div>
            </motion.div>

            {/* Trusted By Placeholder */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.8, duration: 1 }}
                className="mt-12 flex flex-col items-center gap-4"
            >
                <p className="text-[0.65rem] text-stone uppercase tracking-widest">Trusted by allied health clinics across Australia</p>
                <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder blocks for client logos */}
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                </div>
            </motion.div>
        </section>
    );
}
