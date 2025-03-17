"use client"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import { Mic, Send, Paperclip } from "lucide-react";
import { useState } from "react";

export default function Hero() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };


    const handleSubmit = () => {
        console.log("Message:", message);
        console.log("File:", file);
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col gap-4 justify-center items-center mb-16">
                <Image src={Logo} alt="" width={50} height={50} />
                <h1 className="text-4xl font-bold text-center text-black dark:text-white">Welcome to INTELLIA</h1>
                <p className=" text-center max-w-2xl text-black dark:text-white">Ask questions about pharmaceutical competitive intelligence, market trends, clinical trials, or upload documents for analysis.</p>
            </div>
            <div className=" dark:bg-[#121824] dark:text-white dark:shadow-[#2a2c2f] bg-white text-black  rounded-2xl shadow-sm ">
                <div className=" dark:border dark:border-[#1e242f] w-2xl px-10 py-4 flex flex-col justify-center items-center gap-4">
                    <Image src={Logo} alt="" width={50} height={50} />
                    <h1 className=" text-2xl font-bold text-center ">Welcome to INTELLIA</h1>
                    <p className=" text-center text-[#5c6778]">Ask questions about pharmaceutical competitive intelligence, market trends, clinical trials, or upload documents for analysis.</p>
                </div>
            </div>
            <div className=" mt-6 w-full dark:shadow-[#2a2c2f] shadow-sm">
                <div className="flex items-center dark:border dark:border-[#1e242f] py-2 px-4 dark:bg-[#171f30] dark:text-white bg-white text-black rounded-lg">
                    {/* Attachment Icon */}
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <Paperclip className="dark:text-gray-400 text-black dark:hover:text-white" size={20} />
                        <input id="file-upload" type="file" className="hidden text-black dark:text-white" onChange={handleFileChange} />
                    </label>

                    {/* Input Field */}
                    <input
                        type="text"
                        className="flex-1 bg-transparent text-white focus:outline-none p-2 mx-3"
                        placeholder="Ask about pharmaceutical competitive intelligence..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    {/* Mic Icon */}
                    <Mic className="text-gray-400 hover:text-white cursor-pointer mx-2" size={20} />

                    {/* Submit Icon */}
                    <div className={`${message ?"bg-[#ff3572]":"bg-[#7d4153]"} rounded-3xl m-2 p-2`}>
                    <Send
                        className="text-gray-400 hover:text-white cursor-pointer"
                        size={20}
                        onClick={handleSubmit}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}
