import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Orb } from "@/components/ui/orb";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
    title: "Services & Pricing | NodePlain",
    description: "Websites, SEO, and Ads for allied health clinics.",
};

const services = [
    {
        title: "Website Design & Development",
        description: "We build websites that work as digital sales engines — designed to convert visitors into booked appointments. Mobile-first, fast-loading, AHPRA-compliant."
    },
    {
        title: "SEO & GEO Optimisation",
        description: "Get found when patients search. We optimize for Google and new AI search engines (ChatGPT, Perplexity)."
    },
    {
        title: "Meta Ads (Facebook & Instagram)",
        description: "Paid traffic campaigns that put your clinic in front of ideal patients with transparency and real ROAS tracking."
    },
    {
        title: "Organic Social Content",
        description: "Content that builds trust and authority without ad spend. Native content for Facebook and Instagram."
    },
    {
        title: "Email Newsletters",
        description: "Stay top-of-mind with your patient base. Reactivation campaigns for lapsed patients and referral automation."
    },
    {
        title: "LinkedIn Content",
        description: "Position yourself as a thought leader to attract referral partners and top clinicians."
    }
];

const packages = [
    {
        name: "Build",
        for: "Busy clinics needing patients",
        price: "Pay Per Appointment",
        features: [
            "Website Redesign (if needed)",
            "Done-For-You Meta Ads",
            "Conversion Optimisation",
            "Pro-rata Guarantee"
        ],
        cta: "Book Strategy Call",
        bestFor: "Growth",
        highlight: true
    },
    {
        name: "Scale",
        for: "Clinics needing staff",
        price: "Performance Based",
        features: [
            "Everything in Build",
            "Clinician Recruitment System",
            "Staff Training",
            "Organic Content Strategy"
        ],
        cta: "Book Strategy Call",
        bestFor: "Teams"
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-20 pb-20 relative">
            <Orb variant="primary" className="top-[-50px] left-[-100px] opacity-70" />
            <Orb variant="secondary" className="top-[300px] right-[-150px] opacity-40" />

            {/* Hero */}
            <section className="pt-20 px-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 z-10">
                <h1 className="font-headline text-[2.8rem] md:text-[4rem] leading-[1.1] text-ink max-w-3xl">
                    Everything you need to <span className="italic">grow</span>.
                </h1>
                <p className="font-body text-warm-body text-lg max-w-xl leading-relaxed">
                    From getting found to getting booked. A complete system for allied health growth.
                </p>
            </section>

            {/* Services Grid */}
            <section className="px-8 max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-8 z-10">
                {services.map((service, i) => (
                    <GlassPanel key={i} className="p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                        <h3 className="font-headline text-xl text-ink">{service.title}</h3>
                        <p className="text-warm-body text-sm leading-relaxed">{service.description}</p>
                    </GlassPanel>
                ))}
            </section>

            {/* Packages */}
            <section className="px-8 max-w-[1200px] mx-auto w-full flex flex-col gap-12 z-10">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="font-headline text-[2.5rem] text-ink">Simple, transparent pricing.</h2>
                    <p className="text-warm-body max-w-xl">Choose the stage that matches your clinic's growth.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
                    {packages.map((pkg, i) => (
                        <GlassPanel key={i} intensity={pkg.highlight ? "normal" : "light"} className={`p-8 flex flex-col gap-6 h-full relative ${pkg.highlight ? 'border-amber/40 shadow-xl scale-105 z-10' : ''}`}>
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber text-cream text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-stone">{pkg.bestFor}</span>
                                <h3 className="font-headline text-2xl text-ink">{pkg.name}</h3>
                                <p className="text-stone text-xs">{pkg.for}</p>
                            </div>
                            <div className="flex flex-col gap-1 my-2">
                                <span className="font-headline-bold text-2xl text-ink">{pkg.price}</span>
                            </div>
                            <ul className="flex flex-col gap-3 flex-1">
                                {pkg.features.map((feat, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-warm-body">
                                        <div className="mt-1 text-moss-dark"><Check size={14} /></div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant={pkg.highlight ? "primary" : "secondary"} className="w-full">
                                <Link href="/book">{pkg.cta}</Link>
                            </Button>
                        </GlassPanel>
                    ))}
                </div>
            </section>
        </div>
    );
}
