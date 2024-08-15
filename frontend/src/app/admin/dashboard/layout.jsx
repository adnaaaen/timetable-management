"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import { ADMIN_SIDEBAR_LINKS } from "@/constants/sidebar";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex h-screen">
      <div className="flex flex-col fixed h-full w-[280px] bg-rd-600 border-r">
        <div className="p-3 h-full">
          <Sidebar RouteList={ADMIN_SIDEBAR_LINKS} />
        </div>

        <div className="bottom-0 left-0 right-0 flex justify-between items-center">
          <div className="ml-3 items-center">
            <button
              className="w-full flex items-center justify-start text-red-500 gap-2 p-2"
              onClick={() => router.push("/")}
            >
              <LogOut size={14} />
              <span className="text-[13px] font-[500]">Sign out</span>
            </button>
          </div>
        </div>
      </div>
      <main className="flex-1 flex justify-center ml-[280px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
