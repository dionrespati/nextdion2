import Link from "next/link";
import React from "react";
import { headerMenu } from "../constant";

export default function Navbar() {
  function functionName(): void {
    // Your code here
  }

  return (
    <nav className="flex flex-col md:flex-row  justify-between items-center w-full h-12  bg-cyan-100">
      <span>Nama</span>
      <ul className="flex flex-col sm:flex-row items-center gap-2">
        {headerMenu?.map((item, index) => (
          <li key={index}>
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
        <button className="rounded-md bg-gray-600 px-2 py-2 mr-3">
          Sign In
        </button>
      </ul>
    </nav>
  );
}
