import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-[9px] font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    {
                        "cta-primary text-cream": variant === "primary",
                        "cta-secondary text-warm-mid hover:bg-white/60": variant === "secondary",
                        "hover:bg-stone/10 text-ink": variant === "ghost",
                        "border border-stone/20 bg-transparent hover:bg-stone/5 text-ink": variant === "outline",
                        "text-amber underline-offset-4 hover:underline": variant === "link",
                        "text-[0.65rem] px-4 py-2": size === "sm",
                        "text-[0.72rem] px-6 py-3": size === "md",
                        "text-[0.85rem] px-8 py-4": size === "lg",
                        "h-9 w-9 p-0": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
