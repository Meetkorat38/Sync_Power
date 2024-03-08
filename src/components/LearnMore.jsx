import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LearnMore = () => {
  return (
    <div className="flex items-center gap-2">
      <h5 className=" font-['open_sans'] text-orange-600 font-light font-md">
        Learn More{" "}
      </h5>
      <FaLongArrowAltRight color="rgb(249 115 22)" />
    </div>
  );
};

export default LearnMore;
