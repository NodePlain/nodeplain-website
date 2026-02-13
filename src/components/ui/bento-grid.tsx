import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-card group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent",
                "glass-panel text-ink flex flex-col p-4",
                className
            )}
        >
            {children}
        </div>
    );
};
