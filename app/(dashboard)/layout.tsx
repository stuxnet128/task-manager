import { Sidebar } from "@/components/sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="p-10  w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
