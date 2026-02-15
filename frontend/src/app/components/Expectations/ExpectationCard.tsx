"use client";
import { ReactElement } from "react";
import { cabinetBlack, cabinetRegular, cabinetBold } from "@/app/utils/fonts";

export default function ExpectationCard({
  svg,
  title,
  description,
  index,
  isActive,
}: {
  svg?: ReactElement;
  title?: string;
  description?: string;
  index: number;
  isActive: boolean;
}): ReactElement {
  return (
    <div >
      <div
        className={`hover:cursor-pointer w-[85vw] sm:w-[70vw] lg:w-[35rem] 
          border-grape hover:border-[6px]  px-4 py-6
        border-[2px]  rounded-lg sm:rounded-xl flex flex-row items-center
        gap-5 lg:gap-8 expectation_root h-fit ${
          isActive ? "bg-grape lg:h-[205px] h-[165px] items-start" : "bg-dark-purple"
        } transition-all duration-300 transform origin-center`}
      >
       
        <div className={` flex items-start w-8  sm:w-10 h-full `}>{svg}</div>
       
        <div className="flex flex-col gap-2 sm:gap-4 h-full">
          <p
            className={`text-white ${cabinetBold.className} 
            text-base sm:text-lg lg:text-2xl `}
          >
            {title}
          </p>
          <p
            className={`text-white ${cabinetRegular.className} 
            text-xs sm:text-sm md:text-lg  expectation_description ${
              isActive ? "block" : "hidden"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}