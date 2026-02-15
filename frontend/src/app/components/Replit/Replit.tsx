import { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetLight } from "@/app/utils/fonts";
import ReplitSVG from "@/app/assets/images/replit";

export default function Filecoin(): ReactElement {
  return (
    <div className=" bg-violet w-full sm:w-64 md:w-48 lg:w-72 rounded-2xl px-2 md:px-0 h-40 sm:h-auto">
      <div className="flex flex-col px-4 py-5 lg:py-[1.65rem] gap-5">
        <div className="flex justify-start gap-2 items-center">
          <ReplitSVG height={50} width={50} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-3xl sm:text-xl lg:text-3xl`}
          >
            Replit
          </p>
        </div>
        <div className="flex flex-col">
          <p
            className={`${cabinetLight.className} text-[0.7rem] sm:text-[0.6rem] text-white lg:text-base`}
          >
            winning project deployed on Replit
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
