import React from 'react'
import { Palette, Code, Camera, TrendingUp, BarChart3, CheckSquare, Sparkles, Users, Globe, Smartphone } from 'lucide-react'

function ServicesGrid() {
    return (
        <div className="p-4 max-w-7xl mx-auto">
            {/* Mobile Layout */}
            <div className="block md:hidden space-y-3">
                {/* Software Development */}
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <Code className="w-5 h-5" />
                        <h3 className="font-bold text-base">Software Development</h3>
                    </div>
                    <div className="space-y-1 text-xs opacity-90 mb-2">
                        <p>• UI/UX Design</p>
                        <p>• Website & Web App Development</p>
                        <p>• Mobile & Desktop Applications</p>
                    </div>
                    <p className="text-xs font-medium italic">From pixels to platforms — we code your vision into reality.</p>
                </div>

                {/* Branding & Digital Identity */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <Palette className="w-5 h-5" />
                        <h3 className="font-bold text-base">Branding & Digital Identity</h3>
                    </div>
                    <div className="space-y-1 text-xs opacity-90 mb-2">
                        <p>• Brand Strategy & Positioning</p>
                        <p>• Visual Identity Design</p>
                        <p>• Brand Guidelines</p>
                    </div>
                    <p className="text-xs font-medium italic">Build a brand that's unforgettable — and unshakable.</p>
                </div>

                {/* Media Production */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <Camera className="w-5 h-5" />
                        <h3 className="font-bold text-base">Media Production</h3>
                    </div>
                    <div className="space-y-1 text-xs opacity-90 mb-2">
                        <p>• Graphic Design</p>
                        <p>• Motion Graphics</p>
                        <p>• Video Editing & Montage</p>
                    </div>
                    <p className="text-xs font-medium italic">Visuals that don't just catch eyes — they hold attention.</p>
                </div>

                {/* Digital Marketing */}
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-5 h-5" />
                        <h3 className="font-bold text-base">Digital Marketing</h3>
                    </div>
                    <div className="space-y-1 text-xs opacity-90 mb-2">
                        <p>• Content Creation</p>
                        <p>• Social Media Management</p>
                        <p>• Paid Ads & Campaign Strategy</p>
                    </div>
                    <p className="text-xs font-medium italic">We turn clicks into conversions, and posts into impact.</p>
                </div>

                {/* Data Analysis & Reporting */}
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <BarChart3 className="w-5 h-5" />
                        <h3 className="font-bold text-base">Data Analysis & Reporting</h3>
                    </div>
                    <div className="space-y-1 text-xs opacity-90 mb-2">
                        <p>• Insights & Dashboards</p>
                        <p>• Campaign Performance Tracking</p>
                        <p>• Business Intelligence</p>
                    </div>
                    <p className="text-xs font-medium italic">Decisions backed by data. Every step of the way.</p>
                </div>

                {/* Project Management */}
                <div className="bg-gradient-to-br from-violet-500 to-purple-700 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <CheckSquare className="w-5 h-5" />
                        <h3 className="font-bold text-base">Project Management</h3>
                    </div>
                    <div className="space-y-1 text-xs opacity-90 mb-2">
                        <p>• Agile Workflows</p>
                        <p>• Milestone Tracking</p>
                        <p>• Strategic Planning</p>
                    </div>
                    <p className="text-xs font-medium italic">Your vision, delivered — on time, every time.</p>
                </div>

                {/* Quick Actions - Mobile Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-3 flex flex-col items-center justify-center text-white shadow-lg">
                        <Sparkles className="w-6 h-6 mb-1" />
                        <h3 className="font-bold text-xs text-center">Get Started</h3>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 flex flex-col items-center justify-center text-white shadow-lg">
                        <Users className="w-6 h-6 mb-1" />
                        <h3 className="font-bold text-xs text-center">About Us</h3>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-3 flex flex-col items-center justify-center text-white shadow-lg">
                        <Globe className="w-6 h-6 mb-1" />
                        <h3 className="font-bold text-xs text-center">Our Work</h3>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-3 flex flex-col items-center justify-center text-white shadow-lg">
                        <Smartphone className="w-6 h-6 mb-1" />
                        <h3 className="font-bold text-xs text-center">Contact</h3>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-5 md:grid-rows-5 gap-3 min-h-screen">
                {/* Branding & Digital Identity - Center piece */}
                <div className="col-start-2 row-start-3 col-span-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                        <Palette className="w-8 h-8" />
                        <h3 className="font-bold text-xl">Branding & Digital Identity</h3>
                    </div>
                    <div className="space-y-2 text-sm opacity-90">
                        <p>• Brand Strategy & Positioning</p>
                        <p>• Visual Identity Design</p>
                        <p>• Brand Guidelines</p>
                    </div>
                    <p className="text-sm font-medium mt-4 italic">Build a brand that's unforgettable — and unshakable.</p>
                </div>

                {/* Software Development - Large top center */}
                <div className="col-start-3 row-start-1 col-span-2 row-span-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                        <Code className="w-8 h-8" />
                        <h3 className="font-bold text-xl">Software Development</h3>
                    </div>
                    <div className="space-y-2 text-sm opacity-90">
                        <p>• UI/UX Design</p>
                        <p>• Website & Web App Development</p>
                        <p>• Mobile & Desktop Applications</p>
                    </div>
                    <p className="text-sm font-medium mt-4 italic">From pixels to platforms — we code your vision into reality.</p>
                </div>

                {/* Get Started - Top right */}
                <div className="col-start-5 row-start-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <Sparkles className="w-10 h-10 mb-3" />
                    <h3 className="font-bold text-lg text-center">Get Started</h3>
                    <p className="text-sm text-center mt-2 opacity-90">Begin your journey</p>
                </div>

                {/* Media Production - Left tall */}
                <div className="col-start-1 row-start-1 row-span-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                        <Camera className="w-8 h-8" />
                        <h3 className="font-bold text-xl">Media Production</h3>
                    </div>
                    <div className="space-y-2 text-sm opacity-90">
                        <p>• Graphic Design</p>
                        <p>• Motion Graphics</p>
                        <p>• Video Editing & Montage</p>
                    </div>
                    <p className="text-sm font-medium mt-4 italic">Visuals that don't just catch eyes — they hold attention.</p>
                </div>

                {/* About Us - Left top */}
                <div className="col-start-2 row-start-1 row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Users className="w-10 h-10 mb-3" />
                    <h3 className="font-bold text-lg text-center">About Us</h3>
                    <p className="text-sm text-center mt-2 opacity-90">Meet our team</p>
                </div>

                {/* Digital Marketing - Right tall */}
                <div className="col-start-5 row-start-2 row-span-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-8 h-8" />
                        <h3 className="font-bold text-xl">Digital Marketing</h3>
                    </div>
                    <div className="space-y-2 text-sm opacity-90">
                        <p>• Content Creation</p>
                        <p>• Social Media Management</p>
                        <p>• Paid Ads & Campaign Strategy</p>
                    </div>
                    <p className="text-sm font-medium mt-4 italic">We turn clicks into conversions, and posts into impact.</p>
                </div>

                {/* Data Analysis & Reporting - Bottom left */}
                <div className="col-start-1 row-start-4 col-span-2 row-span-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-8 h-8" />
                        <h3 className="font-bold text-xl">Data Analysis & Reporting</h3>
                    </div>
                    <div className="space-y-2 text-sm opacity-90">
                        <p>• Insights & Dashboards</p>
                        <p>• Campaign Performance Tracking</p>
                        <p>• Business Intelligence</p>
                    </div>
                    <p className="text-sm font-medium mt-4 italic">Decisions backed by data. Every step of the way.</p>
                </div>

                {/* Our Work - Center right */}
                <div className="col-start-4 row-start-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <Globe className="w-10 h-10 mb-3" />
                    <h3 className="font-bold text-lg text-center">Our Work</h3>
                    <p className="text-sm text-center mt-2 opacity-90">View portfolio</p>
                </div>

                {/* Project Management - Bottom center */}
                <div className="col-start-3 row-start-4 col-span-2 row-span-2 bg-gradient-to-br from-violet-500 to-purple-700 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckSquare className="w-8 h-8" />
                        <h3 className="font-bold text-xl">Project Management</h3>
                    </div>
                    <div className="space-y-2 text-sm opacity-90">
                        <p>• Agile Workflows</p>
                        <p>• Milestone Tracking</p>
                        <p>• Strategic Planning</p>
                    </div>
                    <p className="text-sm font-medium mt-4 italic">Your vision, delivered — on time, every time.</p>
                </div>

                {/* Contact - Bottom right small */}
                <div className="col-start-5 row-start-5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <Smartphone className="w-10 h-10 mb-3" />
                    <h3 className="font-bold text-lg text-center">Contact</h3>
                    <p className="text-sm text-center mt-2 opacity-90">Let's talk</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesGrid;