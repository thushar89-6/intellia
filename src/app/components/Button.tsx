import React from "react";
import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  title: string;
  className: string;
  isIcon?: boolean;
  icon?: string | StaticImageData;// Accept both image file imports & URLs
  onClick?: () => void;  
}

export default function Button({ title, className, isIcon, icon,onClick }: ButtonProps) {
  return (
    <div className="mb-6 hover:cursor-pointer">
      <button className={`${className} w-full py-3 rounded-sm flex items-center gap-2 justify-center text-sm hover:cursor-pointer`} onClick={onClick}>
        {isIcon && icon && (
          typeof icon === "string" ? (
            <img src={icon} alt="icon" className="w-5 h-5" />
          ) : (
            <Image src={icon} alt="icon" width={20} height={20} />
          )
        )}
        {title}
      </button>
    </div>
  );
}
