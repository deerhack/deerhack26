import ExpectationCards from "@/app/sections/Expectations/ExpectationCards";
import { ReactElement } from "react";
import Image from "next/image";
import butterfly from "@/app/assets/images/butterfly.svg";
import { cabinetExtraBold } from "../utils/fonts";

export default function ExpectationPage(): ReactElement {
  return (
    <div className="bg-dark-purple py-20 relative overflow-hidden">
      {/* To move butterfly DOWN: increase top-[value]
          To move butterfly RIGHT: increase left-[value]
      */}
      <Image
        src={butterfly}
        alt="butterfly"
        width={80}
        className="absolute top-[150px] left-[100px] hidden md:block opacity-80"
      />
      
      <div className={`${cabinetExtraBold.className} headings px-2 md:px-0 mb-[3rem] text-center`}>
        What Else Can You Expect at<br /> DeerHack?
      </div>

      <ExpectationCards />
    </div>
  );
}