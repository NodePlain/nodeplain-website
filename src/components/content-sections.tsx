"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Check, X, ArrowRight, Minus, Plus } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";


export function StarRatings() {
    return (
        <div className="flex flex-wrap gap-4 text-xs font-medium text-stone-dark">
            <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
                <span className="font-bold text-[#4285F4]">G</span>
                <div className="flex text-amber">★★★★★</div>
                <span className="font-semibold text-ink">5.0</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
                <span className="font-bold text-[#1877F2]">f</span>
                <div className="flex text-amber">★★★★★</div>
                <span className="font-semibold text-ink">5.0</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
                <span className="font-bold text-[#00b67a]">★</span>
                <div className="flex text-amber">★★★★★</div>
                <span className="font-semibold text-ink">5.0</span>
            </div>
        </div>
    );
}


function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone/20 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-4 text-left group"
            >
                <span className="font-headline font-semibold text-lg text-ink group-hover:text-amber transition-colors">
                    {title}
                </span>
                <div className={`p-1 rounded-full text-amber transition-colors ${isOpen ? 'bg-amber/10' : ''}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-warm-body text-sm leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQSection() {
    return (
        <GlassPanel className="p-8 md:p-12 w-full max-w-3xl mx-auto">
            <div className="flex flex-col gap-2 mb-8 text-center">
                <h2 className="font-headline text-3xl text-ink">Frequently Asked Questions</h2>
                <p className="text-stone">Clearing up the common doubts.</p>
            </div>
            <div>
                <AccordionItem title="Do you guarantee results?">
                    Yes. For our 'Build' and 'Scale' tiers, we offer a pro-rata refund guarantee. If we don't hit the agreed-upon patient numbers, we refund you for the shortfall. We have skin in the game.
                </AccordionItem>
                <AccordionItem title="Do I have to sign a long-term contract?">
                    No. We work on a rolling 90-day basis. We believe results should keep you with us, not a piece of paper.
                </AccordionItem>
                <AccordionItem title="Is this AHPRA compliant?">
                    100%. We specialise in allied health. We know the National Law and Guidelines inside out. We never use testimonial advertising in paid ads where prohibited, and we ensure all claims are substantiated.
                </AccordionItem>
                <AccordionItem title="How quickly can we start?">
                    We can usually have your new campaigns live within 7-10 days of onboarding.
                </AccordionItem>
            </div>
        </GlassPanel>
    )
}

export function BenefitsSection() {
    const benefits = [
        { title: "Full Calendars", desc: "Consistently fill your appointment slots with high-value patients." },
        { title: "Better Retention", desc: "Attract patients who value your care and stick to their treatment plans." },
        { title: "Less Admin", desc: "Automate intake and follow-ups so your front desk isn't overwhelmed." },
        { title: "Clear ROI", desc: "Know exactly how much revenue every marketing dollar generates." },
    ]
    return (
        <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
                <GlassPanel key={i} intensity="light" className="p-6 flex flex-col gap-3 hover:bg-white/60 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center text-amber mb-2">
                        <Check size={16} strokeWidth={3} />
                    </div>
                    <h3 className="font-headline-bold text-lg text-ink">{b.title}</h3>
                    <p className="text-warm-body text-sm">{b.desc}</p>
                </GlassPanel>
            ))}
        </div>
    )
}

export function WhyUsSection() {
    return (
        <div className="overflow-x-auto">
            <GlassPanel className="p-8 min-w-[600px]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-stone/20">
                            <th className="py-4 font-headline text-xl text-ink w-1/3">Feature</th>
                            <th className="py-4 font-headline-bold text-xl text-amber w-1/3">NodePlain</th>
                            <th className="py-4 font-headline text-xl text-stone-light w-1/3">Typical Agency</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-stone/10">
                            <td className="py-4 font-medium text-ink">Niche Focus</td>
                            <td className="py-4 text-warm-body">Allied Health Only</td>
                            <td className="py-4 text-stone-light">Generalists (Plumbers, Cafes)</td>
                        </tr>
                        <tr className="border-b border-stone/10">
                            <td className="py-4 font-medium text-ink">Guarantees</td>
                            <td className="py-4 text-warm-body">Results or Refund</td>
                            <td className="py-4 text-stone-light">"Brand Awareness"</td>
                        </tr>
                        <tr className="border-b border-stone/10">
                            <td className="py-4 font-medium text-ink">Compliance</td>
                            <td className="py-4 text-warm-body">AHPRA Trained</td>
                            <td className="py-4 text-stone-light">Risky / Unknown</td>
                        </tr>
                        <tr className="border-b border-stone/10">
                            <td className="py-4 font-medium text-ink">Technology</td>
                            <td className="py-4 text-warm-body">Custom Dev + AI</td>
                            <td className="py-4 text-stone-light">Basic WordPress</td>
                        </tr>
                    </tbody>
                </table>
            </GlassPanel>
        </div>
    )
}

const SERVICES_DATA = [
    {
        title: "Branding Assets & Guidelines",
        desc: "A cohesive visual identity that builds trust instantly.",
        fullDesc: "We create professional logo suites, colour palettes, typography systems, and brand voice guidelines tailored for the healthcare sector. Your clinic will look established and premium.",
        slug: "branding"
    },
    {
        title: "Website Design",
        desc: "High-performance websites designed to convert visitors.",
        fullDesc: "Mobile-first, fast, and accessible websites. Integrated with your practice management software (Cliniko, Nookal, Jane) for seamless booking.",
        slug: "website-design"
    },
    {
        title: "SEO & GEO Optimisation",
        desc: "Dominate local search results for your modalities.",
        fullDesc: "We optimize your Google Business Profile and website content so patients nearby find you first when searching for 'physio near me' or 'chiro [suburb]'.",
        slug: "seo"
    },
    {
        title: "Meta Paid Ads",
        desc: "Scalable patient acquisition on Facebook & Instagram.",
        fullDesc: "Targeted campaigns that reach people suffering from the specific conditions you treat. We handle creative, copy, targeting, and optimization.",
        slug: "meta-ads"
    },
    {
        title: "Organic Content",
        desc: "Build community without ad spend.",
        fullDesc: "Educational content for Facebook and Instagram that positions your clinicians as experts and keeps your clinic top-of-mind.",
        slug: "organic-content"
    },
    {
        title: "Hiring & Training",
        desc: "Attract and retain top talent.",
        fullDesc: "Recruitment funnels to find great clinicians, plus sales training for your admin team to convert more phone enquiries.",
        slug: "hiring"
    }
]

export function ServicesSection() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((s, i) => (
                <ServiceCard key={i} service={s} />
            ))}
        </div>
    )
}

function ServiceCard({ service }: { service: any }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="text-left w-full h-full">
                    <GlassPanel className="p-6 h-full flex flex-col gap-4 hover:translate-y-[-4px] transition-transform hover:bg-white/60 cursor-pointer group">
                        <h3 className="font-headline font-bold text-xl text-ink group-hover:text-amber transition-colors">{service.title}</h3>
                        <p className="text-warm-body text-sm leading-relaxed">{service.desc}</p>
                        <span className="mt-auto text-xs font-bold text-amber uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <ArrowRight size={12} />
                        </span>
                    </GlassPanel>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/20 bg-cream/90 p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl md:w-full glass-panel">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-headline font-bold text-ink">{service.title}</h2>
                            <Dialog.Close className="rounded-full p-2 hover:bg-stone/10 transition-colors">
                                <X size={18} />
                            </Dialog.Close>
                        </div>
                        <p className="text-warm-body leading-relaxed">
                            {service.fullDesc}
                        </p>
                        <div className="flex justify-end pt-4">
                            <Button asChild size="sm">
                                <Link href="/services">View All Services</Link>
                            </Button>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export function StickyCTA() {
    return (
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
            <Button asChild size="lg" className="shadow-2xl shadow-amber/40 animate-pulse hover:animate-none rounded-full px-6">
                <Link href="/book">Book Strategy Call</Link>
            </Button>
        </div>
    )
}
