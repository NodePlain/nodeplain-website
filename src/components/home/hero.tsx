import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroSection() {
    return (
        <section className="relative pt-12 md:pt-20 pb-20 px-6 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center gap-10">
            {/* Tag */}
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-amber bg-amber/5 px-3 py-1.5 rounded-full border border-amber/10 animate-fade-in">
                Performance Marketing for Allied Health
            </span>

            {/* Stat Chips */}
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    { label: "Avg Cost/Patient", value: "$67", delay: "animate-fade-in-delay-1" },
                    { label: "Guarantee", value: "90-Day Profitability", delay: "animate-fade-in-delay-2" },
                    { label: "Response Time", value: "<60s", delay: "animate-fade-in-delay-3" }
                ].map((stat, i) => (
                    <div key={i} className={stat.delay}>
                        <GlassCard intensity="light" className="px-4 py-2 flex items-center gap-2 rounded-full !border-amber/10">
                            <span className="font-headline-bold text-amber text-sm">{stat.value}</span>
                            <span className="w-1 h-1 rounded-full bg-stone/30"></span>
                            <span className="text-[0.7rem] font-medium text-stone uppercase tracking-wide">{stat.label}</span>
                        </GlassCard>
                    </div>
                ))}
            </div>

            {/* Detailed Content */}
            <div className="flex flex-col items-center gap-6 w-full animate-fade-in-delay-2">
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
            </div>

            {/* Trusted By Placeholder */}
            <div className="mt-12 flex flex-col items-center gap-4 animate-fade-in-delay-3">
                <p className="text-[0.65rem] text-stone uppercase tracking-widest">Trusted by allied health clinics across Australia</p>
                <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder blocks for client logos */}
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                    <div className="w-24 h-8 bg-stone/20 rounded"></div>
                </div>
            </div>
        </section>
    );
}
