
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
    return (
        <section className="py-24 px-6 bg-ink text-cream relative overflow-hidden">
            {/* Background glow for depth */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="flex-1 flex flex-col gap-8 min-w-0">
                    <span className="font-mono text-amber text-xs uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={16} /> Our Guarantee
                    </span>
                    <h2 className="font-headline text-4xl md:text-5xl leading-tight !text-cream">
                        Profitable in 90 days — or you <span className="italic text-amber">don't pay us</span>.
                    </h2>
                    <p className="font-body text-cream/80 text-lg leading-relaxed">
                        If your campaign doesn't generate more revenue than your total investment within 90 days, we waive all management fees until it does. You only cover ad spend.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button asChild className="cta-primary text-cream px-8 py-6 text-sm">
                            <Link href="#book">Book Your Free Pipeline Audit</Link>
                        </Button>
                    </div>
                </div>

                <div className="flex-1 w-full relative min-w-0">
                    <div className="grid grid-cols-1 gap-4">
                        {/* Stacked dark glass cards */}
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between">
                            <span className="font-headline-bold text-xl text-cream">$67</span>
                            <span className="font-mono text-xs text-cream/70 uppercase">Avg. Cost Per Patient</span>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between">
                            <span className="font-headline-bold text-xl text-cream">5–8×</span>
                            <span className="font-mono text-xs text-cream/70 uppercase">Lifetime Value ROI</span>
                        </div>
                        <div className="p-6 rounded-xl bg-amber/10 border border-amber/20 backdrop-blur-md flex items-center justify-between">
                            <span className="font-headline-bold text-xl text-amber">90 Days</span>
                            <span className="font-mono text-xs text-amber uppercase">Profitability Guarantee</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
