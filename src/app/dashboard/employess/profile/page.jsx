"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Form from "../../../../../components/Form/Form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProfile } from "@/app/actions/apis/axios";

export default function Profile() {
  const path = usePathname();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the token from the cookie
        const token = Cookies.get('token');
        if (!token) throw new Error("Token not found");

        // Fetch the data
        const response = await getProfile(token);
        setData(response.data);
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error during fetching data:", error);
        setError(error.response?.data?.error || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const nameOfCurrentPath = path
    .split("/dashboard")[1]
    .split("/")
    .map((item) => {
      if (!isNaN(item)) return "";
      return item
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    })
    .filter((item) => item !== "")
    .join(" > ");

  return (
    <>
      {loading ? <p>Loading...</p> : ""}
      {error && <p className="text-red-500">{error}</p>}
      <div className="pt-[132px] ml-[40px] pr-[70px]">
        <div>
          <p className="flex gap-[5px]">{nameOfCurrentPath}</p>
        </div>

        <div className="flex mt-[30px]">
          <div className="flex">
            <div>
              <Image
                src={data.image}
                alt="Profile Image"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col ml-[20px]">
              <p className="text-[30px]">{data.name || "Name not available"}</p>
              <div className="flex mt-[20px]">
                <Image
                  src="/briefcas.svg"
                  alt="Bio Icon"
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
                <span className="ml-[10px]">{data.bio || "Bio not available"}</span>
              </div>
              <div className="flex mt-[20px]">
                <Image
                  src="/gmail.svg"
                  alt="Email Icon"
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
                <span className="ml-[10px]">{data.email || "Email not available"}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ml-[170px] mt-[40px] ">
            <div className="flex text-white bg-[#242223] p-[10px] rounded-xl ">
              <Image
                src="/edit.svg"
                alt="Edit Icon"
                width={24}
                height={24}
                className="rounded-lg"
              />
              <button>Edit Profile</button>
            </div>
          </div>
        </div>
        <hr className="mt-[20px]" />
        <div className="flex gap-[20px] mt-[20px]">
          <div className="flex flex-col">
            <div className="flex">
              <Image
                src="/user-icon.svg"
                width={24}
                height={24}
                alt="Personal Information Icon"
                className="text-red-500"
              />
              <span className="ml-[10px] text-[16px] font-bold text-red-500">Personal Information</span>

            </div>

            <hr className="w-full h-[5px] bg-red-500" />
          </div>
          <div className=" flex">
            <Image
              src="/Vector.svg"
              width={24}
              height={24}
              alt="Personal Information Icon"
              className="text-red-500"
            />
            <span className="ml-[10px] ">Professional Information</span>
          </div>
          <div className=" flex">
            <Image
              src="/document-text.svg"
              width={24}
              height={24}
              alt="Personal Information Icon"
              className="text-red-500"
            />
            <span className="ml-[10px] ">Documents</span>
          </div>
          <div className=" flex">
            <Image
              src="/lock.svg"
              width={24}
              height={24}
              alt="Personal Information Icon"
              className="text-red-500"
            />
            <span className="ml-[10px] ">Account Access</span>
          </div>

        </div>
        <Form data={data} />
      </div>
    </>
  );
}
