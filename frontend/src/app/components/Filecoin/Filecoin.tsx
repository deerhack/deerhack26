import { ReactElement } from "react";
import {
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
  cabinetLight,
} from "@/app/utils/fonts";
import FileCoinSVG from "@/app/assets/images/filecoin";

export default function Filecoin(): ReactElement {
  return (
    <div className=" bg-violet w-full sm:w-64 md:w-48 lg:w-72 px-2 md:px-0 rounded-2xl h-44 sm:h-auto py-3">
      <div className="flex flex-col px-4 py-5 gap-3 lg:gap-5">
        <div className="flex justify-start gap-2 items-center">
          <FileCoinSVG height={50} width={50} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-3xl sm:text-xl lg:text-3xl`}
          >
            Filecoin
          </p>
        </div>
        <div className="flex flex-col">
          <p
            className={`${cabinetLight.className} text-[0.7rem] sm:text-[0.6rem] lg:text-base text-white`}
          >
            best use of Filecoin and/or IPFS
          </p>
          <p
            className={`${cabinetBold.className} text-secondary text-base sm:text-xs lg:text-base`}
          >
            worth $200
          </p>
        </div>
      </div>
    </div>
  );
}
