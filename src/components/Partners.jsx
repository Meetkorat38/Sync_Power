import React from "react";

const image = [
  {
    url: "https://www.sync-power.com/jpg/logo1.png",
  },
  {
    url: "https://www.sync-power.com/jpg/logo2.png",
  },
  {
    url: "https://www.sync-power.com/jpg/logo3.png",
  },
];

const Partners = ({ home }) => {
  return (
    <div className="w-full py-10 ">
      <div className="max-w-screen-xl m-auto  sm:px-4 md:px-1 px-4">
        <h1 className="text-3xl text-zinc-700 mb-8  font-thin  font-['open_sans']">
          Partners
        </h1>
        <div className="flex flex-col sm:flex-row  justify-between items-center gap-3 ">
          {image.map((image, i) =>
            home ? (
              <img
                key={i}
                className="w-30 h-30 sm:w-[20vw] sm:h-[8vw]"
                src={image.url}
              />
            ) : (
              <img
                key={i}
                className="sm:w-[20vw] sm:h-[5vw] w-30 h-30"
                src={image.url}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Partners;
