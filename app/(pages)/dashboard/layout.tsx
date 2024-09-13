import Sidebar from "@/components/sidebar";
import React from "react";
import HeaderDashboard from "./components/header-dashboard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 absolute right-0 inset-y-0">
        <HeaderDashboard />
        {children}
      </div>
    </div>
  );
};

export default Layout;
