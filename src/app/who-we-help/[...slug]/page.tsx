import { notFound } from "next/navigation";
import { WHO_WE_HELP_DATA } from "@/lib/content-data";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BookingSection } from "@/components/home/booking-section";
import { Guarantee } from "@/components/home/guarantee";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { PipelineAnimation } from "@/components/home/pipeline-diagram";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string[] }>;
};

// Generic Hero Component
function GenericHero({ data }: { data: any }) {
    return (
        <section className="relative pt-32 pb-20 px-6 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center gap-10">
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-amber bg-amber/5 px-3 py-1.5 rounded-full border border-amber/10">
                For {data.title}
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
                {/* Parse italics in headline */}
                <h1 className="font-headline text-5xl md:text-7xl text-ink leading-[1.05] max-w-[900px]"
                    dangerouslySetInnerHTML={{ __html: data.hero.headline.replace(/\*(.*?)\*/g, '<span class="italic text-amber">$1</span>') }}
                />
                <p className="font-body text-warm-mid text-lg md:text-xl max-w-[700px] leading-relaxed">
                    {data.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button asChild className="cta-primary text-sm px-8 py-6 text-cream shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <Link href="#book">Book Your {data.title} Audit</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

// Specialty Grid Component for Overview Pages
function SpecialtyGrid({ specialties, parentSlug }: { specialties: any[], parentSlug: string }) {
    return (
        <section className="py-20 px-6 bg-white/30">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                <div className="text-center flex flex-col gap-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-stone">Specialized Solutions</span>
                    <h2 className="font-headline text-4xl text-ink">Choose Your Specialty</h2>
                    <p className="text-stone text-lg max-w-[700px] mx-auto">
                        We've built the 50-Patient Pipeline specifically for your area of practice. Select your specialty to see how we help clinics like yours grow.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {specialties.map((specialty: any) => (
                        <Link
                            key={specialty.slug}
                            href={`/who-we-help/${parentSlug}/${specialty.slug}`}
                            className="group"
                        >
                            <GlassCard className="p-10 flex flex-col gap-6 h-full hover:border-amber/40 transition-all hover:-translate-y-1">
                                <div className="text-5xl">{specialty.icon}</div>
                                <h3 className="font-headline text-3xl text-ink group-hover:text-amber transition-colors">
                                    {specialty.title}
                                </h3>
                                <p className="text-stone text-lg leading-relaxed flex-grow">
                                    {specialty.desc}
                                </p>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {specialty.keyMetrics.map((metric: string, i: number) => (
                                        <span key={i} className="text-xs font-mono uppercase tracking-wide text-amber bg-amber/10 px-3 py-1.5 rounded-full">
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6 flex items-center gap-2 text-amber font-semibold group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export async function generateStaticParams() {
    // Generate all possible routes from WHO_WE_HELP_DATA keys
    return Object.keys(WHO_WE_HELP_DATA).map((key) => ({
        slug: key.split("/"),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const key = slug.map(s => s.toLowerCase()).join("/");
    const data = WHO_WE_HELP_DATA[key];
    if (!data) return { title: "Page Not Found" };

    return {
        title: `${data.title} Marketing | NodePlain`,
        description: data.hero.subheadline,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const key = slug.map(s => s.toLowerCase()).join("/");
    const data = WHO_WE_HELP_DATA[key];

    if (!data) {
        return notFound();
    }

    // Check if this is an overview page with specialties
    if (data.isOverview && data.specialties) {
        return (
            <>
                <GenericHero data={data} />
                <SpecialtyGrid specialties={data.specialties} parentSlug={key} />
                <Guarantee />
                <BookingSection />
            </>
        );
    }

    return (
        <>
            <GenericHero data={data} />

            {/* Problems Section */}
            <section className="py-20 px-6 bg-white/30">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl text-ink">Sound Familiar?</h2>
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

            {/* Benefits Section */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                    <div className="max-w-[600px] mx-auto text-center flex flex-col gap-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-stone">The Solution</span>
                        <h2 className="font-headline text-4xl text-ink">Built for {data.title}</h2>
                        <p className="text-stone">{data.pipeline_context}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.benefits.map((ben: any, i: number) => (
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

            {/* ROI Section */}
            <section className="py-20 px-6 bg-ink text-cream">
                <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-10">
                    <h2 className="font-headline text-3xl !text-cream">The ROI Math for {data.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 flex flex-col gap-1">
                            <span className="font-mono text-xs text-cream/70 uppercase">Ad Spend</span>
                            <span className="font-headline-bold text-2xl text-cream">{data.roi.spend}</span>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 flex flex-col gap-1">
                            <span className="font-mono text-xs text-cream/70 uppercase">Cost/Patient</span>
                            <span className="font-headline-bold text-2xl text-cream">{data.roi.cpp}</span>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 flex flex-col gap-1">
                            <span className="font-mono text-xs text-cream/70 uppercase">New Patients</span>
                            <span className="font-headline-bold text-2xl text-cream">{data.roi.patients}</span>
                        </div>
                        <div className="p-6 bg-amber/10 rounded-xl backdrop-blur-md border border-amber/20 flex flex-col gap-1">
                            <span className="font-mono text-xs text-amber uppercase">Est. Revenue</span>
                            <span className="font-headline-bold text-2xl text-amber">{data.roi.revenue}</span>
                        </div>
                    </div>
                </div>
            </section>

            <Guarantee />

            <BookingSection />
        </>
    );
}
