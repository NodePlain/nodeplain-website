"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { NavbarMegaMenu } from "./mega-menu";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ArrowRight } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const toggleSubmenu = (menu: string) => {
        setMobileSubmenu(mobileSubmenu === menu ? null : menu);
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    scrolled ? "bg-cream/80 backdrop-blur-md border-ink/5 py-3" : "bg-transparent py-5"
                )}
            >
                <div className="max-w-[1240px] mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-0.5 group">
                        <span className="font-headline-bold font-extrabold text-xl text-ink tracking-tight">Node</span>
                        <span className="font-headline-bold font-extrabold text-xl text-amber tracking-tight group-hover:text-amber-dark transition-colors">Plain</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:block h-full">
                        <NavbarMegaMenu />
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Button asChild className="bg-ink hover:bg-ink/90 text-cream text-[0.65rem] font-semibold tracking-wide px-5 h-9 shadow-md hover:shadow-lg transition-all">
                            <Link href="#book">Book a Strategy Call</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-ink font-body font-medium text-sm p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X size={24} /> : "Menu"}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed inset-0 z-40 pt-20 bg-cream/95 backdrop-blur-xl overflow-y-auto md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-8 gap-2">
                            {/* Our Results */}
                            <Link
                                href="/#proof"
                                onClick={() => setMobileOpen(false)}
                                className="py-4 text-lg font-body font-medium text-ink border-b border-ink/5 hover:text-amber transition-colors"
                            >
                                Our Results
                            </Link>

                            {/* Who We Help - Expandable */}
                            <div className="border-b border-ink/5">
                                <button
                                    onClick={() => toggleSubmenu("who-we-help")}
                                    className="w-full py-4 flex items-center justify-between text-lg font-body font-medium text-ink hover:text-amber transition-colors"
                                >
                                    Who We Help
                                    <ChevronDown size={18} className={cn("transition-transform duration-200", mobileSubmenu === "who-we-help" && "rotate-180")} />
                                </button>
                                <AnimatePresence>
                                    {mobileSubmenu === "who-we-help" && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pb-4 flex flex-col gap-3">
                                                <Link href="/who-we-help/physiotherapists" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>🦴</span> Physiotherapy
                                                </Link>
                                                <Link href="/who-we-help/osteopathy" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>🤲</span> Osteopathy
                                                </Link>
                                                <Link href="/who-we-help/chiropractic" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>🔧</span> Chiropractic
                                                </Link>
                                                <Link href="/who-we-help" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-amber font-medium font-body text-sm mt-1">
                                                    View All <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Services - Expandable */}
                            <div className="border-b border-ink/5">
                                <button
                                    onClick={() => toggleSubmenu("services")}
                                    className="w-full py-4 flex items-center justify-between text-lg font-body font-medium text-ink hover:text-amber transition-colors"
                                >
                                    Services
                                    <ChevronDown size={18} className={cn("transition-transform duration-200", mobileSubmenu === "services" && "rotate-180")} />
                                </button>
                                <AnimatePresence>
                                    {mobileSubmenu === "services" && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pb-4 flex flex-col gap-3">
                                                <Link href="/services/meta-ads" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>📢</span> Meta Ads Management
                                                </Link>
                                                <Link href="/services/website-design" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>🌐</span> Website Design
                                                </Link>
                                                <Link href="/services/speed-to-lead" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>⚡</span> Speed-to-Lead
                                                </Link>
                                                <Link href="/services/practice-management-integration" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>🔗</span> Practice Integration
                                                </Link>
                                                <Link href="/services/seo-geo" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-stone hover:text-amber transition-colors font-body">
                                                    <span>🔍</span> SEO & GEO
                                                </Link>
                                                <Link href="/services" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-amber font-medium font-body text-sm mt-1">
                                                    View All Services <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Our Articles */}
                            <Link
                                href="/blog"
                                onClick={() => setMobileOpen(false)}
                                className="py-4 text-lg font-body font-medium text-ink border-b border-ink/5 hover:text-amber transition-colors"
                            >
                                Our Articles
                            </Link>

                            {/* Work */}
                            <Link
                                href="/work"
                                onClick={() => setMobileOpen(false)}
                                className="py-4 text-lg font-body font-medium text-ink border-b border-ink/5 hover:text-amber transition-colors"
                            >
                                Our Results
                            </Link>

                            {/* CTA */}
                            <div className="mt-6">
                                <Button asChild className="w-full cta-primary text-sm px-8 py-6 text-cream shadow-xl">
                                    <Link href="/book" onClick={() => setMobileOpen(false)}>Book a Strategy Call</Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
