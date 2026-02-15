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
import DecreaseStatSVG from "@/app/assets/images/decreaseStat";
export default function CardLarge(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-[#6633CC] to-[#F5C144] p-[2px] rounded-xl">
      <div className="rounded-xl md:h-full sm:h-full h-[30rem] w-80 lg:w-[24rem] bg-dark-purple  flex flex-col px-6 pt-4 pb-16 justify-between">
        
        <div className="flex flex-col gap-2">
          <GenderSVG height={50} width={50} />
          <p className={`${cabinetBold.className} text-white text-2xl`}>
            Gender Distribution
          </p>
        </div>

        
        <div className="flex justify-center">
          <GenderEllipseSVG height={200} width={200} />
        </div>

       
        <div className="flex justify-center gap-8 ">
          {/* Male Stats */}
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 self-start">
              <div className="h-4 w-4 bg-cardgrape  rounded-full self-start"></div>
              <p className={`${cabinetMedium.className} text-white text-sm`}>
                Male
              </p>
            </div>
            <div
              className={`${cabinetRegular.className} text-4xl text-white w-full text-center `}
            >
              80%
            </div>
            {/* Decrease Stat */}
            {/* <div className="flex items-center gap-1 self-start">
              <DecreaseStatSVG height={16} width={16} />
              <p className={`${cabinetRegular.className} text-white text-sm`}>
                5%
              </p>
            </div> */}
          </div>

          {/* Female Stats */}
          <div className="flex flex-col gap-2 items-center">
            {/* Flex for Icon and Female Text */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-saffron rounded-full"></div>
              <p className={`${cabinetMedium.className} text-white text-sm`}>
                Female
              </p>
            </div>
            <div
              className={`${cabinetRegular.className} text-4xl text-white w-full text-center `}
            >
              20%
            </div>
            {/* Increase Stat */}
            <div className="flex items-center gap-1 self-start">
              <IncreaseStatSVG height={16} width={16} />
              <p className={`${cabinetRegular.className} text-white text-sm`}>
                5%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}