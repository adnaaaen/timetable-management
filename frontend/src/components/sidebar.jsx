"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = ({ RouteList }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      {RouteList.map(({ key, Icon, label, href }) => {
        const isActive =
          (pathname === "/" && href === "/") || pathname === href;

        const onClick = () => {
          router.push(href);
        };

        return (
          <button
            key={key}
            onClick={onClick}
            className={cn(
              "flex items-center gap-x-2 text-[13px] text-gray-400 hover:text-white font-[500] pl-3 transition-all rounded-md mt-1",
              isActive && "text-sky-600 bg-zinc-800 hover:text-sky-600"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-x-2 py-2",
                isActive && "text-blue-500 hover:text-blue-500"
              )}
            >
              <Icon size={15} />
              {label}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
