// Pure CSS animations - no client-side JS needed
export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-cream">
            <div className="absolute inset-0 backdrop-blur-[100px] z-50 mix-blend-overlay opacity-50" />

            {/* Primary Orb - Top Left - CSS animation only on desktop */}
            <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-amber/20 rounded-full blur-[80px] mix-blend-multiply animate-float-slow hidden md:block" />

            {/* Secondary Orb - Bottom Right - CSS animation only on desktop */}
            <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-moss/20 rounded-full blur-[80px] mix-blend-multiply animate-float-slower hidden md:block" />

            {/* Static orbs on mobile for visual interest without performance cost */}
            <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-amber/20 rounded-full blur-[80px] mix-blend-multiply md:hidden" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-moss/20 rounded-full blur-[80px] mix-blend-multiply md:hidden" />
        </div>
    );
}
