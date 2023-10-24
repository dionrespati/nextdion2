import React from "react";
import { TransaksiNavbar, TransaksiPending, TransaksiSukses } from "@modules";

export default function UserTransaksi({
  searchParams,
}: {
  searchParams: { tipe: string | "Pending" };
}) {
  const { tipe } = searchParams;
  return (
    <>
      <TransaksiNavbar tipe={tipe} />
      {tipe === "Pending" ? <TransaksiPending /> : null}
      {tipe === "Berhasil" ? <TransaksiSukses /> : null}
    </>
  );
}
