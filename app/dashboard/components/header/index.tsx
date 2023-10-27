import React from "react";
import { AiFillBank } from "react-icons/ai";

export default function Header() {
  return (
    <header className="relative border-solid border-b border-gray-400">
      <section className="fixed bg-blue-900 w-full z-10 h-[51px] top-0 flex items-center">
        <div className="inline-flex ml-2">
          <AiFillBank
            className={`bg-amber-400 rounded-full cursor-pointer block float-left mr-2`}
            size={28}
          />
          <h3 className={`text-white font-semibold origin-left`}>
            Bakul<span className="text-amber-400">Murah</span>
          </h3>
        </div>
      </section>
    </header>
  );
}
