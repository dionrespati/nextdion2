import {
  UserBiodata,
  UserSettingNavbar,
  UserDaftarAlamat,
  UserRekeningBank,
} from "@modules";

import React from "react";

const data = [
  {
    nama: "Dion Respati",
  },
];

export default function UserHome({
  searchParams,
}: {
  searchParams: { tipe: string | "Biodata" };
}) {
  const { tipe } = searchParams;
  return (
    <>
      <UserSettingNavbar tipe={tipe} />
      {tipe === "Biodata" && <UserBiodata />}
      {tipe === "Daftar Alamat" && <UserDaftarAlamat />}
      {tipe === "Rekening Bank" && <UserRekeningBank />}
    </>
  );
}
