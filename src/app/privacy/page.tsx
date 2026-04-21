import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | NodePlain",
    description: "How NodePlain collects, uses, and protects your information.",
};

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-4 text-ink">
                Privacy Policy
            </h1>
            <p className="text-sm text-ink/60 mb-12">Last updated: 21 April 2026</p>

            <div className="space-y-8 text-ink/90 leading-relaxed">
                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">1. Who we are</h2>
                    <p>
                        NodePlain (ABN 43 685 875 877) is a sole-trader business operated by Surjot Singh
                        Talwar, based in the Australian Capital Territory. This Privacy Policy explains how
                        we collect, use, store, and disclose personal information when you interact with our
                        website, services, or internal business-automation tools.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">2. Information we collect</h2>
                    <p className="mb-3">
                        We collect information you provide to us directly, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Contact details (name, email, phone number) submitted via our website or client onboarding</li>
                        <li>Business information relevant to services we provide</li>
                        <li>
                            Financial and accounting data accessed from authorised third-party systems
                            (for example, QuickBooks Online) strictly for our internal bookkeeping,
                            tax preparation, and financial-reporting purposes
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">3. How we use your information</h2>
                    <p className="mb-3">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Respond to enquiries and communicate with you</li>
                        <li>Operate internal bookkeeping, tax, and reporting workflows</li>
                        <li>Comply with legal and regulatory obligations under Australian law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">4. QuickBooks Online integration</h2>
                    <p>
                        Where authorised, NodePlain accesses accounting data via the QuickBooks Online API
                        for the sole purpose of operating internal bookkeeping, BAS preparation, cash-flow
                        forecasting, and tax-related analysis for NodePlain&apos;s own business. Access
                        tokens are stored locally using macOS Keychain and are never shared with third
                        parties. Data is not retained beyond the purpose for which it was accessed.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">5. How we store and protect information</h2>
                    <p>
                        Personal information and access credentials are stored on authorised devices
                        protected by operating-system-level encryption and access controls. OAuth tokens
                        and API credentials are held in secure system keychains. We apply reasonable
                        technical and administrative safeguards appropriate to the sensitivity of the
                        information.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">6. Third parties</h2>
                    <p>
                        We may use third-party service providers (for example, hosting providers and AI
                        processing services such as Anthropic) to operate our business. These providers
                        are only given the information necessary to perform their function and are bound
                        by their own confidentiality and privacy obligations. We do not sell personal
                        information.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">7. Your rights</h2>
                    <p>
                        Under the Australian Privacy Act 1988 and the Australian Privacy Principles, you
                        have the right to request access to, correction of, or deletion of personal
                        information we hold about you. To exercise these rights, contact us using the
                        details below.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">8. Changes to this policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. The &quot;Last updated&quot;
                        date at the top of this page indicates the most recent revision. Continued use of
                        our services after changes are published constitutes acceptance of the updated
                        policy.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">9. Contact</h2>
                    <p>
                        If you have questions, concerns, or requests regarding this Privacy Policy or our
                        handling of your personal information, contact us at{" "}
                        <a href="mailto:surjot@nodeplain.com" className="text-amber underline">
                            surjot@nodeplain.com
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}
