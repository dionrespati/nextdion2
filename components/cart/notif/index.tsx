import React from "react";
import { MdNotificationsNone } from "react-icons/md";

interface NotifProps {
  totalItems: number;
}

export function Notif({ totalItems }: NotifProps) {
  return (
    <div className="relative mr-4">
      <MdNotificationsNone className="text-2xl" />
      {totalItems > 0 && (
        <div className="absolute -top-1 -right-2 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">
          {totalItems}
        </div>
      )}
    </div>
  );
}
