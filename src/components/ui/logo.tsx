import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link
            href="/"
            className={cn(
                "font-headline-bold font-extrabold text-[1rem] tracking-[-0.04em] leading-none select-none",
                className
            )}
        >
            <span className="text-ink">Node</span>
            <span className="text-amber">Plain</span>
        </Link>
    );
}
