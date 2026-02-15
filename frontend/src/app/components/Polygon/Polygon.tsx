import { ReactElement } from "react";
import {
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
  cabinetLight,
} from "@/app/utils/fonts";
import PolygonSVG from "@/app/assets/images/polygon";

export default function Polygon(): ReactElement {
  return (
    <div className=" bg-violet w-full sm:w-64 md:w-48 lg:w-72 rounded-2xl sm:items-center pb-4  px-2 md:px-0 h-[22rem] sm:h-auto ">
      <div className="flex flex-col px-4 lg:px-6 gap-3 lg:gap-5 h-full justify-around py-4">
        <div className="flex justify-start gap-2 items-center">
          <PolygonSVG height={50} width={50} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className}  text-2xl sm:text-xl lg:text-3xl`}
          >
            Polygon
          </p>
        </div>
        <div className="flex flex-col">
          <p
            className={`${cabinetBold.className} text-white text-xl sm:text-sm lg:text-xl`}
          >
            Ethereum Track
          </p>
          <p
            className={`${cabinetLight.className} text-[0.7rem] sm:text-[0.6rem] text-white lg:text-sm`}
          >
            best hack built on Ethereum
          </p>
          <p
            className={`${cabinetBold.className} text-secondary text-base sm:text-xs lg:text-base`}
          >
            worth $150
          </p>
        </div>
        <div className="flex flex-col">
          <p
            className={`${cabinetBold.className} text-white text-xl sm:text-sm lg:text-xl`}
          >
            Ethereum + Polygon <br /> Track
          </p>
          <p
            className={`${cabinetLight.className} text-[0.7rem] sm:text-[0.6rem] text-white lg:text-sm`}
          >
            best hack built on Ethereum + Polygon
          </p>
          <p
            className={`${cabinetBold.className} text-secondary text-base sm:text-xs lg:text-base`}
          >
            worth $150
          </p>
        </div>
      </div>
    </div>
  );
}
