import React, { useState } from "react";
import TextHeader from "../components/TextHeader";

const data = [
  {
    id: 1,
    name: "UPS",
    url: "/public/product image/UPS/ups11.jpg",
  },
  {
    id: 2,
    name: "UPS",
    url: "/public/product image/UPS/ups22.jpg",
  },
  {
    id: 3,
    name: "UPS",
    url: "/public/product image/UPS/ups_pro.jpg",
  },
  {
    id: 4,
    name: "Driver And Motors",
    url: "/public/product image/DRIVES AND MOTORS/drive_and_motors.jpg",
  },
  {
    id: 5,
    name: "Metering Solution",
    url: "/public/product image/METERING SOLUTION/after market1.jpg",
  },
  {
    id: 6,
    name: "Metering Solution",
    url: "/public/product image/METERING SOLUTION/after market2.jpg",
  },
  {
    id: 7,
    name: "Metering Solution",
    url: "/public/product image/METERING SOLUTION/after market3.jpg",
  },
  {
    id: 8,
    name: "Metering Solution",
    url: "/public/product image/METERING SOLUTION/after market5.jpg",
  },
  {
    id: 9,
    name: "Metering Solution",
    url: "/public/product image/METERING SOLUTION/market solution2.jpg",
  },
  {
    id: 10,
    name: "PLC",
    url: "/public/product image/PLC/plc1.jpg",
  },
  {
    id: 11,
    name: "PLC",
    url: "/public/product image/PLC/plc11.jpg",
  },
  {
    id: 12,
    name: "PLC",
    url: "/public/product image/PLC/plc22.jpg",
  },
  {
    id: 13,
    name: "Batteries",
    url: "/public/product image/BATTERIES/b1.jpg",
  },
  {
    id: 14,
    name: "Batteries",
    url: "/public/product image/BATTERIES/b2.jpg",
  },
  {
    id: 15,
    name: "Batteries",
    url: "/public/product image/BATTERIES/b3.jpg",
  },
];

const buttons = [
  "Show All",
  "UPS",
  "Driver And Motors",
  "Metering Solution",
  "PLC",
  "Batteries",
];

const Product = () => {
  const [images, setImages] = useState(data);
  const [activeButton, setActiveButton] = useState("Show All");

  const filterImage = (name) => {
    setActiveButton(name);
    if (name === "Show All") {
      console.log("In the show all");
      setImages(data);
    } else {
      const clickedImage = data.filter((element) => {
        return element.name === name;
      });
      setImages(clickedImage);
    }
  };

  return (
    <div className="w-full h-min pt-28">
      <TextHeader text={"Product"} />

      {/* Buttons */}

      <div className="max-w-screen-xl px-5 m-auto  mt-10 mb-20 sm:px-4 md:px-1 w-full">
        <div className="w-full flex gap-5 flex-wrap">
          {buttons.map((element, index) => (
            <button
              onClick={() => filterImage(element)}
              className={`px-2 cursor-pointer py-1 text-orange-600 font-medium ${
                activeButton === element ? "bg-orange-600 text-white " : ""
              } mb-2`}
            >
              {element}
            </button>
          ))}
        </div>

        {/* Products Images */}

        <div className="w-full grid grid-cols-1 gap-8 my-10 md:grid-cols-2 lg:grid-cols-3 overflow-x-hidden">
          {images.map((element) => {
            const { url, name, id } = element;
            return <img className="w-full h-full" src={url} alt={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
