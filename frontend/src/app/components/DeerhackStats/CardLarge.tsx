import { ReactElement } from "react";
import GenderSVG from "@/app/assets/images/gender";
import {
  cabinetBlack,
  cabinetBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";
import GenderEllipseSVG from "@/app/assets/images/genderEllipse";
import IncreaseStatSVG from "@/app/assets/images/increaseStat";


export default function CardLarge(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-[#6633CC] to-[#F5C144] p-[2px] rounded-xl">
      <div className="rounded-xl md:h-full sm:h-full h-[30rem] w-80 lg:w-[24rem] bg-dark-purple  flex flex-col px-6 pt-4 pb-16 justify-between">
        
        <div className="flex flex-col gap-2">
          <GenderSVG height={50} width={50} />
          <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl`}>
            Gender Distribution
          </p>
        </div>

        
        <div className="flex justify-center">
          <GenderEllipseSVG height={200} width={200} />
        </div>

       
        <div className="flex justify-center gap-12">
          {/* Male Stats */}
          <div className="flex flex-col gap-2 items-center w-32">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-[rgba(102,51,204,1)]  rounded-full self-start"></div>
              <p className={`${cabinetMedium.className} text-[rgba(245,193,68,1)] text-sm`}>
                Male
              </p>
            </div>
            <div
              className={`${cabinetRegular.className} text-4xl text-[rgba(245,193,68,1)] w-full text-center `}
            >
              75%
            </div>
          </div>

          {/* Female Stats */}
          <div className="flex flex-col items-start gap-2 w-32">
            {/* Flex for Icon and Female Text */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-[rgba(157,75,173,1)] rounded-full"></div>
              <p className={`${cabinetMedium.className} text-[rgba(245,193,68,1)] text-sm`}>
                Female
              </p>
            </div>
            <div
              className={`${cabinetRegular.className} text-4xl text-[rgba(245,193,68,1)] `}
            >
              25%
            </div>
            {/* Increase Stat */}
            <div className="flex items-center gap-1 ">
              <IncreaseStatSVG height={16} width={16} />
              <p className={`${cabinetRegular.className} text-white text-sm`}>
                10% since 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
