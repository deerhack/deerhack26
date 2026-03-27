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
      <div className="relative">

    
        <Laptop height={250} width={250} className="absolute left-[30px] bottom-[10%]" />
        <CoffeCup height={100} width={100} className="absolute left-[120px] bottom-[40%]" />
        <DarinCup height={600} width={420} className="absolute right-[-160px] bottom-[-200px]" />

        
        

     
        <div className="pb-20 pt-[100px]">
          <h1 className={`${cabinetExtraBold.className} mb-[3rem] headings lg:text-[55px]`}>
            About The Event
          </h1>

          <AboutTheEventCards />
        </div>

        <Guitar height={200} width={200} className="absolute bottom-0 left-[140px] z-100" />

      </div>
    </>
  );
};
