"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Main Component ---

export function NavbarMegaMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => setActiveMenu(menu);
    const handleMouseLeave = () => setActiveMenu(null);

    return (
        <nav className="flex items-center gap-8 h-full">
            {/* Results Link */}
            <Link
                href="/#proof"
                className="text-[0.7rem] font-medium text-stone hover:text-ink transition-colors font-body"
            >
                Our Results
            </Link>

            {/* Who We Help - Mega Menu */}
            <div
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('who-we-help')}
                onMouseLeave={handleMouseLeave}
            >
                <button className="flex items-center gap-1 text-[0.7rem] font-medium text-stone hover:text-ink transition-colors font-body group">
                    Who We Help
                    <ChevronDown size={12} className={cn("transition-transform duration-200", activeMenu === 'who-we-help' ? "rotate-180" : "")} />
                </button>
                {activeMenu === 'who-we-help' && (
                    <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] z-50 p-6 mega-menu-panel">
                        <div className="grid grid-cols-3 gap-6">
                            {/* Column 1: Physio */}
                            <div className="flex flex-col gap-4 p-4 rounded-lg hover:bg-white/40 transition-colors border-l-2 border-amber/20 hover:border-amber/60">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">🦴</span>
                                    <h3 className="font-headline-bold text-ink">Physiotherapy</h3>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link href="/who-we-help/physiotherapy/sports-msk" className="flex items-center gap-2 text-stone hover:text-amber transition-colors text-sm font-body">
                                            <ArrowRight size={12} /> Sports / MSK
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/who-we-help/physiotherapy/paediatric-ndis" className="flex items-center gap-2 text-stone hover:text-amber transition-colors text-sm font-body">
                                            <ArrowRight size={12} /> Paediatric / NDIS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/who-we-help/physiotherapy" className="flex items-center gap-2 text-stone hover:text-amber transition-colors text-sm font-body font-medium mt-1">
                                            View All Physio Solutions
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2: Osteo */}
                            <div className="flex flex-col gap-4 p-4 rounded-lg hover:bg-white/40 transition-colors border-l-2 border-moss/20 hover:border-moss/60">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">🤲</span>
                                    <h3 className="font-headline-bold text-ink">Osteopathy</h3>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link href="/who-we-help/osteopathy" className="flex items-center gap-2 text-stone hover:text-amber transition-colors text-sm font-body">
                                            <ArrowRight size={12} /> All Osteopathy
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3: Chiro */}
                            <div className="flex flex-col gap-4 p-4 rounded-lg hover:bg-white/40 transition-colors border-l-2 border-stone/20 hover:border-stone/60">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">🔧</span>
                                    <h3 className="font-headline-bold text-ink">Chiropractic</h3>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link href="/who-we-help/chiropractic" className="flex items-center gap-2 text-stone hover:text-amber transition-colors text-sm font-body">
                                            <ArrowRight size={12} /> All Chiropractic
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-stone/10 text-center">
                            <p className="text-stone-light text-xs italic font-body">
                                &ldquo;Every system we build is purpose-made for clinics with 5&ndash;50 staff who want to grow without the guesswork.&rdquo;
                            </p>
                        </div>
                    </div>
                )}
            </div>


            {/* Services - Mega Menu */}
            <div
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
            >
                <button className="flex items-center gap-1 text-[0.7rem] font-medium text-stone hover:text-ink transition-colors font-body group">
                    Services
                    <ChevronDown size={12} className={cn("transition-transform duration-200", activeMenu === 'services' ? "rotate-180" : "")} />
                </button>
                {activeMenu === 'services' && (
                    <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] z-50 p-6 mega-menu-panel">
                        <div className="grid grid-cols-3 gap-6">
                            <ServiceItem
                                icon="📢"
                                title="Meta Ads Management"
                                desc="Condition-specific campaigns that fill your books."
                                href="/services/meta-ads"
                            />
                            <ServiceItem
                                icon="🌐"
                                title="Website Design"
                                desc="Conversion-first sites built for allied health."
                                href="/services/website-design"
                            />
                            <ServiceItem
                                icon="⚡"
                                title="Speed-to-Lead"
                                desc="Leads contacted in under 60 seconds."
                                href="/services/speed-to-lead"
                            />
                            <ServiceItem
                                icon="🔗"
                                title="Practice Integration"
                                desc="Cliniko, Halaxy & Nookal automation."
                                href="/services/practice-management-integration"
                            />
                            <ServiceItem
                                icon="🔍"
                                title="SEO & GEO"
                                desc="Rank where your patients search."
                                href="/services/seo-geo"
                            />
                        </div>
                        <div className="mt-6 pt-4 border-t border-stone/10 flex justify-end">
                            <Link href="/#offer" className="flex items-center gap-2 text-xs font-bold text-amber hover:text-amber-dark transition-colors uppercase tracking-wider font-mono">
                                All included in The 50-Patient Pipeline <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Articles Link */}
            <Link
                href="/blog"
                className="text-[0.7rem] font-medium text-stone hover:text-ink transition-colors font-body"
            >
                Our Articles
            </Link>
        </nav>
    );
}

function ServiceItem({ icon, title, desc, href }: { icon: string; title: string; desc: string; href: string }) {
    return (
        <Link href={href} className="flex flex-col gap-2 p-4 rounded-lg hover:bg-white/40 transition-all group border border-transparent hover:border-amber/10">
            <div className="flex items-center gap-2">
                <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
                <span className="font-headline-bold text-ink text-sm group-hover:text-amber transition-colors">{title}</span>
            </div>
            <p className="text-stone text-xs leading-relaxed group-hover:text-warm-body transition-colors">
                {desc}
            </p>
        </Link>
    );
}
