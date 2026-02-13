import { getAllFiles } from "@/lib/mdx";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Orb } from "@/components/ui/orb";

export const metadata = {
    title: "Blog | NodePlain",
    description: "Insights for allied health clinics that want to grow.",
};

export default async function BlogPage() {
    const articles = getAllFiles("articles");

    return (
        <div className="flex flex-col gap-20 pb-20 relative">
            <Orb variant="primary" className="top-[-50px] left-[-100px] opacity-70" />
            <Orb variant="secondary" className="top-[200px] right-[-150px] opacity-40" />

            {/* Hero */}
            <section className="pt-20 px-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 z-10">
                <h1 className="font-headline text-[2.8rem] md:text-[4rem] leading-[1.1] text-ink max-w-3xl">
                    Insights for clinics that want to <span className="italic">grow</span>.
                </h1>
                <p className="font-body text-warm-body text-lg max-w-xl leading-relaxed">
                    Actionable advice on marketing, patient acquisition, and clinic growth.
                </p>
            </section>

            {/* Articles Grid */}
            <section className="px-8 max-w-[1200px] mx-auto w-full grid md:grid-cols-3 gap-8 z-10">
                {articles.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`} className="group block h-full">
                        <GlassPanel className="p-8 h-full flex flex-col justify-between gap-6 hover:bg-white/60 transition-colors relative">
                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-stone bg-stone/10 px-2 py-1 rounded-md">
                                        {article.metadata.category}
                                    </span>
                                    <span className="text-[0.65rem] text-stone font-medium">
                                        {article.metadata.readTime}
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-ink group-hover:text-amber transition-colors leading-tight">
                                    {article.metadata.title}
                                </h3>
                                <p className="font-body text-sm text-warm-body line-clamp-3">
                                    {article.metadata.summary}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 pt-4 mt-auto border-t border-stone/10 text-stone text-[0.7rem] font-medium">
                                Read Article →
                            </div>
                        </GlassPanel>
                    </Link>
                ))}
            </section>
        </div>
    );
}
