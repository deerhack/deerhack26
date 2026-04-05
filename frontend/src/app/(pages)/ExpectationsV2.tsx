import { ReactElement } from "react";
import { cabinetExtraBold } from "../utils/fonts";
import ExpectationCards from "../sections/ExpectationsV2/ExpectationCards";
import ExpectationsVine from "../assets/icons/ExpectationsVine";
import Butterfly from "../assets/icons/Butterfly";

export default function ExpectationPageV2(): ReactElement {
  return (
    <div className="relative bg-dark-purple py-20 flex flex-col lg:gap-[20px] overflow-hidden md:overflow-visible">
      <ExpectationsVine className="absolute -right-[24px] md:right-0 top-28  md:-top-8 lg:-top-16 w-[102px] h-[232px] md:w-[215px] md:h-[334px]" />
      <div
        className={`${cabinetExtraBold.className} headings px-2 md:px-0 mb-[3rem]`}
      >
        What Else Can You Expect at<br></br> DeerHack?
      </div>
      <Butterfly className="absolute w-[86px] h-[105px] top-32 left-8 md:w-[144px] md:h-[188px] md:top-[105px] lg:top-[180px] md:left-[60px] z-[45]" />
      <ExpectationCards />
      <ExpectationsVine className="absolute bottom-0 opacity-[35%] w-[102px] h-[232px] block md:hidden scale-y-[-1] scale-x-[-1]" />
    </div>
  );
}
