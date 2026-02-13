import { GlassPanel } from "@/components/ui/glass-panel";
import { Orb } from "@/components/ui/orb";

export const metadata = {
    title: "Book a Strategy Call | NodePlain",
    description: "Schedule your free 30-minute growth strategy session.",
};

export default function BookPage() {
    return (
        <div className="flex flex-col gap-20 pb-20 relative min-h-screen">
            <Orb variant="primary" className="top-[-50px] right-[-100px] opacity-70" />
            <Orb variant="secondary" className="bottom-[-50px] left-[-100px] opacity-40" />

            {/* Hero */}
            <section className="pt-20 px-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 z-10 items-center text-center">
                <h1 className="font-headline text-[2.8rem] md:text-[4rem] leading-[1.1] text-ink max-w-3xl">
                    Let's build your patient <span className="italic">pipeline</span>.
                </h1>
                <p className="font-body text-warm-body text-lg max-w-xl leading-relaxed">
                    Book a free 30-minute strategy call. We'll audit your current marketing and show you exactly how to grow.
                </p>
            </section>

            {/* Calendar Embed */}
            <section className="px-8 max-w-[1000px] mx-auto w-full z-10 flex-1">
                <GlassPanel className="w-full min-h-[800px] flex items-center justify-center border-amber/20">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/wp2M2TGyTegnHEhMa7Yp"
                        style={{ width: '100%', border: 'none', height: '100%', minHeight: '800px' }}
                        id="wp2M2TGyTegnHEhMa7Yp_1770859855903"
                        title="Book Strategy Call"
                    />
                    <script src="https://api.leadconnectorhq.com/js/form_embed.js" type="text/javascript"></script>
                </GlassPanel>
            </section>
        </div>
    );
}
