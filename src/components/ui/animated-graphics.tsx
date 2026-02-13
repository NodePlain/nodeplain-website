"use client";

import { motion } from "framer-motion";
import { MessageCircle, X, Search, User, ShieldCheck, Zap } from "lucide-react";
import React from "react";

// --- 1. Leads That Ghost ---
export function GraphicLeadsGhost() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Phone Mock */}
            <div className="w-[140px] h-[200px] bg-white rounded-[20px] border-[4px] border-stone/10 shadow-lg relative overflow-hidden flex flex-col p-3 gap-2">
                {/* Incoming Message Msg */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
                    className="bg-amber/10 p-2 rounded-lg rounded-tl-none self-start max-w-[80%]"
                >
                    <div className="h-1.5 w-12 bg-amber/30 rounded-full mb-1"></div>
                    <div className="h-1.5 w-8 bg-amber/20 rounded-full"></div>
                </motion.div>

                {/* Typing Indicator... fading away */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.5, 1] }}
                    className="bg-stone/10 p-2 rounded-lg rounded-tr-none self-end flex gap-1 items-center"
                >
                    <div className="w-1.5 h-1.5 bg-stone/40 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-stone/40 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-stone/40 rounded-full animate-bounce delay-150"></div>
                </motion.div>

                {/* Ghost Icon appearing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 0, 0, 1, 0], scale: [0.5, 0.5, 0.5, 1.2, 1.5] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.7, 0.85, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm"
                >
                    <span className="text-4xl">👻</span>
                </motion.div>
            </div>
        </div>
    );
}


// --- 2. Agency Carousel ---
export function GraphicAgencyCarousel() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative w-[180px] h-[180px] rounded-full border border-stone/10"
            >
                {/* Agency Logos (Shapes) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center border border-stone/10 rotate-0">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-[0.6rem] font-bold text-blue-500">A1</div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center border border-stone/10 rotate-180">
                    <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-[0.6rem] font-bold text-red-500">A2</div>
                </div>

                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center border border-stone/10 -rotate-90">
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-[0.6rem] font-bold text-green-500">A3</div>
                </div>

                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center border border-stone/10 rotate-90">
                    <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-[0.6rem] font-bold text-purple-500">A4</div>
                </div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-3xl shadow-inner text-stone/40">
                    ?
                </div>
            </div>
        </div>
    )
}

// --- 3. Invisible Search ---
export function GraphicInvisibleSearch() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center pt-8">
            {/* Search Bar */}
            <div className="w-[80%] h-8 bg-white rounded-full shadow-sm border border-stone/20 flex items-center px-3 gap-2 mb-4 absolute top-4 z-10">
                <Search size={14} className="text-stone" />
                <div className="text-[0.6rem] text-stone">physio near me</div>
            </div>

            {/* Results List */}
            <div className="w-[70%] h-[120px] bg-white/60 rounded-lg overflow-hidden relative border border-stone/5">
                {/* Scroll Container */}
                <motion.div
                    animate={{ y: [0, -100] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    className="flex flex-col"
                >
                    {/* Competitors (Top) */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-10 border-b border-stone/10 flex items-center px-3 gap-2 opacity-50">
                            <div className="w-6 h-6 rounded bg-stone/20"></div>
                            <div className="flex-1 flex flex-col gap-1">
                                <div className="w-20 h-2 bg-stone/20 rounded"></div>
                                <div className="w-12 h-1.5 bg-stone/10 rounded"></div>
                            </div>
                        </div>
                    ))}

                    {/* YOU (Buried) */}
                    <div className="h-12 border-b border-stone/10 flex items-center px-3 gap-2 bg-amber/10">
                        <div className="w-6 h-6 rounded bg-amber flex items-center justify-center text-white text-[0.5rem] font-bold">YOU</div>
                        <div className="flex-1 flex flex-col gap-1">
                            <div className="w-24 h-2 bg-amber/40 rounded"></div>
                            <div className="w-16 h-1.5 bg-amber/20 rounded"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Gradient to hide bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none"></div>
            </div>
        </div>
    )
}

// --- 4. Cost Per Patient Chart ---
export function GraphicCostChart() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-6">
            <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                {/* Grid lines */}
                <line x1="0" y1="40" x2="100" y2="40" stroke="#E5E5E5" strokeWidth="1" />
                <line x1="0" y1="10" x2="100" y2="10" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="2 2" />

                {/* Trend Line */}
                <motion.path
                    d="M 5 35 Q 25 10 50 15 T 95 25"
                    fill="none"
                    stroke="#C07840"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Area fill */}
                <motion.path
                    d="M 5 35 Q 25 10 50 15 T 95 25 L 95 40 L 5 40 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />

                <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#C07840" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                {/* Hover Dot */}
                <motion.circle
                    cx="50"
                    cy="15"
                    r="3"
                    fill="#C07840"
                    stroke="white"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                />

                {/* Tooltip */}
                <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <rect x="35" y="0" width="30" height="12" rx="3" fill="#2A2620" />
                    <text x="50" y="8" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">$67 CPP</text>
                </motion.g>
            </svg>
        </div>
    )
}

// --- 5. Speed to Lead Timer ---
export function GraphicSpeedToLead() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-stone/10 relative flex items-center justify-center">
                {/* Spinner Track */}
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-amber border-t-transparent border-r-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                />
                <div className="flex flex-col items-center">
                    <span className="font-headline-bold text-2xl text-ink">12s</span>
                    <span className="text-[0.5rem] text-stone uppercase tracking-wide">Avg Time</span>
                </div>

                <motion.div
                    className="absolute bottom-[-10px] bg-moss text-white text-[0.6rem] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.1, 1] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
                >
                    <Zap size={8} fill="currentColor" /> CONTACTED
                </motion.div>
            </div>
        </div>
    )
}

// --- 6. Integration Hub ---
export function GraphicIntegration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Center Hub */}
            <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center text-cream shadow-lg z-10 relative">
                <span className="font-bold text-xs">Node</span>
            </div>

            {/* Orbiting Icons */}
            {[0, 120, 240].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                    style={{ rotate: deg }}
                >
                    <div className="absolute top-0 -translate-y-1/2 w-8 h-8 bg-white rounded-lg shadow-sm border border-stone/10 flex items-center justify-center rotate-[-${deg}deg]">
                        <div className={`w-4 h-4 rounded-full ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-green-400' : 'bg-orange-400'}`} />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
