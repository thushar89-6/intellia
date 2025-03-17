import React from "react";

interface InputProps {
  title: string;
  name: string; // 🛠️ FIX: Added name prop
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ title, name, placeholder, type = "text", onChange, value = "" }: InputProps) {
  return (
    <div className="mb-6">
      {title && <label className="block text-gray-700 mb-3 text-[14px] font-semibold">{title}</label>}
      <input
        name={name} 
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black rounded-none"
      />
    </div>
  );
}
