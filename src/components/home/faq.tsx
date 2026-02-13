"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-5 text-left group"
            >
                <span className="font-headline font-medium text-lg text-ink group-hover:text-amber transition-colors pr-4">
                    {title}
                </span>
                <div className={`p-1 rounded-full text-stone transition-colors flex-shrink-0 ${isOpen ? 'text-amber bg-amber/10' : ''}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
                        <div className="pb-6 text-warm-body text-sm leading-relaxed pr-8">
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
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-[900px] mx-auto flex flex-col gap-10">
                <div className="text-center">
                    <h2 className="font-headline text-3xl text-ink">Everything you need to know</h2>
                </div>

                <GlassPanel className="p-8">
                    <AccordionItem title="I've been burned by agencies before. Why trust NodePlain?">
                        That's the #1 thing we hear. It's why we offer a 90-day profitability guarantee. If we don't deliver, you don't pay management fees. Plus, we only serve allied health — we know your compliance needs and patient psychology.
                    </AccordionItem>
                    <AccordionItem title="Do you understand AHPRA compliance?">
                        It's foundational. Every ad and landing page is reviewed for compliance before launch. No testimonial violations, no misleading claims. We focus on business outcomes, not risky promises.
                    </AccordionItem>
                    <AccordionItem title="What if I don't use Cliniko?">
                        We integrate with Cliniko, Halaxy, and Nookal. If you use something else, let us know in your audit — we can often build custom solutions.
                    </AccordionItem>
                    <AccordionItem title="What's the minimum ad spend?">
                        We recommend starting at $1,000–$2,000/month paid directly to Meta. This typically generates 15–30 new patient inquiries per month.
                    </AccordionItem>
                    <AccordionItem title="How long until I see results?">
                        Most clinics see inquiries within 7-14 days of launch. The system build takes 2-4 weeks.
                    </AccordionItem>
                </GlassPanel>
            </div>
        </section>
    )
}
