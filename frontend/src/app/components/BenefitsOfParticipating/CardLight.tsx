import { ReactElement } from "react";
import {
  cabinetBlack,
  cabinetBold,
  cabinetExtraBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";

export default function CardLight({
  title,
  description,
  pgNo,
  svg,
}: {
  title: string;
  description: string;
  pgNo: string;
  svg: ReactElement;
}) {
  return (
    <div className="secondary-gradient-background lg:w-[32.93rem] lg:h-[18.37rem] md:w-[36rem] w-full min-h-[17.93rem] h-fit rounded-[1.875rem] p-[0.1875rem] relative justify-start gap-5">
      <div className=" w-full h-full rounded-[1.875rem] flex flex-col px-12 gap-7 justify-center items-start">
        <div>
        <div
          className={`${cabinetExtraBold.className} text-primary-gradient-color lg:text-[2rem] text-[1.5rem] w-[12rem] md:w-[18.72rem] leading-0 md:leading-[2.75rem] pb-0 font-extrabold z-10  md:mb-[1.7rem]`}
        >
          {title}
        </div>
        <div className="flex flex-row items-left lg:gap-7 gap-10 h-[70%] md:h-auto  md:flex-row  md:items-center">
          <div
            className={`${cabinetRegular.className} text-white w-[16.72rem] md:w-[19.51rem] lg:w-[21rem] lg:h-[6rem] text-[1rem] font-medium md:text-justify pr-7 z-10 pt-[1.5rem] md:pt-0 lg:pt-0`}
          >
            {description}
          </div>

        </div>
        
          <div className="absolute right-16 md:w-[10.749rem] md:h-[9.764rem] lg:bottom-24 bottom-24 z-0">
            {svg}
          </div>

          <div className="text-gray-400 text-[0.97rem] md:text-2xl font-bold absolute bottom-6 right-8">
            {pgNo}
          </div>
        </div>
      </div>
    </div>
  );
}
