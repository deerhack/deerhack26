import { ReactElement } from "react";
import {
  cabinetBold,
  satoshiRegular,
  cabinetExtraBold,
} from "@/app/utils/fonts";

export default function AboutCard({
  svg,
  title,
  description,
}: {
  svg?: ReactElement;
  title?: string;
  description?: string;
}): ReactElement {
  return (
    <div className="primary-aboutpage-background max-w-[32.1rem] sm:h-full flex flex-col lg:h-[39.78rem]  md:h-[35.75rem] h-fit  rounded-2xl p-[0.2875rem] mx-6 mb-6">
      <div className="bg-[#110C24] flex flex-col h-full w-full rounded-[1rem] justify-start gap-4 py-12 px-12">
        <div className="lg:h-[171px] h-fit mb-1">
          <div className="bg-dark-purple rounded-full w-12 lg:w-20 h-12 mb-5 lg:h-20 flex items-center justify-center p-0">
            {svg}
          </div>
          <h1
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-[32px] lg:text-[36px] leading-normal tracking-normal text-start`}
          >
            {title}
          </h1>
        </div>
        <p
          className={`text-magnolia text-base text-justify lg:text-[20px] ${satoshiRegular.className} leading-7 tracking-wide mt-10`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
