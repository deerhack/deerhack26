import { ReactElement } from "react";
import {
  cabinetBlack,
  cabinetBold,
  cabinetExtraBold,
  cabinetMedium,
  cabinetRegular,
  satoshiRegular,
} from "@/app/utils/fonts";

export default function CardLight({
  title,
  description,
  pgNo,
  svg,
  bordercolour=false,
}: {
  title: string;
  description: string;
  pgNo: string;
  svg: ReactElement;
  bordercolour?:boolean;
}) {
  const borderClass = bordercolour ? "third-border-background" : "primary-border-background";
  return (
    <div className={`${borderClass} lg:w-[32.93rem] lg:h-[18.37rem] md:w-[36rem] w-full min-h-[17.93rem] h-fit relative justify-start gap-5`}>
      <div className=" new-gradient-background w-full h-full rounded-[1.875rem] flex flex-col px-12 gap-7 justify-center items-start">
        <div>
          <div
  className={`${cabinetExtraBold.className} text-transparent bg-clip-text lg:text-[2rem] text-[1.5rem] w-[10.69rem] md:w-[18.72rem] sm:leading-[2rem] md:leading-[2.75rem] pb-[1.5rem] md:pb-0 font-extrabold z-10 md:mb-[1.5rem]`}
  style={{
    background: "linear-gradient(155.54deg, #CEA33D 30.29%, #6633CC 97.7%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  {title}
</div>
        <div className="flex flex-row items-left lg:gap-7 gap-10 h-[70%] md:h-auto  md:flex-row  md:items-center">
          <div
            className={`${satoshiRegular.className} text-white w-[16.72rem] md:w-[19.51rem] lg:w-[21rem] lg:h-[6rem] text-[1rem] font-medium md:text-justify pr-7 z-10 pt-[1.5rem] md:pt-0 lg:pt-0`}
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
