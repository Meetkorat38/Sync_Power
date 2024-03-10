import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = ({ hight, images, smallScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextIndex = () => {
    const lastSlide = currentIndex === images.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className={`w-full ${smallScreen} ${hight} bg-center bg-cover relative  group`}
    >
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className="w-full h-full bg-cover object-contain  duration-500"
      ></div>

      {/* Left Arrow */}
      <div
        onClick={prevIndex}
        className="absolute  -translate-x-0 top-[50%] translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black hidden group-hover:block "
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        onClick={nextIndex}
        className="absolute  -translate-x-0 top-[50%] translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  hover:bg-black hidden group-hover:block"
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default Slider;
