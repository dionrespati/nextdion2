import React from "react";
import CheckList from "./components/checklist";
import Sidepromo from "./components/sidepromo";

export default function Welcome() {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="md:max-w-4xl">
        <div className="flex justify-center items-center  rounded-lg bg-slate-300 p-4">
          <div>
            <h1 className="text-5xl mt-5">Stay Updated!</h1>
            <p className="p-1 mt-2 mb-2">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <p className="p-1 flex flex-row">
              <span className="mr-2">
                <CheckList />
              </span>
              Product discovery and building what matters
            </p>
            <p className="p-1 flex flex-row">
              <span className="mr-2">
                <CheckList />
              </span>
              Measuring to ensure updates are a success
            </p>
            <p className="p-1 flex flex-row">
              <span className="mr-2">
                <CheckList />
              </span>
              And much more!
            </p>
            <div>
              <label htmlFor="email" className="mb-3 text-xs">
                Email address
              </label>
            </div>
            <input
              type="email"
              placeholder="email@company.com"
              className="w-[90%] rounded-md p-4 border mb-4"
            />
            <button className="w-[90%] rounded-md p-4 bg-gray-500">
              Subscribe to monthly newsletters
            </button>
          </div>
          <Sidepromo />
        </div>
      </div>
    </div>
  );
}
