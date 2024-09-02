"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = ({ children }) => {
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(true);



  return (
    <>
    <div className="flex">
      <div className="w-[329px] h-[943px] rounded-xl border bg-white ">
      
        <div className="flex justify-center p-4">
          <Image src="/logo.png" width={247} height={158} alt="logo" />
        </div>

<div className="flex justify-center">
        <div className="flex flex-col p-4">
          <div className="flex items-center mb-4">
            <Image src="/akar-icons_dashboard.svg" width={26} height={26} alt="dashboard" />
            <span className="ml-[10px]">Dashboard</span>
          </div>


          <div 
  className={`flex items-center justify-between mt-[20px] cursor-pointer rounded  ${isEmployeesOpen ? 'bg-[#F9EAEB] text-[#EC232B]' : 'bg-white'}`}
  onClick={() => setIsEmployeesOpen((isEmployeesOpen) => !isEmployeesOpen)}
>
  <div className="flex items-center">
  {isEmployeesOpen ? <p className="bg-[#EC232B] w-[5px] h-[25px]"> </p> : ""}
    <Image src="/clarity_employee-group-line.svg"  width={26} height={26} alt="employees" />
    <span className="ml-[10px]">Employees</span>
  </div>

  {isEmployeesOpen ? <ChevronDown /> : <ChevronRight />}
</div>



{isEmployeesOpen && (
  <div className="mt-[20px] ml-[40px]">
          <Link href="/dashboard/employess/profile">

    <div className="flex  cursor-pointer">
      <Image src="/user.svg" width={24} height={24} alt="logo" />
      <span className="ml-[10px]">Profile</span>
    </div>
    </Link>

    <div className="flex  mt-[20px]">
      <Image src="/calendar-check.svg" width={24} height={24} alt="logo" />
      <span className="ml-[10px]">Attendance</span>
    </div>
    <div className="flex  mt-[20px]">
      <Image src="/file.svg" width={24} height={24} alt="logo" />
      <span className="ml-[10px]">Tasks</span>
    </div>
    <div className="flex   mt-[20px]">
      <Image src="/coin-dollar.svg" width={24} height={24} alt="logo" />
      <span className="ml-[10px]">Payroll</span>
    </div>

  </div>
)}

<div className="flex items-center mt-[20px]">
    <Image src="/carbon_task.svg"  width={26} height={26} alt="employees" />
    <span className="ml-[30px]">Holidays</span>
    <ChevronRight />
  </div>

  <div className="flex items-center mt-[20px]">
    <Image src="/icon _wallet_.svg"  width={26} height={26} alt="employees" />
    <span className="ml-[10px]">advanced payment</span>
  </div>

  
        </div>
</div>
    
      </div>
      <div className="">
          {children}
        </div>
    </div>
  
    </>
  );
};



export default Sidebar;
