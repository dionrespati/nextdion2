"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { SidebarMenu } from "./components/menu-sidebar";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: (value: boolean) => void;
}

export default function SideBar1({ isOpen, toggleSidebar }: SideBarProps) {
  return (
    <aside
      className={`fixed duration-500 bg-blue-950 h-screen p-2 pt-2 ${
        isOpen ? "w-72" : "w-16"
      }`}
    >
      <BsArrowLeftCircle
        size={25}
        className={clsx(
          `bg-slate-200 text-blue-950 rounded-full text-3xl absolute -right-3 top-4 cursor-pointer`,
          {
            "rotate-180": !isOpen,
          }
        )}
        onClick={() => toggleSidebar(!isOpen)}
      />
      <SidebarMenu isOpen={isOpen} />
    </aside>
  );
}
