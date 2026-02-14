// Pure CSS animations - no client-side JS needed
export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-cream">
            {/* Desktop: Animated orbs with CSS blur */}
            <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-amber/20 rounded-full blur-[80px] mix-blend-multiply animate-float-slow hidden md:block" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-moss/20 rounded-full blur-[80px] mix-blend-multiply animate-float-slower hidden md:block" />

            {/* Mobile: Use radial gradients instead of filter blur for GPU performance */}
            <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full md:hidden" style={{ background: 'radial-gradient(circle, rgba(192,120,64,0.15) 0%, transparent 70%)' }} />
            <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full md:hidden" style={{ background: 'radial-gradient(circle, rgba(122,160,94,0.15) 0%, transparent 70%)' }} />
        </div>
    );
}
