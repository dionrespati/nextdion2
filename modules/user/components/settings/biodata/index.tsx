import React from "react";

export function UserBiodata() {
  return (
    <div className="flex gap-2 p-2">
      <div className="w-1/3">
        <div className="p-3 h-72 max-h-72 max-w-xs rounded-md border border-solid border-gray-400">
          Mau diisi foto
        </div>
      </div>
      <div className="flex flex-col gap-2 w-2/3 p-2 text-gray-700">
        <div>Biodata</div>
        <hr className="h-1" />
        <div className="flex">
          <h3 className="w-1/4">Nama</h3>
          <span>Dion Respati</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Tanggal Lahir</h3>
          <span>19 Juli 1092</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Alamat</h3>
          <span>Jakarta</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Email</h3>
          <span>dionrespati@gmail.com</span>
        </div>
        <div className="flex">
          <h3 className="w-1/4">Nomor HP</h3>
          <span>087780441874</span>
        </div>
      </div>
    </div>
  );
}
