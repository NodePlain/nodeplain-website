import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-cream border-t border-stone/10 py-12 mt-20">
            <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Logo />
                    <p className="text-[0.65rem] text-stone">
                        &copy; {new Date().getFullYear()} NodePlain. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-[0.65rem] text-stone">
                    <Link href="/privacy" className="hover:text-ink transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-ink transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
