import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    intensity?: "normal" | "light" | "heavy";
}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ className, intensity = "normal", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass-panel transition-all",
                    {
                        "bg-white/55 backdrop-blur-[16px]": intensity === "normal",
                        "bg-white/45 backdrop-blur-[12px]": intensity === "light",
                        "bg-white/65 backdrop-blur-[20px]": intensity === "heavy",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
