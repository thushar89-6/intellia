"use client"

import Image from "next/image";
import Login from "./components/Login";
import LeftSection from "./components/LeftSection";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" flex w-full h-screen justify-center items-center relative dark:bg-[#121824] bg-[#eaeef5]">
      <div className="absolute left-0 h-full">
        <Sidebar />
      </div>
      <div>
        <Hero />
      </div>
    </div>

  );
}
