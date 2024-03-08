import React from "react";
import LearnMore from "./LearnMore";

const HomeServicesComponent = ({ data, width }) => {
  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          className={`flex gap-8 w-full sm:w-[100%] mt-10 mr-8 mb-3`}
        >
          <img className="h-16 w-16" src={data.img} alt="UPS" />
          <div>
            <h1 className="font-extralight text-zinc-900 font-['open_sans'] text-2xl">
              {data.name}
            </h1>
            <p className="text-justify w-full font-['open_sans']  text-zinc-700 text-[3vw] sm:text-[1vw] font-light my-4">
              {data.description}
            </p>
            <LearnMore />
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeServicesComponent;
