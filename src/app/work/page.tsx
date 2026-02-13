import { getAllFiles } from "@/lib/mdx";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ArrowRight } from "lucide-react";
import { Orb } from "@/components/ui/orb";

export const metadata = {
    title: "Case Studies | NodePlain",
    description: "See how we help allied health clinics grow with data-driven marketing.",
};

export default async function WorkPage() {
    const caseStudies = getAllFiles("case-studies");

    return (
        <div className="flex flex-col gap-20 pb-20 relative">
            <Orb variant="primary" className="top-[-50px] left-[-100px] opacity-70" />
            <Orb variant="secondary" className="top-[200px] right-[-150px] opacity-40" />

            {/* Hero */}
            <section className="pt-20 px-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 z-10">
                <h1 className="font-headline text-[2.8rem] md:text-[4rem] leading-[1.1] text-ink max-w-3xl">
                    The proof is in the <span className="italic">pipeline</span>.
                </h1>
                <p className="font-body text-warm-body text-lg max-w-xl leading-relaxed">
                    Real results for real clinics. No fluff, just measurable growth.
                </p>
            </section>

            {/* Case Studies Grid */}
            <section className="px-8 max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-8 z-10">
                {caseStudies.map((study) => (
                    <Link key={study.slug} href={`/work/${study.slug}`} className="group block h-full">
                        <GlassPanel className="p-8 h-full flex flex-col justify-between gap-8 hover:bg-white/60 transition-colors relative">
                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-stone bg-stone/10 px-2 py-1 rounded-md">
                                        {study.metadata.type}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="font-headline-bold text-[3rem] text-ink leading-none tracking-tight group-hover:text-amber transition-colors">
                                        {study.metadata.keyMetric}
                                    </span>
                                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-stone">
                                        {study.metadata.keyMetricLabel}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="font-headline text-2xl text-ink group-hover:translate-x-1 transition-transform">
                                        {study.metadata.client}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {study.metadata.services && study.metadata.services.map((service: string) => (
                                            <span key={service} className="text-[0.65rem] font-medium text-stone bg-white/40 px-2 py-1 rounded-full border border-white/40">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-amber font-semibold text-sm mt-auto pt-4 border-t border-stone/10 relative z-10">
                                Read Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>

                            <Orb variant="secondary" size="sm" className="right-[-40px] bottom-[-40px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        </GlassPanel>
                    </Link>
                ))}
            </section>
        </div>
    );
}
