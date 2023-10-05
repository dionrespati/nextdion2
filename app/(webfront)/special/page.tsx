import { Button } from "@components";
import React from "react";
import { MdOutlineLogin } from "react-icons/md";

export default function SpecialPromo() {
  return (
    <div>
      <h3>Disini halaman special promo</h3>
      <button className="bg-red-700">Sini</button>
      <Button color="primary" startIcon={<MdOutlineLogin />}>
        Login
      </Button>
    </div>
  );
}
