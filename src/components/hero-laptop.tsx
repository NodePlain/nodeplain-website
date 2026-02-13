"use client";

import { motion } from "framer-motion";
import { HeroNotifications } from "@/components/hero-notifications";

export function HeroLaptop() {
    return (
        <div className="relative w-full max-w-[800px] h-auto aspect-[16/10] z-10 hidden md:block">
            {/* Laptop Frame */}
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-t-2xl shadow-2xl border-4 border-[#2a2a2a] overflow-hidden">
                {/* Screen Content - Mock Cliniko Calendar */}
                <div className="w-full h-full bg-white relative flex flex-col">
                    {/* Fake Browser Header */}
                    <div className="h-8 bg-[#f3f3f3] border-b border-[#e0e0e0] flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#fa5e57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-white rounded-md px-3 py-0.5 text-[0.6rem] text-stone shadow-sm w-[40%] text-center">cliniko.com/calendar</div>
                        </div>
                    </div>

                    {/* Calendar UI Mock */}
                    <div className="flex-1 bg-white p-4 flex gap-4 overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-16 flex flex-col gap-4 border-r border-[#e0e0e0] pr-4">
                            <div className="w-8 h-8 rounded-full bg-stone/10"></div>
                            <div className="w-full h-2 rounded bg-stone/10"></div>
                            <div className="w-full h-2 rounded bg-stone/10"></div>
                            <div className="w-full h-2 rounded bg-stone/10"></div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="w-32 h-6 rounded bg-stone/10"></div>
                                <div className="w-24 h-6 rounded bg-amber/20"></div>
                            </div>

                            <div className="grid grid-cols-4 gap-2 h-full">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="border-l border-[#e0e0e0] h-full flex flex-col gap-2 relative">
                                        {/* Appointments */}
                                        <div className={`absolute top-[10%] left-1 right-1 h-20 rounded bg-moss/20 border-l-4 border-moss p-1`}>
                                            <div className="w-1/2 h-2 rounded bg-moss/40 mb-1"></div>
                                            <div className="w-3/4 h-2 rounded bg-moss/30"></div>
                                        </div>
                                        {i % 2 === 0 && (
                                            <div className={`absolute top-[40%] left-1 right-1 h-32 rounded bg-blue-100 border-l-4 border-blue-400 p-1`}>
                                                <div className="w-1/2 h-2 rounded bg-blue-300 mb-1"></div>
                                                <div className="w-3/4 h-2 rounded bg-blue-200"></div>
                                            </div>
                                        )}
                                        {i % 2 !== 0 && (
                                            <div className={`absolute top-[60%] left-1 right-1 h-16 rounded bg-amber/20 border-l-4 border-amber p-1`}>
                                                <div className="w-1/2 h-2 rounded bg-amber/40 mb-1"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptop Base */}
            <div className="absolute -bottom-[14px] left-[5%] right-[5%] h-[14px] bg-[#d1d1d1] rounded-b-lg shadow-lg flex justify-center items-start">
                <div className="w-24 h-1 bg-[#a0a0a0] rounded-b-md"></div>
            </div>


            {/* Notifications Overlay - Positioned appropriately */}
            <div className="absolute top-[20%] right-[-50px] w-[320px] z-50">
                <HeroNotifications />
            </div>
        </div>
    );
}
