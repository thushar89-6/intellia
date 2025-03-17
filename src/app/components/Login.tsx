"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import MicrosoftIcon from "../../../public/microsofticon.png";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async() => {
    console.log("User:", user);
    try {
      console.log("Hi")
      const response = await axios.post("/api/auth/user/signin", user,{
        headers: {
          "Content-Type": "application/json",
          },
          withCredentials:true
      });
      console.log("Login Successful:", response.data);
      router.push("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="bg-[#f8f9fc] text-black rounded-4xl px-16 py-12">
      <div className="mb-5">
        <h2 className="text-[26px] font-bold">Welcome Back</h2>
        <h6 className="opacity-60">Sign in to access the platform</h6>
      </div>

      {/* 🛠️ FIX: Add name="email" and name="password" */}
      <Input title="Email" name="email" placeholder="name@company.com" type="email" onChange={handleChange} value={user.email} />
      <Input title="Password" name="password" placeholder="Enter your password" type="password" onChange={handleChange} value={user.password} />

      <div onClick={handleSubmit}>
        <Button title="Sign In" className="bg-[#db6985] text-white" isIcon={false} icon=""/>
      </div>

      <div className="flex my-10 justify-center items-center gap-2">
        <div className="w-24 h-[1px] bg-[#e5e7eb]"></div>
        <h6 className="text-[12px] opacity-40 text-center">OR CONTINUE WITH</h6>
        <div className="w-24 h-[1px] bg-[#e5e7eb]"></div>
      </div>

      <Button title="Sign in with SSO" className="bg-white border border-gray-200" isIcon={true} icon={MicrosoftIcon} />

      <p className="text-center text-sm mx-4">
        <span className="opacity-45">By clicking continue, you agree to our{" "}</span>
        <span className="underline opacity-45 hover:opacity-85 cursor-pointer">Terms of Service</span>{" "}
        <span className="opacity-45">and{" "}</span>
        <span className="underline opacity-45 hover:opacity-85 cursor-pointer">Privacy Policy</span>.
      </p>

      <img src="https://datazymes.com/wp-content/uploads/2024/03/DZ_new_logo.png" className="justify-self-center mt-8" alt="datazymes" width={180} height={50} />
    </div>
  );
}
