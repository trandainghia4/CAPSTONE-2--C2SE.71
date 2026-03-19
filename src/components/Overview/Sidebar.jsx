import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Folder,
    BarChart,
    Users,
    User
} from "lucide-react";

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    // Danh sách menu
    const menus = [
        { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
        { name: "My Project", path: "/project", icon: <Folder size={18} /> },
        { name: "Reports", path: "/reports", icon: <BarChart size={18} /> },
        { name: "Team", path: "/team", icon: <Users size={18} /> },
        { name: "Profile", path: "/profile", icon: <User size={18} /> },
    ];

    // Check active
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-100 border-r flex flex-col justify-between">

            {/* Top */}
            <div>
                {/* Logo */}
                <div className="flex items-center gap-3 px-6 py-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                        🎓
                    </div>
                    <h1 className="font-semibold text-gray-800">
                        MentorAI Grad
                    </h1>
                </div>

                {/* Menu */}
                <nav className="mt-4 flex flex-col gap-2 px-4 text-gray-700">
                    {menus.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`
                                flex items-center gap-3 px-4 py-2 rounded-lg transition
                                ${isActive(item.path)
                                    ? "bg-blue-100 text-blue-600 font-medium"
                                    : "hover:bg-gray-200"}
                            `}
                        >
                            {item.icon}
                            {item.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Bottom */}
            <div className="p-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    + New Project
                </button>
            </div>
        </aside>
    );
}