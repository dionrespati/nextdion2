"use client";
import { Button, TextInput } from "@components";
import React, { useState } from "react";
import { BiMailSend, BiReset } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";

interface IForgotPassword {
  email: string;
  phone: string;
}

export function ForgotPassword() {
  const [forgotPassword, setForgotPassword] = useState<IForgotPassword>({
    email: "",
    phone: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setForgotPassword((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleInputNumber(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    const inputValue = value.replace(/[^0-9]/g, ""); // Hanya biarkan angka
    setForgotPassword((prevState) => ({ ...prevState, [name]: inputValue }));
  }

  const { email, phone } = forgotPassword;
  return (
    <>
      <h2 className="mb-4">Silahkan Pilih salah satu</h2>
      <div className="mb-2">
        <TextInput
          label="Email"
          type="text"
          name="email"
          prefix={<BiMailSend size={25} />}
          value={email}
          onChange={handleChange}
          className="mb-4"
        />
      </div>
      <div className="w-full text-center">Atau</div>
      <div className="mb-5">
        <TextInput
          label="Nomor HP"
          type="text"
          name="phone"
          prefix={<GiSmartphone size={25} />}
          value={phone}
          onChange={handleInputNumber}
        />
      </div>
      <div className="w-full">
        <Button
          className="w-full"
          color="primary"
          type="button"
          iconStart={<BiReset size={23} />}
        >
          Kirim Reset Password
        </Button>
      </div>
    </>
  );
}
