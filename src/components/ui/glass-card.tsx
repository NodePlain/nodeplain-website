import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    intensity?: "light" | "normal" | "heavy";
    hoverEffect?: boolean;
}

export function GlassCard({ className, intensity = "normal", hoverEffect = true, children, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-panel relative",
                {
                    "bg-white/40 border-white/40": intensity === "light",
                    "bg-white/55 border-white/60": intensity === "normal",
                    "bg-white/70 border-white/70 backdrop-blur-[24px]": intensity === "heavy",
                    "hover:translate-y-[-4px] hover:shadow-glass-hover transition-all duration-300": hoverEffect,
                },
                className
            )}
            {...props}
        >
            {/* Inner Highlight for 3D glass effect */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50 pointer-events-none" />
            {children}
        </div>
    );
}
