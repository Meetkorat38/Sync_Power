import React from "react";
import TextHeader from "../components/TextHeader";

const data = [
  {
    image: "https://www.sync-power.com/jpg/upgradation.jpg",
    title: "Upgradation",
    description:
      "Upgradation and modification of switchgear,Upgradation of PLC’s, HMI’s, Automation and Controls.",
  },
  {
    image: "https://www.sync-power.com/jpg/modifications.jpg",
    title: "Modifications",
    description: "Modification of Switchgear Modification of PLC controls.",
  },
];

const Solution = () => {
  return (
    <div className="w-screen h-min pt-28">
      <TextHeader text={"Solution"} />
      <div className="max-w-screen-xl px-5 m-auto  mt-10 mb-20 sm:px-4 md:px-1 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {data.map((element, index) => (
            <div key={index} className="w-full md:w-1/2">
              <img src={element.image} alt="product jpg" />
              <h1 className="font-['open_sans'] text-xl sm:text-2xl font-normal py-5">
                {element.title}
              </h1>
              <p className="text-xs sm:text-base md:text-sm font-['open_sans'] text-zinc-500 ">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
