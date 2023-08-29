import React from "react";

export default function MyButton() {
  return (
    <div className="p-4 relative w-1/3 bg-slate-100">
      <div className="relative">
        <div className="mb-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
        </div>
        <div className=" bg-fuchsia-300">
          <input
            type="password"
            name="password"
            className="border rounded-md p-2 w-full"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="relative">
        <div className="mb-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="border rounded-md p-2 w-full"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
  );
}
