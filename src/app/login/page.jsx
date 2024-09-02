"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { formSubmithundeler } from "../actions/auth/loginAction";

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // Add loading state
  const passwordRef = useRef();

  const showPasswordHandler = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  const cusLogin = async (formData) => {
    setError("");
    setLoading(true);  // Start loading

    const result = await formSubmithundeler(formData);

    setLoading(false);  // End loading

    if (result.error) {
      setError(result.error);
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[189px]">
        <div>
          <Image src="/logo.png" width={225} height={102} alt="logo" />
        </div>

        <form action={cusLogin}>
          <div className="flex flex-col items-center justify-center">
            <div className="mt-[31px]">
              <div className="flex flex-col">
                <label htmlFor="email">email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="nouran@cyparta.com"
                  className="w-[544px] h-[55px] pl-[10px] rounded-xl border bordr-[#333333]"
                />
              </div>

              <div className="flex flex-col mt-[10px]">
                <label htmlFor="password">Password</label>
                <div className="flex w-[544px] h-[55px] rounded-xl border bordr-[#333333]">
                  <input
                    type="password"
                    ref={passwordRef}
                    id="password"
                    required
                    name="password"
                    placeholder="**********"
                    className="w-full pl-[10px] border-none outline-none rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={showPasswordHandler}
                    className="border-none bg-transparent cursor-pointer px-[5px]"
                  >
                    <Image
                      src="/show-password.svg"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {error && (
                <p className="text-red-500 text-[13px] mt-[5px]">{JSON.stringify(error)}</p>
              )}
            </div>
            <div className="w-[445px] h-[56px] bg-[#262626] text-white flex text-center items-center justify-center rounded-lg cursor-pointer mt-[70px]">
              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}  
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
