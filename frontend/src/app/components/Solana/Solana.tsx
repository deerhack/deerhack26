import { ReactElement } from "react";
import {
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
  cabinetLight,
} from "@/app/utils/fonts";
import SolanaSVG from "@/app/assets/images/solana";

export default function Solana({
  title = "Solana",
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}): ReactElement {
  return (
    <div className=" bg-violet w-full grow sm:w-64 md:w-48 lg:w-72 rounded-2xl md:h-auto px-2 md:px-0 h-56 sm:h-auto">
      <div className="flex flex-col px-4 py-6 gap-4 lg:py-[1.25rem] lg:gap-6">
        <div className="flex justify-start gap-2 items-center">
          <SolanaSVG height={50} width={50} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-3xl sm:text-xl lg:text-3xl`}
          >
            Solana
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className={`${cabinetBold.className} text-white text-xl sm:text-sm lg:text-xl`}
          >
            {title}
          </p>
          <p
            className={`${cabinetLight.className} text-[0.7rem] sm:text-[0.6rem] text-white lg:text-base`}
          >
            {description}
          </p>
          <p
            className={`${cabinetBold.className} text-secondary text-base sm:text-xs lg:text-base`}
          >
            worth ${price}
          </p>
        </div>
      </div>
    </div>
  );
}
