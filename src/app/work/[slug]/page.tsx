import { getFileBySlug, getAllFiles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GlassPanel } from "@/components/ui/glass-panel";
import { StatCard } from "@/components/ui/stat-card";
import { Orb } from "@/components/ui/orb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const files = getAllFiles("case-studies");
    return files.map((file) => ({
        slug: file.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const { metadata } = getFileBySlug("case-studies", slug);
        return {
            title: `${metadata.client} Case Study | NodePlain`,
            description: `See how we helped ${metadata.client} achieve ${metadata.keyMetric} ${metadata.keyMetricLabel}.`,
        };
    } catch {
        return {
            title: "Case Study Not Found",
        };
    }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;
    try {
        post = getFileBySlug("case-studies", slug);
    } catch {
        notFound();
    }

    const { metadata, content } = post;

    return (
        <div className="flex flex-col gap-12 pb-20 relative">
            <Orb variant="secondary" className="top-[-100px] right-[-100px] opacity-50" />

            {/* Header */}
            <section className="pt-20 px-8 max-w-[1200px] mx-auto w-full flex flex-col gap-8 z-10">
                <Link href="/work" className="text-stone hover:text-ink transition-colors flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Results
                </Link>

                <div className="flex flex-col gap-4">
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-stone bg-stone/10 px-2 py-1 rounded-md w-fit">
                        {metadata.type}
                    </span>
                    <h1 className="font-headline text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-ink">
                        {metadata.client}
                    </h1>
                    <p className="font-body text-stone text-sm">
                        {metadata.location} • {metadata.date}
                    </p>
                </div>

                {/* Key Metrics Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <StatCard
                        value={metadata.keyMetric}
                        label={metadata.keyMetricLabel}
                        trend="up"
                        className="bg-white/70 border-amber/20"
                    />
                    {metadata.results && metadata.results.map((result: any, i: number) => (
                        <StatCard
                            key={i}
                            value={result.value}
                            label={result.label}
                            trend={result.trend === "positive" ? "up" : result.trend === "negative" ? "down" : "neutral"}
                        />
                    ))}
                </div>
            </section>

            {/* Content */}
            <section className="px-8 max-w-[800px] mx-auto w-full z-10">
                <article className="prose prose-stone prose-lg max-w-none 
          prose-headings:font-headline prose-headings:font-medium prose-headings:text-ink 
          prose-p:font-body prose-p:text-warm-body prose-p:leading-relaxed
          prose-strong:font-semibold prose-strong:text-ink
          prose-li:marker:text-amber
        ">
                    <MDXRemote source={content} />
                </article>
            </section>

            {/* Testimonial */}
            {metadata.testimonial && (
                <section className="px-8 max-w-[1000px] mx-auto w-full z-10 my-8">
                    <GlassPanel className="p-8 md:p-12 border-l-4 border-l-amber flex flex-col gap-6 relative">
                        <Orb variant="primary" size="sm" className="right-[-20px] bottom-[-20px] opacity-30" />
                        <blockquote className="font-headline italic text-2xl text-ink leading-relaxed relative z-10">
                            "{metadata.testimonial.quote}"
                        </blockquote>
                        <div className="flex flex-col relative z-10">
                            <span className="font-body font-semibold text-ink">{metadata.testimonial.author}</span>
                            <span className="font-body text-sm text-stone">{metadata.testimonial.role}</span>
                        </div>
                    </GlassPanel>
                </section>
            )}

            {/* CTA */}
            <section className="px-8 py-10 max-w-[1200px] mx-auto w-full flex justify-center z-10">
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="font-headline text-2xl text-ink">Ready to get similar results?</h2>
                    <Button asChild size="lg">
                        <Link href="/book">Book Your Strategy Call</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
