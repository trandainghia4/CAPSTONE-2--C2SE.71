import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Folder,
    BarChart,
    Users,
    User,
    PlusCircle, // Thêm icon mới cho New Project
    LogOut
} from "lucide-react";

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    // Danh sách menu chính
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
        <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r flex flex-col justify-between z-50">

            {/* Top Section */}
            <div>
                {/* Logo */}
                <div className="flex items-center gap-3 px-6 py-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        🎓
                    </div>
                    <h1 className="font-bold text-xl text-slate-800 tracking-tight">
                        MentorAI <span className="text-blue-600">Grad</span>
                    </h1>
                </div>

                {/* Main Navigation */}
                <nav className="mt-4 flex flex-col gap-1 px-4 text-gray-600">
                    <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Main Menu</p>
                    {menus.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`
                                flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200
                                ${isActive(item.path)
                                    ? "bg-blue-50 text-blue-600 font-semibold shadow-sm shadow-blue-50"
                                    : "hover:bg-gray-50 hover:text-slate-900"}
                            `}
                        >
                            <span className={`${isActive(item.path) ? "text-blue-600" : "text-gray-400"}`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="p-4 space-y-2">
                {/* Nút New Project nổi bật */}
                <button 
                    onClick={() => navigate("/newproject")}
                    className={`
                        w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all
                        ${isActive("/newproject") 
                            ? "bg-blue-700 text-white shadow-inner" 
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100"}
                    `}
                >
                    <PlusCircle size={20} />
                    Register Project
                </button>

                {/* Nút Logout hoặc Helper (Tùy chọn thêm) */}
                <button
                    onClick={() => navigate("/login")}
                 className={`w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium`}>
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}