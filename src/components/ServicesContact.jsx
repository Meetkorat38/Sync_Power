import React from "react";

const ServicesContact = ({ title, paragraph }) => {
  return (
    <div className="w-full h-full mt-10">
      <h1 className='capitalize text-2xl sm:text-2xl font-thin  font-["open_sans"] text-zinc-900'>
        {title}
      </h1>
      <p className='font-["open_sans"] text-zinc-600 text-sm my-6 leading-6'>
        {paragraph}
      </p>
      <form>
        {/* Name */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Your Name*
        </label>
        <input
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          type="text"
        />
        {/* Email */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Your email adresses*
        </label>
        <input
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          type="email"
        />
        {/* Subject */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Subject*
        </label>
        <input
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          type="text"
        />
        {/* Messages */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Messages*
        </label>
        <textarea
          name="textarea"
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          cols="30"
          rows="5"
        ></textarea>
      </form>
      <button className="md:px-4 md:py-2 px-3 py-1 w-max h-min font-['open_sans'] text-white bg-orange-600 rounded hover:bg-white border border-orange-600 hover:text-orange-600 font-extrabold">
        Send Message
      </button>
    </div>
  );
};

export default ServicesContact;
