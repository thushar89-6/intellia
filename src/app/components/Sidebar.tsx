"use client"
import Image from "next/image"
import NewsIcon from "../../../public/white-news.png"
import LandscapeIcon from "../../../public/white-gloab.png"
import MilestonesIcon from "../../../public/white-milestones.png"
import ProfileIcon from "../../../public/white-productprofile.png"
import TrailsIcon from "../../../public/white-trails.png"
import Logo from "../../../public/logo.png"
import { useState,useEffect } from "react"
import { Plus,Clock3,Folders,Database,ChevronDown, ChevronUp, ChevronLeft,ChevronRight,Sun,Moon,User } from 'lucide-react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    const [isKnowledgebaseOpen, setIsKnowledgebaseOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Load the saved theme from localStorage
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    setIsDarkMode(theme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme); // Save preference
    setIsDarkMode(newTheme === 'dark');
  };
    return (
        <div className=" bg-[#1b1b27] h-full p-5 flex flex-col items-start justify-between pb-10 px-4">
            <div>
                <div className=" flex items-center gap-4">
                    <div className="">
                        <Image className="hover:cursor-pointer" src={Logo} alt="Logo" width={32} height={32} />
                    </div>
                    {isOpen &&
                        <h1 className="text-2xl text-[#d85a78] font-semibold tracking-widest">INTELLIA</h1>
                    }
                </div>
                <div className=" mt-5">
                    {isOpen && <button className=" bg-[#32323d] rounded-2xl px-6 py-2 flex gap-1">
                        <Plus className="hover:cursor-pointer" width={25} />
                        New Search</button>}
                    {!isOpen && <div className="bg-[#32323d] rounded-full p-2 text-center">
                        <Plus className="hover:cursor-pointer" width={25} />
                    </div>}
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    <div className=" flex gap-4">
                        <Clock3  className="hover:cursor-pointer" height={25} />
                        {isOpen && <h1>History</h1>}
                    </div>
                    <div className="flex gap-4">
                        <Folders  className="hover:cursor-pointer" height={25} />
                        {isOpen && <h1>Collections</h1>}
                    </div>
                    <div className=" flex flex-col gap-6">
                        <div className=" flex gap-4">
                        <Database className="hover:cursor-pointer" height={25} />
                        {isOpen && <h1>Knowledge Base</h1>}
                        {isOpen && !isKnowledgebaseOpen && <ChevronDown className="hover:cursor-pointer" height={27} onClick={() => setIsKnowledgebaseOpen(true)} />}
                        {isOpen && isKnowledgebaseOpen && <ChevronUp className="hover:cursor-pointer" height={27} onClick={() => setIsKnowledgebaseOpen(false)} />}
                        </div>
                        {isOpen && isKnowledgebaseOpen &&
                            <div className="ml-8 flex flex-col gap-4">
                                <div className="flex gap-4 items-center">
                                    <Image className="hover:cursor-pointer" src={NewsIcon} alt="User" width={15} height={20} />
                                    <h1 className=" text-sm">Latest News</h1>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Image className="hover:cursor-pointer" src={LandscapeIcon} alt="User" width={15} height={20} />
                                    <h1 className=" text-sm">Landscape</h1>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Image className="hover:cursor-pointer" src={MilestonesIcon} alt="User" width={15} height={20} />
                                    <h1 className=" text-sm">Milestone</h1>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Image className="hover:cursor-pointer" src={ProfileIcon} alt="User" width={15} height={20} />
                                    <h1 className=" text-sm">Product Profiles</h1>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Image className="hover:cursor-pointer" src={TrailsIcon} alt="User" width={15} height={20} />
                                    <h1 className=" text-sm">Clinical Trails</h1>
                                </div>

                            </div>}
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-7">
                <User height={25} className=" hover:cursor-pointer" />
                {isDarkMode &&<Sun height={25} onClick={toggleDarkMode} className=" cursor-pointer"/>}
                {!isDarkMode &&<Moon  width={25} height={25} onClick={toggleDarkMode} className=" cursor-pointer"/>}
                {isOpen && <ChevronLeft className="hover:cursor-pointer" height={20} onClick={() => setIsOpen(false)} />}
                {!isOpen && <ChevronRight className="hover:cursor-pointer" height={20} onClick={() => setIsOpen(true)} />}
            </div>
        </div>
    )
}
