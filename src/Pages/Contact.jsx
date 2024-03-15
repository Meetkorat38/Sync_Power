import React from "react";
import TextHeader from "../components/TextHeader";
import ServicesContact from "../components/ServicesContact.jsx";
import { RxDrawingPin } from "react-icons/rx";
import { GiPhone } from "react-icons/gi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

const data = [
  {
    icon: <RxDrawingPin color="#E66B4E" />,
    title: "Address:",
    detais: "1959 Seneca Dr, Hanover Park, IL 60133, USA",
  },
  {
    icon: <GiPhone color="#E66B4E" />,
    title: "Phone:",
    detais: "+1 630-379-1819",
  },
  {
    icon: <TbDeviceLandlinePhone color="#E66B4E" />,
    title: "Fax:",
    detais: "1-630-981-2409",
  },
  {
    icon: <MdOutlineMail color="#E66B4E" />,
    title: "Phone:",
    detais: "contact@sync-power.com",
  },
];

const Contact = () => {
  return (
    <div className="w-screen h-min pt-28">
      <TextHeader text={"Contact"} />
      <div className="max-w-screen-xl px-5 m-auto  mt-10 mb-20 sm:px-4 md:px-1 w-full">
        <div className="w-full  mb-10 flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 ">
            <ServicesContact
              title={"Send Us a Message"}
              paragraph={
                "Contact us or give us a call to discover how we can help."
              }
            />
          </div>

          {/* Contact Details */}
          <div className="w-full mt-10 md:w-1/2">
            {/* Heading */}
            <h1 className="font-light text-xl text-black font-['open_sans']">
              Corporate Headquarters
            </h1>
            {/* Map */}
            <div className="py-8">
              <iframe
                className=" w-[360px] sm:w-[450px]  h-[250px] sm:h-[350px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.0865386882026!2d-88.15384243062181!3d41.95106484794402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faa6696548bed%3A0x4cd75ce1cc0ffa44!2s1959%20Seneca%20Dr%2C%20Hanover%20Park%2C%20IL%2060133%2C%20USA!5e0!3m2!1sen!2sin!4v1710488371663!5m2!1sen!2sin"
                // width={450}
                // height={350}
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="zinc-power"
              ></iframe>
            </div>

            {/* Address */}
            <div className="address w-full flex flex-col gap-3">
              {data.map((element, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-center"
                >
                  {element.icon}
                  <div className="w-full font-['open_sans']">
                    <p className="font-normal text-zinc-500 text-sm">
                      <span className="font-semibold mr-2 text-zinc-600">
                        {element.title}
                      </span>
                      {element.detais}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
