// import React, { useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = ({ data, link = "#" }) => {
  return (
    <div className="w-full flex flex-col ">
      {data.map((text, index) => (
        <div
          key={index}
          onClick={() => scrollToSection(who)}
          className="flex gap-1 py-3 w-[95%] cursor-pointer border-b hover:bg-zinc-200 border-zinc-300"
        >
          <IoMdArrowDropright />
          <NavLink
            to={link}
            className={({ isActive }) => {
              return `font-['open_sans'] text-sm ${
                isActive ? "font-thin " : " font-semibold"
              } capitalize text-zinc-600 `;
            }}
          >
            {text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
