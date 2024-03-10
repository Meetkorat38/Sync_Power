import React from "react";
import HomeServicesComponent from "./HomeServicesComponent";

const HomeServicesData = [
  {
    img: "https://www.sync-power.com/jpg/ups_icon.png",
    name: "UPS",
    description:
      "Sync-Power Services offers the most reliable and professional services for any make and model of UPS and DC system startup, commissioning, repair, maintenance and load bank testing.",
  },
  {
    img: "https://www.sync-power.com/jpg/ats_icon.png",
    name: "ATS",
    description:
      "Sync-Power Services offers the most reliable and professional services for any make and model of ATS startup, commissioning, repair, maintenance and load bank testing.",
  },
  {
    img: "https://www.sync-power.com/jpg/circuit_breakers1.png",
    name: "Circuit Breakers",
    description:
      "Sync-Power Services offers the most reliable and professional services for any make and model of Breaker retrofit, repair, maintenance and load bank testing.",
  },
  {
    img: "https://www.sync-power.com/jpg/switchgear.png",
    name: "Switchgear",
    description:
      "Sync-Power Services offers the most reliable and professional services for any make and model of Breaker retrofit, repair, maintenance and load bank testing.",
  },
];

const HomeServices = () => {
  return (
    <div className="w-full bg-[#eaeff3] ">
      <div className="max-w-screen-xl m-auto px-4 sm:px-0 py-14">
        <h1 className="md:text-4xl text-2xl text-zinc-600 font-thin mb-5 font-['open_sans']">
          Services
        </h1>
        <div className=" sm:block lg:flex lg:gap-[5%] lg:flex-wrap lg:w-full  ">
          <HomeServicesComponent data={HomeServicesData} width={"sm:w-[45%]"} />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
