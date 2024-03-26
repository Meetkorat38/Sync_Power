import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-20">
      <h1 className='text-[15vw] font-["open_sans"] text-orange-600 font-bold'>
        Oops!
      </h1>
      <h2 className='text-[2vw] mt-5 font-["open_sans"] text-orange-600 font-bold'>
        404 Page Not Founde
      </h2>
      <button
        onClick={() => navigate("/")}
        className="mt-8 font-['open_sans'] bg-orange-500 rounded-md px-3 py-2 text-white font-semibold"
      >
        Back To Home
      </button>
    </div>
  );
};

export default Error;
