import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Orb } from "@/components/ui/orb";

export const metadata = {
    title: "Who We Help | NodePlain",
    description: "Specialized marketing for allied health professionals.",
};

const icps = [
    "Physiotherapists", "Chiropractors", "Cosmetic Clinics", "Dentists",
    "Osteopaths", "Occupational Therapists", "Speech Pathologists", "Podiatrists",
    "Dietitians", "Psychologists", "Optometrists", "Dermatologists", "Plastic Surgeons"
];

export default function WhoWeHelpPage() {
    return (
        <div className="flex flex-col gap-20 pb-20 relative">
            <Orb variant="primary" className="top-[-50px] left-[-100px] opacity-70" />
            <Orb variant="secondary" className="top-[200px] right-[-150px] opacity-40" />

            {/* Hero */}
            <section className="pt-20 px-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 z-10">
                <h1 className="font-headline text-[2.8rem] md:text-[4rem] leading-[1.1] text-ink max-w-3xl">
                    We only work with allied health. Here's <span className="italic">why</span>.
                </h1>
                <p className="font-body text-warm-body text-lg max-w-xl leading-relaxed">
                    Every strategy, template, and campaign we build is purpose-made for the specific regulations and patient operational needs of clinics.
                </p>
            </section>

            {/* ICP Grid */}
            <section className="px-8 max-w-[1200px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 z-10">
                {icps.map((icp) => {
                    const slug = icp.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
                    return (
                        <Link key={icp} href={`/who-we-help/${slug}`}>
                            <GlassPanel intensity="light" className="p-8 h-full flex items-center justify-center text-center hover:bg-white/60 transition-colors group aspect-square">
                                <span className="font-headline-bold text-ink text-lg group-hover:text-amber transition-colors">
                                    {icp}
                                </span>
                            </GlassPanel>
                        </Link>
                    );
                })}
            </section>
        </div>
    );
}
