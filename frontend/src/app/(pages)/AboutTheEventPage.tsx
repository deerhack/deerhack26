"use client";
import React, { useRef } from "react";
import AboutTheEventCards from "../sections/AboutTheEvent/AboutTheEventCards";
import { cabinetExtraBold } from "@/fonts";
import Laptop from "@/app/assets/icons/Laptop";
import CoffeCup from "@/app/assets/icons/CoffeeCup";
import DarinCup from "@/app/assets/icons/DarinCup";
import Guitar from "@/app/assets/icons/Guitar";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import DarinCupPhone from "../assets/icons/DarinCupPhone";
import AboutVine from "../assets/icons/AboutVine";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const allIcons = gsap.utils.toArray<HTMLElement>(
        ".phone-event-icon, .event-icon",
      );

      allIcons.forEach((icon) => {
        const isMobile = window.innerWidth < 1280;
        const targetRotate =
          isMobile && icon.classList.contains("phone-event-icon") ? -15 : 0;

        gsap.fromTo(
          icon,
          { x: -600, rotate: -180, opacity: 0 },
          {
            x: 0,
            rotate: targetRotate,
            duration: 1,
            opacity: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: icon,
              start: isMobile ? "top 90%" : "top 95%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          },
        );
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      const tl_ph = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      tl_ph.fromTo(
        ".darin-anim-ph",
        { yPercent: 100, rotate: 20, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
      );
      tl.fromTo(
        ".darin-anim",
        { yPercent: 100, rotate: 20, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="relative overflow-hidden">
      <AboutVine className="w-[102px] h-[232px] z-30 absolute top-[2px] lg:-top-[10%] lg:w-[189px] lg:h-[429px] right-0" />
      <Laptop
        height={306}
        width={354}
        className="phone-event-icon z-30 lg:event-icon absolute bottom-[120px] md:bottom-[7%] md:left-[28px] lg:-left-[5px] lg:bottom-[8%] w-[137px] h-[118px] md:w-[200px] md:h-[200px] lg:w-[354px] lg:h-[306px]"
      />
      <CoffeCup
        height={170}
        width={124}
        className="z-30 md:z-0 lg:z-30 phone-event-icon md:event-icon absolute bottom-[230px] md:bottom-[22.5%] lg:left-[38px] lg:bottom-[38%] w-[48px] h-[56px] md:w-[80px] md:h-[100px] lg:w-[124px] lg:h-[170px]"
      />

      {/* For Large Screens */}
      <DarinCup
        height={843}
        width={424}
        className="darin-anim absolute z-30 -bottom-[100px] right-[-150px] hidden lg:block"
      />
      {/* For Phone  Screens */}
      <DarinCupPhone className="darin-anim-ph absolute z-30 right-0 bottom-[50px] block lg:hidden" />

      <div className="pb-[280px] pt-[100px]">
        <h1
          className={`${cabinetExtraBold.className} mb-[3rem] headings lg:text-[55px]`}
        >
          About The Event
        </h1>
        <AboutTheEventCards />
      </div>

      <Guitar
        height={381}
        width={358}
        className="phone-event-icon lg:event-icon absolute left-[95px] bottom-[110px] md:bottom-[65px] md:left-[160px] lg:bottom-[-25px] lg:left-[200px] z-30 pointer-events-none w-[138px] h-[147px] lg:h-[381px] lg:w-[358px] md:h-[250px] md:w-[250px]"
      />
    </div>
  );
}
