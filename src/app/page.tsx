import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero";
import { ProblemFraming } from "@/components/home/problem-framing";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Lazy load below-the-fold components
const PipelineAnimation = dynamic(() => import("@/components/home/pipeline-diagram").then(mod => ({ default: mod.PipelineAnimation })), {
  loading: () => <div className="h-[600px] w-full bg-stone/5 animate-pulse rounded-lg" />,
});

const BenefitCards = dynamic(() => import("@/components/home/benefit-cards").then(mod => ({ default: mod.BenefitCards })), {
  loading: () => <div className="h-96 bg-stone/5 animate-pulse rounded-lg" />,
});

const SocialProof = dynamic(() => import("@/components/home/social-proof").then(mod => ({ default: mod.SocialProof })));
const HowItWorks = dynamic(() => import("@/components/home/how-it-works").then(mod => ({ default: mod.HowItWorks })));
const Guarantee = dynamic(() => import("@/components/home/guarantee").then(mod => ({ default: mod.Guarantee })));
const WhoWeHelp = dynamic(() => import("@/components/home/who-we-help").then(mod => ({ default: mod.WhoWeHelp })));
const FAQSection = dynamic(() => import("@/components/home/faq").then(mod => ({ default: mod.FAQSection })));
const BookingSection = dynamic(() => import("@/components/home/booking-section").then(mod => ({ default: mod.BookingSection })));

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Problem Framing (Sound Familiar?) */}
      <div className="relative">
        <ProblemFraming />
        {/* Section Divider - Ambient */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone/10 to-transparent" />
      </div>

      {/* 3. Solution (Pipeline) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 relative z-10">
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-stone">The Solution</span>
            <h2 className="font-headline text-4xl md:text-5xl text-ink">
              A system that fills your clinic — not just your <span className="italic text-amber">inbox</span>.
            </h2>
            <div className="text-lg text-warm-body leading-relaxed space-y-4">
              <p>The 50-Patient Pipeline isn't another ad campaign. It's a complete patient acquisition system — from the moment someone searches for help to the moment they're sitting in your chair.</p>
              <ul className="space-y-2 text-sm text-stone-dark">
                <li className="flex items-center gap-2">✓ AHPRA-compliant creative</li>
                <li className="flex items-center gap-2">✓ Condition-specific Meta Ads</li>
                <li className="flex items-center gap-2">✓ Speed-to-lead automation</li>
                <li className="flex items-center gap-2">✓ Practice management integration</li>
              </ul>
            </div>
            <div className="pt-4">
              <Button asChild className="cta-primary text-cream px-6 py-4">
                <Link href="#book">Book Your Free Pipeline Audit</Link>
              </Button>
            </div>
          </div>

          <div className="h-[600px] w-full relative">
            <PipelineAnimation />
          </div>
        </div>
      </section>

      {/* 4. Benefit Cards (Why NodePlain) */}
      <BenefitCards />

      {/* 5. Social Proof */}
      <SocialProof />

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Guarantee */}
      <Guarantee />

      {/* 8. Who We Help */}
      <WhoWeHelp />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. Booking */}
      <BookingSection />
    </>
  );
}
