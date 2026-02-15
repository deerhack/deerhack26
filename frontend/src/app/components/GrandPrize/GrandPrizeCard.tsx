import type { ReactElement } from "react"
import Trophy from "@/app/assets/images/trophy"
import Leaf from "@/app/assets/images/Leaf1"
import { satoshiRegular, cabinetBlack, cabinetExtraBold } from "@/app/utils/fonts"

export default function GrandPrizeCard(): ReactElement {
  return (
    <div className="flex flex-col justify-evenly grow lg:h-[43.448rem] h-[29.448rem] sm:h-[29.448rem] md:h-[32.448rem] rounded-[2rem] primary-aboutpage-background w-[19.966rem] sm:w-[19.966rem] md:w-[23.966rem] lg:w-[29.348rem]">
      <div className="flex flex-col text-left ml-[2rem]">
        <div className="flex">
          <Trophy height={160} width={160} />
        </div>
        <p
          className={`${cabinetExtraBold.className} font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#110C24]`}
        >
          Grand Prize
        </p>
      </div>

      <div
        className={`${cabinetBlack.className} text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left ml-10 mt-28 relative`}
      >
        Rs.
        <br /> 50,000
        <div className={`${satoshiRegular.className} text-sm sm:text-sm md:text-lg lg:text-2xl italic text-left`}>
          to overall winner
        </div>
        <div className="absolute bottom-[-6rem] right-0">
          <Leaf height={300} width={300} />
        </div>
      </div>
    </div>
  )
}
