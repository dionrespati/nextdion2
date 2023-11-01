"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";
import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";

type InputSearchProps = {
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
};

export default function InputSearch({
  name,
  value,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  maxLength,
}: InputSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (typeof onKeyDown === "function") {
      onKeyDown(e);
    }
  }

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex">
        <HiMagnifyingGlass height={24} className="opacity-50" />
      </div>
      <form>
        <input
          type="text"
          placeholder={placeholder}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={onChange}
          value={value}
          name={name}
          className={clsx(
            `w-full p-4 pl-10 rounded-lg flex justify-center text-slate-900 items-center px-2 h-9 border border-solid focus:outline-none`,
            { "border-blue-500": isFocused }
          )}
        />
      </form>
    </div>
  );
}
