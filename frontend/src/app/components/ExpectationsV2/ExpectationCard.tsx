"use client";
import { ReactElement } from "react";
import { cabinetBold } from "@/app/utils/fonts";

export default function ExpectationCard({
  svg,
  title,
  description,
  isActive,
}: {
  svg?: ReactElement;
  title?: string;
  description?: string;
  isActive?: boolean;
}): ReactElement {
  return (
    <div
      className={`bg-[#442488] px-8 py-10 rounded-[20px] flex flex-col items-center gap-6 h-full w-full shadow-2xl transition-all duration-500`}
    >
      <div className="flex justify-center items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center">{svg}</div>
        <p className={`text-white ${cabinetBold.className} text-xl lg:text-2xl`}>
          {title}
        </p>
      </div>

      <div className="flex flex-col text-center">
        <p className={`text-white/90 ${cabinetBold.className} text-sm md:text-base leading-relaxed`}>
          {description}
        </p>
      </div>
    </div>
  );
}