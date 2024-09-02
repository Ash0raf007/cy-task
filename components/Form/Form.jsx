
import React from 'react';

const Form = ({ data }) => {

  return (

    <>
      <div className="flex  justify-between mt-[20px]">

        <div className="flex flex-col">
          <p className='text-[#A2A1A8] text-[14px]'>First Name</p>
          <p className="text-[16px]">{data.first_name}</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Mobile</p>
          <p className="text-[16px]">{data.phone}</p>

          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Date of Birth</p>
          <p className="text-[16px]">null</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Gender</p>
          <p className="text-[16px]">null</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Address</p>
          <p className="text-[16px]">null</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>State</p>
          <p className="text-[16px]">null</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Work’s hours</p>
          <p className="text-[16px]">null</p>
        </div>


        <div className="flex flex-col">
          <p className='text-[#A2A1A8] text-[14px]'>Last Name</p>
          <p className="text-[16px]">{data.last_name}</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Email Address</p>
          <p className="text-[16px]">{data.email}</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Marital Status</p>
          <p className="text-[16px]">null</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Nationality</p>
          <p className="text-[16px]">null</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>City</p>
          <p className="text-[16px]">null</p>
          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Zip code</p>
          <p className="text-[16px]">null</p>

          <p className='text-[#A2A1A8] text-[14px] mt-[10px]'>Salary/hours</p>
          <p className="text-[16px]">null</p>
        </div>

        <div className="flex flex-col justify-end">
          <p className='text-[#EE232F] text-[14px]'>Total Salary</p>
          <p className="text-[16px]">null</p>
        </div>
      </div>

    </>
  );
};

export default Form;