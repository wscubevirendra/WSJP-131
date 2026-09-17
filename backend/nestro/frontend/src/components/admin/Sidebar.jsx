"use client";

import {
  FiGrid,
  FiTag,
  FiBox,
  FiMonitor,
  FiDroplet,
  FiSettings,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FiGrid />,
    path: "/admin/dashboard",
  },
  {
    name: "Category",
    icon: <FiTag />,
    path: "/admin/category",
  },
  {
    name: "Products",
    icon: <FiBox />,
    path: "/admin/product",
  },
  {
    name: "Rooms",
    icon: <FiMonitor />,
    path: "/admin/room-type",
  },
  {
    name: "Colors",
    icon: <FiDroplet />,
    path: "/admin/colors",
  },
];

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <aside
      className={`h-screen bg-[#0b1a29] text-white flex flex-col border-r border-[#172838] transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div
        className={`h-[72px] px-4 flex items-center border-b border-[#172838] ${
          isOpen ? "justify-between" : "justify-center"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-11 h-11 shrink-0 rounded-[14px] bg-gradient-to-br from-[#08cfc0] to-[#00a99d] flex items-center justify-center text-lg">
            <FiMonitor />
          </div>

          {/* Logo Text */}
          {isOpen && (
            <div>
              <h1 className="text-[15px] font-bold leading-5">
                AdminPanel
              </h1>

              <p className="text-[#00c9bd] text-[10px] mt-1">
                Pro Dashboard
              </p>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-[#91a4b9] text-xl hover:text-white transition-colors ${
            !isOpen ? "absolute top-5 right-5" : ""
          }`}
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu Area */}
      <div className="flex-1 px-3 py-7 ">
        {/* Main Menu */}
        <div>
          {isOpen && (
            <p className="text-[#6c7f96] text-xs font-bold tracking-[1.5px] px-3 mb-5">
              MAIN MENU
            </p>
          )}

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.path ||
                pathname.startsWith(`${item.path}/`);

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.path)}
                  title={!isOpen ? item.name : ""}
                  className={`relative w-full h-14 flex items-center rounded-[16px] text-left transition-all duration-200 ${
                    isOpen
                      ? "gap-4 px-4"
                      : "justify-center px-0"
                  } ${
                    isActive
                      ? "bg-[#0d3943] border border-[#09606b] text-[#00d4c7]"
                      : "text-[#93a6bb] hover:bg-[#102536]"
                  }`}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-4 h-6 w-1 rounded-r bg-[#00d4c7]" />
                  )}

                  {/* Icon */}
                  <span
                    className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-[22px] ${
                      isActive
                        ? "bg-[#075a61] text-[#00d4c7]"
                        : "text-[#91a4b9]"
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* Name */}
                  {isOpen && (
                    <span className="text-[15px] font-medium">
                      {item.name}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* System */}
        <div className="mt-7 pt-5 border-t border-[#172838]">
          {isOpen && (
            <p className="text-[#6c7f96] text-xs font-bold tracking-[1.5px] px-3 mb-5">
              SYSTEM
            </p>
          )}

          <button
            onClick={() => handleNavigate("/admin/settings")}
            title={!isOpen ? "Settings" : ""}
            className={`relative w-full h-14 flex items-center rounded-[16px] text-left transition-all duration-200 ${
              isOpen
                ? "gap-4 px-4"
                : "justify-center px-0"
            } ${
              pathname === "/admin/settings"
                ? "bg-[#0d3943] border border-[#09606b] text-[#00d4c7]"
                : "text-[#71869e] hover:bg-[#102536]"
            }`}
          >
            {/* Active Indicator */}
            {pathname === "/admin/settings" && (
              <span className="absolute left-0 top-4 h-6 w-1 rounded-r bg-[#00d4c7]" />
            )}

            {/* Icon */}
            <span className="w-10 h-10 shrink-0 flex items-center justify-center text-[22px]">
              <FiSettings />
            </span>

            {/* Name */}
            {isOpen && (
              <span className="text-[15px] font-medium">
                Settings
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Admin Profile */}
      <div
        className={`h-[90px] border-t border-[#172838] flex items-center ${
          isOpen
            ? "px-5 justify-between"
            : "px-0 justify-center"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-[#078d88] border-2 border-[#075c68] flex items-center justify-center text-lg font-bold">
              A
            </div>

            {/* Online Status */}
            <span className="absolute right-[-2px] bottom-0 w-3.5 h-3.5 rounded-full bg-[#00d6a5] border-2 border-[#0b1a29]" />
          </div>

          {/* User Info */}
          {isOpen && (
            <div>
              <h3 className="text-[15px] font-bold">
                Admin
              </h3>

              <p className="text-[#71869e] text-xs mt-1">
                Super Admin
              </p>
            </div>
          )}
        </div>

        {/* Logout */}
        {isOpen && (
          <button
            className="text-[#71869e] text-xl hover:text-white transition-colors"
            title="Logout"
          >
            <FiLogOut />
          </button>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;