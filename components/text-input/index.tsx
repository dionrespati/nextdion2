"use client";

import {
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { ChangeEvent, FocusEvent, ReactNode, KeyboardEvent } from "react";
import React, { useState } from "react";

type TextInputProps = {
  label?: string;
  message?: string | ReactNode;
  name?: string;
  type?: "text" | "date" | "password" | "email" | "number" | "search";
  value?: string;
  isError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  maxLength?: number;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  size?: "md" | "lg" | "sm";
};

export default function TextInput({
  label,
  message,
  name,
  type = "text",
  value,
  isError,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled = false,
  required = false,
  readOnly = false,
  className,
  placeholder,
  maxLength,
  prefix,
  suffix,
  size = "md",
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setisShowPassword] = useState(false);

  const inputType = type === "password" && isShowPassword ? "text" : type;

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (typeof onKeyDown === "function") {
      onKeyDown(e);
    }
  }

  const hasPrefix = !!prefix;
  const hasSuffix = !!suffix;

  const passwordStyle = "absolute top-1/2 right-2 transform -translate-y-1/2";
  const addOnsStyle =
    "flex justify-center bg-slate-300 min-w-[40px] items-center h-10 px-2 border border-solid";

  let borderColor = "border-slate-500";
  if (isFocused && !isError) borderColor = "border-sky-500";
  if (isError) borderColor = "border-red-600";
  if (disabled) borderColor = "border-slate-500";

  let textColor = "text-slate-800";
  if (isError) textColor = "text-red-600";
  if (disabled) textColor = "text-slate-400";

  let bgColor = "bg-white";
  if (disabled) bgColor = "bg-slate-300";

  return (
    <div
      className={clsx("w-full flex gap-1 flex-col", className, {
        error: isError,
      })}
    >
      <label
        htmlFor={name}
        className={clsx(
          "block font-medium text-left mb-1",
          textColor,
          borderColor
        )}
      >
        {label}
      </label>
      <div className="flex w-full">
        {hasPrefix && (
          <div
            className={clsx(
              "rounded-l border-r-0",
              addOnsStyle,
              textColor,
              borderColor,
              {
                "h-10": size === "sm",
                "h-12": size === "md",
                "h-14": size === "lg",
              }
            )}
          >
            <span className={size === "sm" || size === "md" ? `p-2` : `p-3`}>
              {prefix}
            </span>
          </div>
        )}
        <div className="relative w-full">
          <input
            id={name}
            onFocus={handleFocus}
            type={type === "search" ? "text" : inputType}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            required={required}
            readOnly={readOnly}
            className={clsx(
              "flex justify-center text-slate-900 items-center px-2 h-10 border border-solid w-full focus:outline-none",
              borderColor,
              textColor,
              bgColor,
              {
                "rounded-l": !hasPrefix,
                "rounded-r": !hasSuffix,
                "h-10": size === "sm",
                "h-12": size === "md",
                "h-14": size === "lg",
              }
            )}
            placeholder={placeholder}
            maxLength={maxLength}
          />
          {inputType === "password" && !isShowPassword && (
            <button
              type="button"
              onClick={() => setisShowPassword(true)}
              className={passwordStyle}
            >
              <EyeSlashIcon height={24} />
            </button>
          )}

          {inputType === "text" && isShowPassword && (
            <button
              type="button"
              onClick={() => setisShowPassword(false)}
              className={passwordStyle}
            >
              <EyeIcon height={24} />
            </button>
          )}

          {type === "search" && (
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
              <MagnifyingGlassIcon height={24} />
            </div>
          )}
        </div>
        {hasSuffix && (
          <div
            className={clsx(
              "rounded-r border-l-0",
              addOnsStyle,
              borderColor,
              textColor
            )}
          >
            <span>{suffix}</span>
          </div>
        )}
      </div>
      {message && (
        <p className={clsx("mt-1 text-[11px] leading-normal", textColor)}>
          {message}
        </p>
      )}
    </div>
  );
}
