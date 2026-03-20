import React from "react";
import { Bell, Settings } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">

            {/* Left: Logo + Title */}
            <div className="flex items-center gap-3">
                    <div className="w-10  h-10 t-10 text-5xl rounded-xl flex items-center justify-center text-white">
                        🎓
                    </div>
                <h1 className="text-lg font-semibold text-gray-800">
                    MentorAI Grad
                </h1>
            </div>

            {/* Center: Search */}
            <div className="flex-1 mx-10 mr-[50%]">
                <input
                    type="text"
                    placeholder="Search milestones, documents, feedback..."
                    className="w-full px-4 py-2 bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Right: Icons + Avatar */}
            <div className="flex items-center gap-5">
                {/* Notification */}
                <div className="relative cursor-pointer">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                {/* Settings */}
                <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />

                {/* Divider */}
                <div className="h-6 w-px bg-gray-300"></div>

                {/* Avatar */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold cursor-pointer">
                    DS
                </div>
            </div>
        </header>
    );
}