"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-cream">
            <div className="absolute inset-0 backdrop-blur-[100px] z-50 mix-blend-overlay opacity-50" />

            {/* Primary Orb - Top Left */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-amber/20 rounded-full blur-[80px] mix-blend-multiply"
            />

            {/* Secondary Orb - Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-moss/20 rounded-full blur-[80px] mix-blend-multiply"
            />

            {/* Accent Orb - Middle */}
            <motion.div
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -40, 40, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-amber-light/15 rounded-full blur-[100px] mix-blend-multiply"
            />
        </div>
    );
}
