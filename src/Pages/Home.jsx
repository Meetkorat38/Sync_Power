import React from "react";
import Slider from "../components/Slider";
import HomeServices from "../components/HomeServices";
import Who from "../components/Who";
import Partners from "../components/Partners";

const Home = () => {
  const imagesURL = [
    {
      url: "https://www.sync-power.com/jpg/switchgear_maintenance_retrofits.jpg",
    },
    {
      url: "https://www.sync-power.com/jpg/banner1.jpg",
    },
    {
      url: "https://www.sync-power.com/jpg/ups_batries.jpg",
    },
  ];

  return (
    <div className="font-['open_sans']">
      <Slider
        images={imagesURL}
        hight={"md:h-[84vh]"}
        smallScreen={"h-[40vh]"}
      />
      <Who />
      <HomeServices />
      <Partners home={true} />
    </div>
  );
};

export default Home;
