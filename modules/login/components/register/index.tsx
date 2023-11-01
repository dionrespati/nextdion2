"use client";

import { Button, TextInput } from "@components";
import React, { useState } from "react";
import { BiKey, BiUser, BiMailSend, BiUserPlus } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";

interface IRegisterUser {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterUser() {
  const [loginData, setLoginData] = useState<IRegisterUser>({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, password, confirmPassword, email, phone } = loginData;

  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  const isValidUsername = username.length >= 8;

  const isValidPassword =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

  const isValidConfirmPassword =
    confirmPassword !== "" && password === confirmPassword;

  const isValidHP = phone.length >= 10;

  const isFormValid =
    isValidHP &&
    isValidPassword &&
    isValidEmail &&
    isValidUsername &&
    isValidConfirmPassword;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleInputNumber(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    const inputValue = value.replace(/[^0-9]/g, ""); // Hanya biarkan angka
    setLoginData((prevState) => ({ ...prevState, [name]: inputValue }));
  }

  return (
    <div className="overflow-auto">
      <div className="mb-2">
        <TextInput
          label="Email"
          type="email"
          name="email"
          size="sm"
          prefix={<BiMailSend size={25} />}
          value={email}
          onChange={handleChange}
          message={
            !isValidEmail && email !== "" ? `Format Email harus valid` : ``
          }
          isError={!isValidEmail && email !== ""}
          isValid={isValidEmail}
          required
        />
      </div>
      <div className="mb-2">
        <TextInput
          label="Nomor HP"
          type="text"
          name="phone"
          size="sm"
          prefix={<GiSmartphone size={25} />}
          value={phone}
          onChange={handleInputNumber}
          message={
            !isValidHP && phone !== "" ? `Nomor HP minimal 10 angka` : ``
          }
          isError={!isValidHP && phone !== ""}
          isValid={isValidHP}
          required
        />
      </div>
      <div className="mb-2">
        <TextInput
          label="Username"
          type="text"
          name="username"
          size="sm"
          prefix={<BiUser size={25} />}
          value={username}
          onChange={handleChange}
          message={
            !isValidUsername && username !== "" ? `Minimal 8 Karakter` : ``
          }
          isError={!isValidUsername && username !== ""}
          isValid={isValidUsername}
          required
        />
      </div>
      <div className="mb-4">
        <TextInput
          label="Password"
          type="password"
          name="password"
          size="sm"
          prefix={<BiKey size={25} />}
          value={password}
          onChange={handleChange}
          message={
            !isValidPassword && password !== ""
              ? `Minimal 8 karakter, mengandung Huruf Besar, Angka dan Karakter khusus`
              : ``
          }
          isError={!isValidPassword && password !== ""}
          isValid={isValidPassword}
          required
        />
      </div>
      <div className="mb-4">
        <TextInput
          label="Ulangi Password"
          type="password"
          name="confirmPassword"
          size="sm"
          prefix={<BiKey size={25} />}
          value={confirmPassword}
          onChange={handleChange}
          message={
            !isValidConfirmPassword && confirmPassword !== ""
              ? `Harus sama dengan password`
              : ``
          }
          isError={!isValidConfirmPassword && confirmPassword !== ""}
          isValid={isValidConfirmPassword}
          required
        />
      </div>
      <div className="w-full">
        <Button
          className="w-full"
          color="primary"
          type="button"
          size="sm"
          iconStart={<BiUserPlus size={30} />}
          disabled={!isFormValid}
        >
          Register
        </Button>
      </div>
    </div>
  );
}
