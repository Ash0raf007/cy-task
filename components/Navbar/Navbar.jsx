"use client";

import React from 'react'
import Image from "next/image";
import { Bell } from 'lucide-react';
import { usePathname } from "next/navigation";


const Navbar = () => {
  // const path = usePathname();

  // const nameOfCurrentPath = path
  // .split("/dashboard")[1]
  // .split("/")
  // .map((item) => {
  //   if (typeof +item === "number" && !Number.isNaN(+item)) return "";
  //   return item
  //     .split("-")
  //     .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  //     .join(" ");
  // })
  // .filter((item, index) => item !== "" && index !== 0)
  // .join(" > ")
  // .slice(0);

  return (
    <div className='flex items-center justify-between mt-[34px]'>

      {/* <div className="bg-black  border"><p className="flex gap-[5px]">{nameOfCurrentPath}</p></div> */}


      <div className='bg-[#EFEFF0] rounded mr-[20px] p-[15px]'>
        <Bell className="w-6 h-6  text-[#16151C]" />
      </div>


      <div className=''>
        <Image src="/imgv2.png" alt="img" width={60} height={60} />
      </div>


    </div>
  )
}

export default Navbar


