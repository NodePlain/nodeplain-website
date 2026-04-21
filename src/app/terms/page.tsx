import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | NodePlain",
    description: "Terms and conditions governing the use of NodePlain services.",
};

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-4 text-ink">
                Terms of Service
            </h1>
            <p className="text-sm text-ink/60 mb-12">Last updated: 21 April 2026</p>

            <div className="space-y-8 text-ink/90 leading-relaxed">
                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">1. Acceptance of terms</h2>
                    <p>
                        By accessing or using the NodePlain website, services, or any internal tools
                        operated by NodePlain (ABN 43 685 875 877), you agree to be bound by these Terms
                        of Service. If you do not agree, you may not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">2. Services</h2>
                    <p>
                        NodePlain provides marketing, web development, and business-automation services
                        to clients under written engagement terms. In addition, NodePlain operates
                        internal software and integrations (including integrations with accounting
                        platforms such as QuickBooks Online) solely for the purpose of running NodePlain&apos;s
                        own business operations. These internal tools are not made available for use by
                        third parties.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">3. Authorised use</h2>
                    <p>
                        You agree to use NodePlain services only for lawful purposes and in accordance
                        with these Terms. You must not use our services in any way that could damage,
                        disable, overburden, or impair them, or interfere with any other party&apos;s use
                        of our services.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">4. Intellectual property</h2>
                    <p>
                        All content, trademarks, software, and materials published or operated by
                        NodePlain are the property of NodePlain or its licensors and are protected by
                        applicable intellectual-property laws. You may not copy, modify, distribute, or
                        create derivative works without prior written consent.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">5. Disclaimer of warranties</h2>
                    <p>
                        NodePlain services and content are provided &quot;as is&quot; and &quot;as
                        available&quot; without warranties of any kind, either express or implied, to
                        the fullest extent permitted by law. NodePlain does not warrant that services
                        will be uninterrupted, error-free, or free from security vulnerabilities.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">6. Limitation of liability</h2>
                    <p>
                        To the maximum extent permitted by Australian law, NodePlain shall not be liable
                        for any indirect, incidental, special, consequential, or punitive damages
                        arising out of or related to your use of (or inability to use) our services.
                        Nothing in these Terms excludes or limits any rights or remedies you may have
                        under the Australian Consumer Law that cannot be lawfully excluded.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">7. Third-party integrations</h2>
                    <p>
                        Our services may integrate with third-party platforms (including, without
                        limitation, QuickBooks Online by Intuit). Your use of those platforms is
                        governed by their own terms and privacy policies. NodePlain is not responsible
                        for the availability, accuracy, content, or practices of any third-party
                        service.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">8. Changes to these terms</h2>
                    <p>
                        We may update these Terms from time to time. The &quot;Last updated&quot; date
                        at the top of this page indicates the most recent revision. Continued use of our
                        services after changes are published constitutes acceptance of the updated
                        Terms.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">9. Governing law</h2>
                    <p>
                        These Terms are governed by and construed in accordance with the laws of the
                        Australian Capital Territory, Australia. Any disputes arising out of or in
                        connection with these Terms shall be subject to the exclusive jurisdiction of
                        the courts of the Australian Capital Territory.
                    </p>
                </section>

                <section>
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl mb-3 text-ink">10. Contact</h2>
                    <p>
                        For questions about these Terms, contact us at{" "}
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
