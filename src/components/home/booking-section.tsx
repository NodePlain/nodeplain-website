"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Check } from "lucide-react";
import Script from "next/script";

export function BookingSection() {
    return (
        <section id="book" className="px-6 py-20 bg-ink text-cream relative overflow-hidden">
            {/* Background glow for contrast */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 gap-12 relative z-10">
                {/* Left Copy */}
                <div className="md:col-span-2 flex flex-col gap-8 pt-10">
                    <span className="font-mono text-amber text-xs uppercase tracking-widest">Book Your Audit</span>
                    <h2 className="font-headline text-4xl leading-tight !text-cream">
                        Your free Pipeline Audit is 30 minutes that could change your <span className="italic text-amber">year</span>.
                    </h2>
                    <div className="flex flex-col gap-4 w-full min-w-[280px]">
                        <p className="text-cream/90 leading-relaxed w-full">
                            In your audit, we'll analyse your current patient flow, identify lead leaks, and map out your custom 50-Patient Pipeline.
                        </p>
                        <ul className="flex flex-col gap-3 mt-4 w-full">
                            {['Analysis of current acquisition', 'ROI math for your clinic', 'Custom pipeline map', 'No obligation'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-cream/90">
                                    <div className="bg-amber/20 p-1 rounded-full text-amber"><Check size={12} /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Iframe */}
                <div className="md:col-span-3">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/wp2M2TGyTegnHEhMa7Yp"
                        style={{ width: '100%', border: 'none', height: '100%', minHeight: '700px', overflow: 'hidden' }}
                        scrolling="no"
                        id="wp2M2TGyTegnHEhMa7Yp_1770859855903"
                        title="Book Strategy Call"
                        className="rounded-2xl bg-cream shadow-2xl"
                    />
                    <Script src="https://api.leadconnectorhq.com/js/form_embed.js" strategy="lazyOnload" />
                </div>
            </div>
        </section>
    );
}
