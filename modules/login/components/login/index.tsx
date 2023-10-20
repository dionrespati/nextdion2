"use client";

import React, { useState } from "react";
import { Button, TextInput } from "@components";
import { BiUser, BiKey, BiLogInCircle } from "react-icons/bi";

interface ILogin {
  username: string;
  password: string;
}

export function Login() {
  const [loginData, setLoginData] = useState<ILogin>({
    username: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  }

  const { username, password } = loginData;

  return (
    <>
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
        />
      </div>
      <div className="w-full">
        <Button
          className="w-full"
          color="primary"
          type="button"
          iconStart={<BiLogInCircle size={23} />}
        >
          Login
        </Button>
      </div>
    </>
  );
}
