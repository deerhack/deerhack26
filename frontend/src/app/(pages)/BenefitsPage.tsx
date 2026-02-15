import BenefitsCards from "../sections/Benefits/BenefitsCard";
import { cabinetBlack, cabinetExtraBold } from "../utils/fonts";
import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";
import leaf_deerhack2023_right from "@/app/assets/images/leaf_deerhack2023_right.svg";
import Image from "next/image";

export default function BenefitsPage() {
  return (
    <div className=" bg-dark-purple flex flex-col py-20  overflow-hidden relative">
      <div className="relative">
        <Image
          src={leaf_prizes_right}
          alt="leaf"
          height={250}
          className="absolute right-3 top-46 hidden xl:block -rotate-12"
        />
      </div>
      <div className={`${cabinetExtraBold.className} mb-[3rem] headings`}>
        Benefits of Participating
      </div>
      <div className="flex justify-center mx-4">
        <BenefitsCards />
      </div>
      <Image
        src={leaf_deerhack2023_right}
        alt="leaf"
        height={250}
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-1 bottom-0 hidden lg:block"
      />
    </div>
  );
}
