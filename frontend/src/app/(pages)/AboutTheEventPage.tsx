import React from "react";
import AboutTheEventCards from "../sections/AboutTheEvent/AboutTheEventCards";
import { cabinetExtraBold, cabinetMedium } from "@/fonts";
import Image from "next/image";
import about_right from "@/app/assets/images/AboutRight.svg";
import about_left from "@/app/assets/images/AboutLeft.svg";
import Laptop from "@/app/assets/icons/Laptop";
import CoffeCup from "@/app/assets/icons/CoffeeCup";
import DarinCup from "@/app/assets/icons/DarinCup";
import Guitar from "@/app/assets/icons/Guitar";

export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden overflow-y-hidden">
        
        <Laptop
          height={306.0217203841847}
          width={354.206822415178}
          className="absolute -left-[5px] bottom-[8%]"
        />
        <CoffeCup
          height={170.8614890732017}
          width={124.23594985464511}
          className="absolute left-[38px] bottom-[38%]"
        />
        
        <DarinCup
          height={600}
          width={420}
          className="absolute right-[-160px] bottom-[-10px]"
        />

        <div className="pb-[280px] pt-[100px]">
          <h1
            className={`${cabinetExtraBold.className} mb-[3rem] headings lg:text-[55px]`}
          >
            About The Event
          </h1>

          <AboutTheEventCards />
        </div>

        <Guitar
          height={381.94}
          width={358.77}
          className="absolute bottom-[-25px] left-[200px] z-50 pointer-events-none"
        />
      </div>
    </>
  );
}
