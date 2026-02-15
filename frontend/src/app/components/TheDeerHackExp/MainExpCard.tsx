import { ReactElement } from "react";
import {
  cabinetBlack,
  cabinetBold,
  cabinetExtraBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";

export default function MainExpCard({
  svg,
  description,
  bottomText,
  finBottomText,
}: {
  svg: ReactElement;
  description: string;
  bottomText: string;
  finBottomText: string;
}){
    return(
        <div className="exp-gradient-background w-[20.251rem] lg:w-[24.428rem] h-[26rem] lg:h-[29.569rem] rounded-[1.563rem] 
        p-[0.1875rem] relative items-center">
        <div className=" bg-[#1A1130] w-full h-full  rounded-[1.563rem] flex flex-col px-12 pt-9 pb-10 justify-start md:pt-14">

          <div className="flex flex-col h-[70%] md:h-auto  md:flex-row  md:items-center relative left-[-1.2rem] md:left-2">
            <div className="absolute md:top-[-0.5rem] lg:top-[0.5rem] md:right-[0.1rem] lg:right-[0.1rem] ">{svg}</div>
            <div
              className={`${cabinetRegular.className} text-white w-[16.147rem]  lg:w-[19.045rem] h-[8.033rem] lg:h-[10.331rem]
                md:text-[1.1rem] lg:text-[1.25rem] text-justify lg:leading-7 font-[500] absolute top-24 lg:top-[7rem] md:right-[-0.5rem] lg:right-[0.1rem]`}
            >
              {description}
            </div>
            <div className="text-white text-[0.75rem] lg:text-[0.875rem] absolute top-72 md:top-[19rem] lg:top-[21rem] 
            md:right-[10.2rem] lg:right-[12.8rem] lg:font-[500] w-[5.438rem] lg:w-[6.313rem] ">{bottomText}
              <div className="text-gray-500 font-[500]">{finBottomText}</div>
            </div>
          </div>
        </div>
      </div>
    );
}