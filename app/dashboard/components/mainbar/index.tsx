"use client";
import React, { useState } from "react";
import SideBar1 from "../sidebar";

export default function MainBar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  const toggleSidebar = (value: boolean) => {
    setOpen(value);
  };

  return (
    <section>
      <SideBar1 isOpen={open} toggleSidebar={toggleSidebar} />
      <main
        className={`p-4 ${open ? "ml-72" : "ml-16"}`}
        style={{ transition: "width 0.3s" }}
      >
        {children}
      </main>
    </section>
  );
}
