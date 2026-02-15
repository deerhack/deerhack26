import ApplicantsSVG from "@/app/assets/images/applicants"
import { cabinetBold, cabinetRegular } from "@/app/utils/fonts"

export default function CardMedium() {
  return (
    <div className="h-52 w-80 lg:w-[24rem] card-background-gradient rounded-2xl px-6 pt-8 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <ApplicantsSVG height={60} width={45} />
        {/* Mobile View */}
        <div className="flex justify-between items-center lg:hidden">
          <p className={`${cabinetBold.className} text-white text-2xl leading-tight`}>Total</p>
          <p className={`${cabinetRegular.className} text-white text-4xl`}>1830+</p>
        </div>
        <p className={`${cabinetBold.className} text-white text-2xl leading-tight lg:hidden`}>Applicants</p>
        {/* DeskTop View */}
        <div className="hidden lg:flex lg:flex-col lg:h-full lg:justify-between">
          <p className={`${cabinetBold.className} text-white text-2xl leading-tight`}>Total Applicants</p>
          <div className="flex justify-end">
            <p className={`${cabinetRegular.className} text-white text-5xl`}>1830+</p>
          </div>
        </div>
      </div>
    </div>
  )
}
