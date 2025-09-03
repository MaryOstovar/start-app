// src/Layout.tsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Persistent Header */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Persistent Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Page Content */}
      <Box component="main" sx={{ flex: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
