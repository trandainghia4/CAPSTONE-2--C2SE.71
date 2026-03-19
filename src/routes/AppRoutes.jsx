import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import Authenticate from "../pages/auth/Authenticate";
import SignupPage from "../pages/auth/SignUp";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";
import SetPasswordPage from "../pages/auth/SetPasswordPage";
import Unauthorized from "../pages/auth/Unauthorized";
import Overview from "../pages/Common/Overview";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";


// Demo page (bạn thay bằng page thật)
import Dashboard from "../pages/student/Dashboard";


const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC (KHÔNG CÓ LAYOUT) ================= */}
      <Route path="/" element={<Overview />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/authenticate" element={<Authenticate />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/set-password" element={<SetPasswordPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* ================= PROTECTED + LAYOUT ================= */}
      <Route element={<ProtectedRoute />}>
        
        {/* Bọc Layout ở đây */}
        <Route element={<MainLayout />}>
          
          {/* User chung */}
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>
      </Route>

      {/* ================= ROLE EMPLOYER / ADMIN ================= */}
      <Route element={<ProtectedRoute allowedRoles={["ROLE_EMPLOYER", "ROLE_ADMIN"]} />}>
        <Route element={<MainLayout />}>
          
          {/* <Route path="/employer" element={<EmployerPage />} /> */}

        </Route>
      </Route>

      {/* ================= ROLE ADMIN ================= */}
      <Route element={<ProtectedRoute allowedRoles={["ROLE_ADMIN"]} />}>
        <Route element={<MainLayout />}>
          
          {/* <Route path="/admin" element={<AdminPage />} /> */}

        </Route>
      </Route>

      {/* ================= FALLBACK ================= */}
      {/* <Route path="*" element={<Overview />} /> */}
    </Routes>
  );
};

export default AppRoutes;