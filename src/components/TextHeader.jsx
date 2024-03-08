import React from "react";

const TextHeader = ({ text }) => {
  return (
    <div className="w-full bg-[#eaeff3] py-10 mb-10">
      <div className="max-w-screen-xl px-4 m-auto">
        <h1 className=" uppercase text-end font-['open_sans'] text-4xl font-thin text-orange-600">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TextHeader;
