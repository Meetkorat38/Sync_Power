import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LearnMore = () => {
  return (
    <NavLink to="/about">
      <div className="flex items-center gap-2 cursor-pointer">
        <h5 className=" font-['open_sans'] text-orange-600 font-light font-md">
          Learn More{" "}
        </h5>
        <FaLongArrowAltRight color="rgb(249 115 22)" />
      </div>
    </NavLink>
  );
};

export default LearnMore;
