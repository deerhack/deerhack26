import { ReactElement } from "react";
import {
  cabinetBlack,
  cabinetBold,
  cabinetExtraBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";

export default function CardDark({
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
    <div className=" primary-border-background lg:w-[32.93rem] lg:h-[18.37rem] md:w-[36rem] min-h-[17.93rem] h-fit w-full  rounded-[1.875rem] p-[0.1875rem] relative ">
      <div className=" new-gradient-background w-full h-full rounded-[1.875rem] flex flex-col px-12 gap-[21px] justify-center relative">
        <div>
          <div
            className={`${cabinetExtraBold.className} text-primary-gradient-color lg:text-[2rem] text-[1.5rem] w-[10.69rem] md:w-[18.72rem] sm:leading-[2rem] md:leading-[2.75rem] pb-[1.5rem] md:pb-0 font-extrabold z-10 md:mb-[1.5rem]`}
          >
            {title}
          </div>
          <div className="flex flex-row items-left gap-10 lg:gap-7 h-[70%] md:h-auto  md:flex-row  md:items-center">
            <div
              className={`${cabinetRegular.className} text-white w-[16.72rem] md:w-[19rem] lg:w-[17.9rem] lg:h-[6rem] text-[1rem] font-medium md:text-justify pr-7 z-10 `}
            >
              {description}
            </div>
          </div>

          <div className="absolute right-24 md:w-[10.749rem] md:h-[9.764rem] lg:bottom-24 bottom-20 z-0">
            {svg}
          </div>
          <div className="text-gray-400 text-[0.97rem] md:text-2xl font-bold absolute bottom-6 right-9 ">
            {pgNo}
          </div>
        </div>
      </div>
    </div>
  );
}
