import { cabinetBold } from "@/app/utils/fonts";
import { ReactElement } from "react";
import CountUpAnimation from "../CountUp/CountUpAnimation";

export default function CardMini({
  svg,
  title,
  numbers,
  customClass,
  border,
  className = "",
  isExtra = false,
}: {
  svg: ReactElement;
  title: string;
  numbers: number;
  customClass?: string;
  border?: boolean;
  className?: string;   // ← pass any height/sizing class from outside
  isExtra?: boolean;
}) {
  return (
    <div
      className={`
        w-80 lg:w-[24rem]
        rounded-2xl px-8 pt-4 pb-8
        flex flex-col justify-between
        ${customClass ?? 'card-background-gradient'}
        ${border ? "border-[rgba(245,193,68,1)] border-solid border-2" : ""}
        ${className}
      `}
    >
      <div>{svg}</div>
      <div className="flex justify-between items-baseline">
        <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl`}>
          {title}
        </p>
        <CountUpAnimation
          target={numbers}
          isExtra={isExtra}
          className="text-[45px] text-[rgba(245,193,68,1)]"
          time={4}
        />
      </div>
    </div>
  );
}