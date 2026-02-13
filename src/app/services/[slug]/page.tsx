import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/lib/services-data";
import { BookingSection } from "@/components/home/booking-section";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = SERVICES_DATA[slug];
    if (!data) return { title: "Service Not Found" };

    return {
        title: `${data.title} | NodePlain`,
        description: data.hero.subheadline,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const data = SERVICES_DATA[slug];

    if (!data) {
        return notFound();
    }

    return (
        <>
            <section className="relative pt-32 pb-20 px-6 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center gap-10">
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-amber bg-amber/5 px-3 py-1.5 rounded-full border border-amber/10">
                    Service: {data.title}
                </span>
                <div className="flex flex-wrap justify-center gap-4">
                    {data.hero.stats.map((stat: any, i: number) => (
                        <GlassCard key={i} intensity="light" className="px-4 py-2 flex items-center gap-2 rounded-full !border-amber/10">
                            <span className="font-headline-bold text-amber text-sm">{stat.value}</span>
                            <span className="w-1 h-1 rounded-full bg-stone/30"></span>
                            <span className="text-[0.7rem] font-medium text-stone uppercase tracking-wide">{stat.label}</span>
                        </GlassCard>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-6 w-full">
                    <h1 className="font-headline text-5xl md:text-6xl text-ink leading-[1.05] max-w-[900px]"
                        dangerouslySetInnerHTML={{ __html: data.hero.headline.replace(/\*(.*?)\*/g, '<span class="italic text-amber">$1</span>') }}
                    />
                    <p className="font-body text-warm-mid text-lg md:text-xl max-w-[700px] leading-relaxed">
                        {data.hero.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button asChild className="cta-primary text-sm px-8 py-6 text-cream shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <Link href="#book">Get Started With {data.title}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-20 px-6 bg-white/30">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl text-ink">Why You Need This</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.problems.map((prob: any, i: number) => (
                            <GlassCard key={i} className="p-8 flex flex-col gap-4">
                                <h3 className="font-headline-bold text-xl text-ink">{prob.title}</h3>
                                <p className="text-stone text-sm leading-relaxed">{prob.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features/Benefits Section */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                    <div className="max-w-[600px] mx-auto text-center flex flex-col gap-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-stone">Our Approach</span>
                        <h2 className="font-headline text-4xl text-ink">How We Deliver Results</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.features.map((ben: any, i: number) => (
                            <GlassCard key={i} className="p-8 flex flex-col gap-4 group hover:border-amber/20 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center text-amber group-hover:scale-110 transition-transform flex-shrink-0">
                                    <Check size={20} />
                                </div>
                                <h3 className="font-headline-bold text-lg text-ink">{ben.title}</h3>
                                <p className="text-stone text-sm leading-relaxed">{ben.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 relative z-10 hidden shadow-none">
                <div className="max-w-[900px] mx-auto glass-panel p-10 text-center flex flex-col items-center gap-6 bg-amber/5 border-amber/10">
                    <h2 className="font-headline text-3xl text-ink">Part of The 50-Patient Pipeline</h2>
                    <p className="text-stone text-lg max-w-[600px]">
                        {data.title} is just one component of our complete patient acquisition system. When combined with our other tools, the results compound.
                    </p>
                    <Link href="/#offer" className="font-headline-bold text-amber hover:text-amber-dark flex items-center gap-2">
                        See the full system <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <BookingSection />
        </>
    );
}
