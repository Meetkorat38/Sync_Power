import React from "react";
import TextHeader from "../components/TextHeader";
import Sidebar from "../components/Sidebar";
import ServicesContact from "../components/ServicesContact";
import HomeServicesComponent from "../components/HomeServicesComponent";

const data = ["Overview", "UPS", "ATS", "Circuit Breakers", "Switchgear"];

const servicesData = [
  {
    img: "https://www.sync-power.com/jpg/ups_icon.png",
    name: "UPS",
    description:
      "Uninterruptible Power Supply Services from Sync-Power will evaluate the condition of your equipment and determine the most cost-effective and manageable solution to guarantee its overall performance, safety and reliability.",
  },
  {
    img: "https://www.sync-power.com/jpg/ats_icon.png",
    name: "ATS",
    description:
      "Sync-Power Services offers the most reliable and professional services for any make and model of ATS startup, commissioning, repair, maintenance and load bank testing. Our team is available 24/7.We follow most ANSI, NFPA and NEMA standards.ATS Inspection and Clean Interior of the System.",
  },
  {
    img: "https://www.sync-power.com/jpg/circuit_breakers1.png",
    name: "Circuit Breakers",
    description:
      "Sync-Power Services offers the most reliable and professional services for any make and model of Breaker retrofit, repair, maintenance and load bank testing. Our team is available 24/7.We follow most ANSI, NFPA and NEMA standards.Record, Measure and Calibration of spring tension/mechanism through manual operation of breaker charge, open and close.",
  },
  {
    img: "https://www.sync-power.com/jpg/switchgear.png",
    name: "Switchgear",
    description:
      "Sync-Power Services offers the most reliable and professional services for any make and model of Breaker retrofit, repair, maintenance and load bank testing. Our team is available 24/7.We follow most ANSI, NFPA and NEMA standards.Controls Inspection, clean interior and exterior of the system.",
  },
];

const Services = () => {
  return (
    <div className="w-screen h-min pt-28 ">
      <TextHeader text={"Services"} />
      <div className="max-w-screen-xl px-4 m-auto h-full flex sm:flex-row flex-col items-start gap-8 sm:gap-16">
        <div className="w-full sm:w-[20%] h-min pt-8 z-10 mb-4">
          <Sidebar data={data} />
          <ServicesContact />
        </div>
        <div className="w-full sm:w-[80%] ">
          <HomeServicesComponent data={servicesData} width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default Services;
