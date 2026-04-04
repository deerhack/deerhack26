import { ReactElement } from "react";
import { cabinetExtraBold } from "../utils/fonts";
import ExpectationCards from "../sections/ExpectationsV2/ExpectationCards";
import ExpectationsVine from "../assets/icons/ExpectationsVine";
import Butterfly from "../assets/icons/Butterfly";

export default function ExpectationPageV2(): ReactElement {
  return (
    <div className="relative bg-dark-purple py-20 flex flex-col gap-[20px]">
      <ExpectationsVine className="absolute right-0 -top-16" />
      <div
        className={`${cabinetExtraBold.className} headings px-2 md:px-0 mb-[3rem]`}
      >
        What Else Can You Expect at<br></br> DeerHack?
      </div>
      <Butterfly className="absolute top-[180px] left-[140px] z-[45]"/>
      <ExpectationCards />
    </div>
  );
}
