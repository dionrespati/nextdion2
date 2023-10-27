"use client";

import { IUserInfo, useInfoUser } from "@modules";
import React from "react";
import Image from "next/image";
import { LoadingSpinner } from "@components";

export function UserBiodata() {
  const { data, isFetched } = useInfoUser("1");

  if (!isFetched) {
    return <LoadingSpinner />;
  }

  const {
    firstName,
    lastName,
    birthDate,
    address,
    email,
    phone,
    image,
    username,
  } = data ?? {};
  const { address: alamat } = address ?? {};

  return (
    <div className="flex gap-2 p-2">
      <div className="w-1/3">
        <div className="p-3 h-72 max-h-72 max-w-xs rounded-md border border-solid border-gray-400">
          <Image
            src={image || "/placeholder-image.jpg"}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-2/3 p-2 text-gray-700">
        <div className="font-semibold">Biodata</div>
        <hr className="h-1" />
        <div className="flex">
          <h3 className="w-1/4">Nama</h3>
          <span>{`${firstName} ${lastName}`}</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Tanggal Lahir</h3>
          <span>{birthDate}</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Alamat</h3>
          <span>{alamat}</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Email</h3>
          <span>{email}</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Nomor HP</h3>
          <span>{phone}</span>
        </div>
        <div className="mt-2 font-semibold">User Data</div>
        <hr className="h-1" />
        <div className="flex">
          <h3 className="w-1/4">Username</h3>
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}
