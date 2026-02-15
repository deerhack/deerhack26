import type { ReactElement } from "react"
import { cabinetExtraBold } from "@/app/utils/fonts"

export default function OtherPrizes({
  svg,
}: {
  svg: ReactElement
}) {
  return (
    <div className="flex justify-start items-start">
      <div className="bg-violet rounded-[2rem] h-[12.459rem] w-[20.027rem] sm:h-[12.459rem] sm:w-[20.027rem] md:h-[13.459rem] md:w-[24.027rem] lg:h-[13.038rem] lg:w-[50.5rem] lg:pl-20 lg:justify-between lg:flex-row lg:items-start lg:gap-3 flex flex-row-reverse justify-start items-start py-5">
        <div className="flex justify-center max-w-[10rem] relative top-[1.9rem] md:top-[1.9rem] lg:top-[0.8rem] right-[2rem]">
          {svg}
        </div>
        <div
          className={`${cabinetExtraBold.className} text-primary-gradient-color text-2xl sm:text-2xl md:text-2xl lg:text-4xl text-start w-[8rem] sm:w-[8rem] md:w-[8rem] lg:text-end lg:h-full lg:w-full lg:top-[3rem] relative right-[4.3rem] top-[1.3rem] leading-none text-[1.701rem]`}
        >
          Tons of Gifts & <br />
          Merch for Everyone !
        </div>
      </div>
    </div>
  )
}
