import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import Authenticate from "../pages/auth/Authenticate";
import SignupPage from "../pages/auth/SignUp";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";
import SetPasswordPage from "../pages/auth/SetPasswordPage";
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "../pages/auth/Unauthorized";
import Overview from "../pages/Common/Overview";

// ⚠️ nhớ import nếu đã có
// import UserPage from "../pages/...";
// import EmployerPage from "../pages/...";
// import AdminPage from "../pages/...";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}
      <Route path="/" element={<Overview />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/authenticate" element={<Authenticate />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/set-password" element={<SetPasswordPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* ================= PROTECTED ================= */}
      <Route element={<ProtectedRoute />}>
        {/* Test trước 1 route cho chắc */}
        {/* <Route path="/home" element={<UserPage />} /> */}
      </Route>

      {/* ================= ROLE-BASED ================= */}
      <Route element={<ProtectedRoute allowedRoles={["ROLE_EMPLOYER", "ROLE_ADMIN"]} />}>
        {/* <Route path="/employer" element={<EmployerPage />} /> */}
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["ROLE_ADMIN"]} />}>
        {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Route>

      {/* ================= FALLBACK ================= */}
      {/* <Route path="*" element={<Overview />} /> */}
    </Routes>
  );
};

export default AppRoutes;