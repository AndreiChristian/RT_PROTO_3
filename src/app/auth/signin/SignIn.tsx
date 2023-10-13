"use client";

import TextInput from "@/components/Input/TextInput";
import { useState } from "react";

export default function SignIn() {

  async function login() {
    const payload = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // You can navigate or do something else here.
      } else {
        const data = await response.json();
        console.log("Login failed:", data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const [name, setName] = useState("Andrei")
  const [email, setEmail] = useState("andreichristiannetoiu@gmail.com")
  const [password, setPassword] = useState("peanut")

  return <>
    <TextInput label="Name" value={name} setValue={setName} type="text" />
    <TextInput label="Email" value={email} setValue={setEmail} type="email" />
    <TextInput label="Password" value={password} setValue={setPassword} type="password" />
    <button
      onClick={login}
      className="
      "
    >Login</button>
  </>
}
