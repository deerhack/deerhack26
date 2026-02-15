import React from "react";
import AboutTheEventCards from "../sections/AboutTheEvent/AboutTheEventCards";
import { cabinetExtraBold } from "@/fonts";
import Image from "next/image";
import about_right from "@/app/assets/images/AboutRight.svg";
import about_left from "@/app/assets/images/AboutLeft.svg";

const AboutTheEventPage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={about_right}
          alt="right leaf"
          height={400}
          className="absolute top-0 right-0 xl:block hidden"
        />
        <Image
          src={about_left}
          alt="left leaf"
          height={250}
          className="absolute top-1/2 transform -translate-y-1/2 lg:block hidden"
        />
        <div className="pb-20 pt-[100px]">
          <h1 className={`${cabinetExtraBold.className} mb-[3rem] headings lg:text-[]`}>
            About The Event
          </h1>
          <AboutTheEventCards />I
        </div>
      </div>
    </>
  );
};

export default AboutTheEventPage;
