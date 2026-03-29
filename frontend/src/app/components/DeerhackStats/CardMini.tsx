import { cabinetBold } from "@/app/utils/fonts";
import { ReactElement } from "react";
import CountUpAnimation from "../CountUp/CountUpAnimation";

export default function CardMini({
  svg,
  title,
  numbers,
  customClass,
  noBorder,
}: {
  svg: ReactElement;
  title: string;
  numbers: number;
  customClass?: string;
  noBorder?: boolean;
}) {
  return (
    <div
      className={`
        w-80 lg:w-[24rem] h-36 lg:h-[10.5rem]
        rounded-2xl px-8 pt-4 pb-8
        flex flex-col justify-between
        ${customClass ?? 'card-background-gradient'}
      `}
      style={noBorder ? { border: 'none' } : { border: '1px solid rgba(245,193,68,1)' }}
    >
      <div>{svg}</div>
      <div className="flex justify-between items-baseline">
        <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl`}>
          {title}
        </p>
        <CountUpAnimation
          target={numbers}
          isExtra={false}
          className="text-[45px] text-[rgba(245,193,68,1)]"
          time={4}
        />
      </div>
    </div>
  );
}