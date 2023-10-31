"use client";
import { Login, RegisterUser, ForgotPassword } from "@modules";
import React, { useState } from "react";
import { RiShieldUserLine } from "react-icons/ri";


export default function Home() {
  const [activeTab, setActiveTab] = useState("Login");

  const formTab = ["Login", "Daftar", "Lupa Password"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed h-[700px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-1/3 p-4 border rounded-lg shadow border-gray-300">
      <div className="flex justify-center mb-4 rounded bg-blue-300 p-2">
        <RiShieldUserLine size={45} />
      </div>
      <div className="flex space-x-4 mb-5">
        {formTab.map((tabName) => (
          <div
            key={tabName}
            className={`cursor-pointer ${
              activeTab === tabName
                ? "border-b-2 border-blue-400 text-blue-500"
                : "border-b-2 border-transparent"
            } p-2`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </div>
        ))}
      </div>
      <div>
        {activeTab === "Login" ? <Login /> : null}
        {activeTab === "Daftar" ? <RegisterUser /> : null}
        {activeTab === "Lupa Password" ? <ForgotPassword /> : null}
      </div>
    </div>
  );
}
