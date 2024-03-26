import React from "react";
import LearnMore from "../utils/LearnMore";

const Who = () => {
  return (
    <div className="w-full py-8 ">
      <div className="max-w-screen-xl px-4 md:px-0 gap-5 m-auto md:flex-row flex-col bg-white flex py-16 justify-around">
        <h1 className="md:w-1/3  w-full font-thin text-3xl font-['open_sans'] text-zinc-800">
          Who We Are
        </h1>
        <div className="md:w-[66%] w-full ">
          <p className="font-['open_sans'] mb-5 text-justify sm:text-[1.2vw] md:text-[1.5vw] text-[3vw] text-zinc-500 leading-6 sm:leading-7 font-thin tracking-tight">
            Sync-Power Services Inc. is a one-stop shop for product and full
            service option. We are engineering and service company for critical
            and emergency power management. We provides service and solutions
            for emergency power generation, distribution, protection and
            controls.
          </p>
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default Who;
