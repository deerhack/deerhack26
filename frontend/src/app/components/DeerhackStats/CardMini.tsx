import { cabinetBold, cabinetRegular } from "@/app/utils/fonts";
import { ReactElement } from "react";
import CountUpAnimation from "../CountUp/CountUpAnimation";

export default function CardMini({
  svg,
  title,
  numbers,
}: {
  svg: ReactElement;
  title: string;
  numbers: number;
}) {
  return (
    <div className=" card-background-gradient w-80 lg:w-[24rem] h-36 lg:h-[10.5rem]  rounded-2xl px-8 pt-4 pb-8 flex  justify-between items-end border border-[rgba(245,193,68,1)]">
      <div className="flex flex-col justify-between gap-5">
        {svg}
        <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl`}>
          {title}
        </p>
      </div>
      {/* <p className={`${cabinetRegular.className} text-[45px] text-white`}>
        {numbers}
      </p> */}
      <CountUpAnimation target={numbers} isExtra={false} className="text-[45px] text-[rgba(245,193,68,1)]" time={4}/>
    </div>
  );
}
