import type { ReactElement } from "react"
import Confetti from "@/app/assets/images/confetti"
import { cabinetBlack, cabinetBold, cabinetRegular } from "@/app/utils/fonts"

export default function TrackWinner(): ReactElement {
  return (
    <div className="primary-gradient-background w-[19.985rem] sm:w-[19.985rem] md:w-[23.985rem] lg:w-[26.313rem] h-[18.369rem] sm:h-[18.369rem] md:h-[18.369rem] lg:h-[29.063rem] p-[2px] rounded-[2rem]">
      <div className="bg-[#110C24] flex flex-col h-full w-full rounded-[2rem] justify-between py-8">
        <div className="flex justify-center gap-4">
          <Confetti height={60} width={60} />
          <div className="flex p-0">
            <p
              className={`${cabinetBold.className} text-primary-gradient-color font-extrabold text-2xl sm:text-2xl md:text-2xl lg:text-[2.875rem] relative top-[1.3rem]`}
            >
              Track Winner
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 lg:gap-2 px-6">
          <p
            className={`${cabinetRegular.className} text-white text-xs sm:text-xs md:text-xl lg:text-2xl tracking-wide w-full`}
          >
            New Track Added !
          </p>
          <p className={`${cabinetBlack.className} text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-[#F5C144]`}>
            Rs. 15,000
          </p>
          <p
            className={`${cabinetRegular.className} text-white text-xs sm:text-xs md:text-xl lg:text-2xl italic tracking-wide w-full`}
          >
            per track
          </p>
        </div>
      </div>
    </div>
  )
}
