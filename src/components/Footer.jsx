import React from "react";
import { BsSend } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#e9eff2] pt-10 py-16">
      <div className="py-8 max-w-screen-xl m-auto  sm:px-4 md:px-1 px-4  flex sm:flex-row flex-col gap-8 sm:gap-0 justify-between border-b border-zinc-200">
        <img
          className="sm:h-28 h-24 sm:w-28 w-24"
          src="https://www.sync-power.com/jpg/logo-construction2.png"
          alt=""
        />

        <div className="navigation w-[20%] ">
          <h1 className="text-thin text-xl sm:text-2xl font-['open_sans'] text-zinc-700 mb-8">
            Navigation
          </h1>
          <div className="flex sm:flex-row flex-col justify-between">
            <div className="flex flex-col gap-5 mb-5 sm:mb-0">
              {["Home", "About us", "Services"].map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-sm sm:text-base font-['open_sans'] text-thin text-zinc-600 ]"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {["Product", "Solution", "Contact"].map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-sm sm:text-base font-['open_sans'] text-thin text-zinc-600 ]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="newsletter w-full sm:w-[45%]">
          <h1 className="text-thin text-xl sm:text-2xl font-['open_sans'] text-zinc-700 mb-6">
            Newsetter
          </h1>

          <div className="flex mb-3">
            <input
              className="py-2 px-2 outline-none border border-zinc-300 w-full font-xs font-['open_sans'] text-zinc-800 capitalize tracking-tight leading-none "
              type="text"
              placeholder="Email address"
            />
            <div className="py-2 px-2 cursor-pointer w-[10%] flex items-center border border-zinc-300 justify-center">
              <BsSend />
            </div>
          </div>

          <div className="flex gap-10 items-center my-8">
            <div className=" flex items-center gap-3">
              <IoIosCall />
              <h6 className="text-xs font-['open_sans'] text-thin text-zinc-700">
                +1 630-855-9646
              </h6>
            </div>
            <div className=" flex items-center gap-3">
              <TbDeviceLandlinePhone />
              <h6 className="text-xs font-['open_sans'] text-thin text-zinc-700">
                1-630-981-2409
              </h6>
            </div>
          </div>

          <div className="flex gap-10 items-center mb-2">
            <div className=" flex items-center gap-3">
              <MdOutlineMail />
              <h6 className="text-xs font-['open_sans'] text-thin text-zinc-800">
                contact@sync-power.com
              </h6>
            </div>
            <div className=" flex items-center gap-3">
              <MdOutlineMail />
              <h6 className="text-xs font-['open_sans'] text-thin text-zinc-800">
                sales@sync-power.com
              </h6>
            </div>
          </div>
        </div>
      </div>
      <h1 className="w-full text-center text-zinc-600 pt-16 font-['open_sans'] text-xs">
        © Copyright 2023.|All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
