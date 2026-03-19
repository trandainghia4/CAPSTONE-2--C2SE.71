import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Overview/Sidebar";
import Header from "../components/Overview/Header";

export default function MainLayout() {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 ml-64 flex flex-col">
                <Header />

                <main className="p-6 bg-gray-50 min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}