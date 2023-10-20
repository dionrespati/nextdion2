"use client";

import { Button, TextInput } from "@components";
import React, { useState } from "react";
import { BiKey, BiUser, BiMailSend, BiUserPlus } from "react-icons/bi";

interface IRegisterUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterUser() {
  const [loginData, setLoginData] = useState<IRegisterUser>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  }

  const { username, password, confirmPassword, email } = loginData;

  return (
    <>
      <div className="mb-2">
        <TextInput
          label="Email"
          type="email"
          name="email"
          prefix={<BiMailSend size={25} />}
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <TextInput
          label="Username"
          type="text"
          name="username"
          prefix={<BiUser size={25} />}
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <TextInput
          label="Password"
          type="password"
          name="password"
          prefix={<BiKey size={25} />}
          value={password}
          onChange={handleChange}
          message="Minimal 8 Karakter, harus terdiri dari Huruf Kapital, Angka dan Special Karakter"
        />
      </div>
      <div className="mb-4">
        <TextInput
          label="Ulangi Password"
          type="password"
          name="confirmPassword"
          prefix={<BiKey size={25} />}
          value={confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <Button
          className="w-full"
          color="primary"
          type="button"
          iconStart={<BiUserPlus size={30} />}
        >
          Register
        </Button>
      </div>
    </>
  );
}
