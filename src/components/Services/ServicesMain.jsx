import React, { useLayoutEffect, useRef } from "react";
import LearnMore from "../utils/LearnMore";
import gsap from "gsap";

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

const ServicesMain = () => {
  const animate = useRef(null);
  useLayoutEffect(() => {
    const animateElement = animate.current.children;
    console.log(animateElement);
    gsap.from(animateElement, {
      yPercent: 100,
      opacity: 0,
      delay: 0.3,
      duration: 0.5,
      stagger: 0.6,
    });
  }, []);
  return (
    <div ref={animate}>
      {servicesData.map((data, index) => (
        <div key={index} className={`flex gap-8 w-full mt-10 mr-8 mb-3`}>
          <img className="h-16 w-16" src={data.img} alt="UPS" />
          <div>
            <h1 className="font-extralight text-zinc-900 font-['open_sans'] text-2xl">
              {data.name}
            </h1>
            <p className="text-justify w-full font-['open_sans']  text-zinc-700 text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] font-light my-4">
              {data.description}
            </p>
            <LearnMore />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesMain;
