import React from "react";
import Slider from "./Slider";
import AboutWho from "./AboutWho";
import Partners from "./Partners";
import Capability from "./Capability";

const data = [
  {
    url: "https://www.sync-power.com/jpg/aboutus.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/aboutus2.jpg",
  },
];

const AboutMain = () => {
  return (
    <div className="w-full">
      <Slider smallScreen="20vh" hight={"50vh"} images={data} />
      <AboutWho />
      <Partners />
      <Capability />
    </div>
  );
};

export default AboutMain;
