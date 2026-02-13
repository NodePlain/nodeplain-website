import * as React from "react";
import { cn } from "@/lib/utils";

interface OrbProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "primary" | "secondary" | "terracotta";
    size?: "sm" | "md" | "lg";
}

export function Orb({ className, variant = "primary", size = "lg", ...props }: OrbProps) {
    return (
        <div
            className={cn(
                "absolute rounded-full pointer-events-none -z-10 blur-[2px]",
                "animate-float",
                {
                    "bg-[radial-gradient(circle_at_40%_50%,rgba(196,121,62,0.12)_0%,rgba(196,121,62,0.03)_45%,transparent_70%)]":
                        variant === "primary",
                    "bg-[radial-gradient(circle_at_40%_50%,rgba(122,160,94,0.08)_0%,rgba(122,160,94,0.03)_45%,transparent_65%)] animate-float-reverse":
                        variant === "secondary",
                    "bg-[radial-gradient(circle_at_40%_50%,rgba(181,78,58,0.08)_0%,rgba(181,78,58,0.03)_45%,transparent_65%)]":
                        variant === "terracotta",
                    "w-[120px] h-[120px]": size === "sm",
                    "w-[260px] h-[260px]": size === "md",
                    "w-[320px] h-[320px]": size === "lg",
                },
                className
            )}
            {...props}
        />
    );
}
