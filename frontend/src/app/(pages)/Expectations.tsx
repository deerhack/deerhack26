import ExpectationCards from "@/app/sections/Expectations/ExpectationCards";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";
import { ReactElement } from "react";
import Image from "next/image";
import butterfly from "@/app/assets/images/butterfly.svg";
import { cabinetExtraBold } from "../utils/fonts";

export default function ExpectationPage(): ReactElement {
  return (
    <div className="bg-dark-purple py-20 relative overflow-hidden">
      <Image
  src={butterfly}
  alt="butterfly"
  width={80}
  className="absolute top-20 left-20 hidden md:block opacity-80"
/>
      <div className={`${cabinetExtraBold.className} headings px-2 md:px-0 mb-[3rem]`}>
        What Else Can You Expect at<br></br> DeerHack?
      </div>
      <ExpectationCards />
      {/* <div className="flex lg:flex-row flex-col justify-around w-[90vw] lg:w-[80vw] lg:max-w-[60vw] mx-auto mt-10 items-center lg:items-start gap-5">
        <ExpectationCards />
        <div className="hidden lg:block cursor-pointer">
          <ExpectationImage />
        </div>
      </div> */}
    </div>
  );
}
