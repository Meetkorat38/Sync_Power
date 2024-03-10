import React from "react";
import TextHeader from "../components/TextHeader";
import ServicesContact from "../components/ServicesContact";
import ServicesSidebar from "../components/ServicesSidebar";
import ServicesMain from "../components/ServicesMain";
import { Outlet } from "react-router-dom";

const data = [
  { name: "Overview", link: "/services" },
  { name: "UPS", link: "/services/ups" },
  { name: "ATS", link: "/services/ats" },
  { name: "Circuit Breakers", link: "/services/circuit-breaker" },
  { name: "Switchgear", link: "/services/switchgear" },
];

const Services = () => {
  return (
    <div className="w-screen h-min pt-28 ">
      <TextHeader text={"Services"} />
      <div className="max-w-screen-xl px-4 m-auto h-full flex lg:flex-row flex-col items-start gap-8  md:gap-16">
        <div className="w-full lg:w-[20%] h-min pt-8 z-10 mb-4">
          <ServicesSidebar data={data} />
          <ServicesContact />
        </div>
        <div className="w-full lg:w-[80%] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Services;
