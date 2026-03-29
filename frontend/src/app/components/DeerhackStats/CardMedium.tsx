import ApplicantsSVG from "@/app/assets/images/applicants"
import { cabinetBold, cabinetRegular } from "@/app/utils/fonts"
import CountUpAnimation from "../CountUp/CountUpAnimation"
import Leaf from "@/app/assets/icons/Leaf"

export default function CardMedium() {
  return (
    <div className="relative z-0 overflow-hidden h-[250px] w-80 lg:w-[24rem] card-background-gradient rounded-2xl px-6 pt-8 flex flex-col justify-between border border-[rgba(245,193,68,1)]">

      <Leaf className="absolute -top-10 right-5  opacity-90 pointer-events-none z-0" />
      <div className="flex flex-col gap-2 z-10">
        <ApplicantsSVG height={60} width={45} />
        {/* Mobile View */}
        <div className="flex justify-between items-center lg:hidden">
          <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl leading-tight`}>Total</p>
          {/* <p className={`${cabinetRegular.className} text-white text-4xl`}>3840+</p> */}
          <CountUpAnimation target={4000} isExtra={true} time={3} className=" text-[rgba(245,193,68,1)] text-4xl"/>
        </div>
        <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl leading-tight lg:hidden`}>Applicants</p>
        {/* DeskTop View */}
        <div className="hidden lg:flex lg:flex-col lg:h-full lg:justify-between">
          <p className={`${cabinetBold.className} text-[rgba(245,193,68,1)] text-2xl leading-tight`}>Total Applicants</p>
          <div className="flex justify-end">
            {/* <p className={`${cabinetRegular.className} text-white text-5xl`}>3840+</p> */}
            <CountUpAnimation target={4000} isExtra={true} time={3} className=" text-[rgba(245,193,68,1)] text-5xl"/>
          </div>
        </div>
      </div>
    </div>
  )
}
