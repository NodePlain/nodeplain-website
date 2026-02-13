import { getFileBySlug, getAllFiles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Link as LucideLink, ArrowLeft } from "lucide-react";
import { Orb } from "@/components/ui/orb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const files = getAllFiles("articles");
    return files.map((file) => ({
        slug: file.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const { metadata } = getFileBySlug("articles", slug);
        return {
            title: `${metadata.title} | NodePlain Blog`,
            description: metadata.summary,
        };
    } catch {
        return {
            title: "Article Not Found",
        };
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;
    try {
        post = getFileBySlug("articles", slug);
    } catch {
        notFound();
    }

    const { metadata, content } = post;

    return (
        <div className="flex flex-col gap-12 pb-20 relative">
            <Orb variant="primary" className="top-[-100px] left-[-100px] opacity-40" />

            {/* Header */}
            <section className="pt-20 px-8 max-w-[800px] mx-auto w-full flex flex-col gap-6 z-10">
                <Link href="/blog" className="text-stone hover:text-ink transition-colors flex items-center gap-2 text-sm font-medium w-fit">
                    <ArrowLeft size={16} /> Back to Articles
                </Link>

                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-amber bg-amber/10 px-2 py-1 rounded-md">
                            {metadata.category}
                        </span>
                        <span className="text-sm text-stone font-medium">
                            {metadata.readTime} • {metadata.publishedAt}
                        </span>
                    </div>
                    <h1 className="font-headline text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-ink">
                        {metadata.title}
                    </h1>
                    <div className="flex items-center gap-3 mt-2">
                        <div className="w-8 h-8 rounded-full bg-stone/20 overflow-hidden flex items-center justify-center text-xs font-bold text-stone">NP</div>
                        <span className="font-body text-sm font-medium text-ink">{metadata.author}</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="px-8 max-w-[800px] mx-auto w-full z-10">
                <article className="prose prose-stone prose-lg max-w-none 
          prose-headings:font-headline prose-headings:font-medium prose-headings:text-ink 
          prose-p:font-body prose-p:text-warm-body prose-p:leading-relaxed
          prose-strong:font-semibold prose-strong:text-ink
          prose-li:marker:text-amber
          prose-blockquote:border-l-amber prose-blockquote:bg-white/40 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
        ">
                    <MDXRemote source={content} />
                </article>
            </section>

            {/* Newsletter CTA */}
            <section className="px-8 max-w-[800px] mx-auto w-full z-10 my-10">
                <GlassPanel intensity="heavy" className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-amber/20">
                    <div className="flex flex-col gap-2 flex-1 text-center md:text-left">
                        <h3 className="font-headline text-2xl text-ink">Get weekly growth insights</h3>
                        <p className="text-warm-body text-sm">Join 2,500+ allied health clinic owners.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/60 border border-stone/20 rounded-[9px] px-4 py-2 text-sm font-body focus:outline-none focus:border-amber flex-1 min-w-0"
                        />
                        <Button size="md">Subscribe</Button>
                    </div>
                </GlassPanel>
            </section>

            {/* Final CTA */}
            <section className="px-8 py-10 max-w-[1200px] mx-auto w-full flex justify-center z-10">
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="font-headline text-2xl text-ink">Need help implementing this?</h2>
                    <Button asChild size="lg">
                        <Link href="/book">Book Your Strategy Call</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
