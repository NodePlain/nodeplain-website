import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassPanel } from "./glass-panel";

interface StatCardProps {
    value: string;
    label: string;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
    className?: string;
}

export function StatCard({ value, label, trend, trendValue, className }: StatCardProps) {
    return (
        <GlassPanel className={cn("p-4 flex flex-col items-start gap-1", className)}>
            <div className="flex items-baseline gap-2 w-full">
                <span className="font-headline-bold font-extrabold text-[1.6rem] text-ink tracking-[-0.03em] leading-none">
                    {value}
                </span>
                {trend && trendValue && (
                    <span
                        className={cn("text-[0.6rem] font-medium px-1.5 py-0.5 rounded-full", {
                            "bg-moss/10 text-moss-dark": trend === "up",
                            "bg-terracotta/10 text-terracotta": trend === "down",
                            "bg-stone/10 text-stone": trend === "neutral",
                        })}
                    >
                        {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
                    </span>
                )}
            </div>
            <span className="text-[0.45rem] font-bold uppercase tracking-wider text-stone font-body">
                {label}
            </span>
        </GlassPanel>
    );
}
