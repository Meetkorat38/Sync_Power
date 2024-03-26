import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ServicesSidebar = ({ data }) => {
  return (
    <div className="w-full flex flex-col ">
      {data.map((data, index) => (
        <NavLink
          key={index}
          to={data.link}
          className={({ isActive }) =>
            `flex font-['open_sans'] gap-1  text-sm ${
              isActive ? "font-semibold " : " font-thin"
            } capitalize text-zinc-600  py-3 w-[95%] cursor-pointer border-b hover:bg-zinc-200 border-zinc-300`
          }
        >
          <IoMdArrowDropright />
          <div>{data.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default ServicesSidebar;
