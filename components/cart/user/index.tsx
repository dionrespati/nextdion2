import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export function UserIcon() {
  return (
    <Link href="/user/settings?tipe=Biodata" className="relative mr-4">
      <div className="relative mr-4">
        <AiOutlineUser className="text-2xl" />
      </div>
    </Link>
  );
}
