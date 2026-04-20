import { ReactElement } from "react";
import GenderSVG from "@/app/assets/images/gender";
import {
  cabinetBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";
import GenderEllipseSVG from "@/app/assets/images/genderEllipse";
import IncreaseStatSVG from "@/app/assets/images/increaseStat";

export default function CardLarge(): ReactElement {
  return (
    <div className="bg-gradient-to-b from-[#6633CC] to-[#F5C144] p-[2px] rounded-2xl overflow-hidden w-full h-full">

      <div className="w-full bg-dark-purple flex flex-col px-6 pt-4 pb-10 gap-10 md:gap-6 h-full rounded-[14px] ">

        {/* Header */}
        <div className="flex flex-col gap-3 md:gap-2">
          <GenderSVG height={40} width={40} />
          <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl`}>
            Gender Distribution
          </p>
        </div>

        {/* Doughnut */}
        <div className="flex justify-center my-5">
          <GenderEllipseSVG
            height={250}
            width={250}
            className="md:h-[250px] md:w-[250px]"
          />
        </div>

        {/* Stats layout */}
        <div className="flex flex-col gap-6">

          {/* Row 1 */}
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2 justify-self-start pl-10">
              <div className="h-4 w-4 bg-[rgba(102,51,204,1)] rounded-full"></div>
              <p className={`${cabinetMedium.className} text-[rgba(245,193,68,1)] text-sm`}>
                Male
              </p>
            </div>
            <div className="flex items-center gap-2 justify-self-start pl-6">
              <div className="h-4 w-4 bg-[rgba(157,75,173,1)] rounded-full"></div>
              <p className={`${cabinetMedium.className} text-[rgba(245,193,68,1)] text-sm`}>
                Female
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-start pl-10">
              <div className={`${cabinetRegular.className} text-5xl text-[rgba(245,193,68,1)]`}>
                75%
              </div>
            </div>
            <div className="flex flex-col items-start pl-6">
              <div className={`${cabinetRegular.className} text-5xl text-[rgba(245,193,68,1)]`}>
                25%
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <IncreaseStatSVG height={16} width={16} />
                <p className={`${cabinetRegular.className} text-white text-sm`}>
                  10% since 2024
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}