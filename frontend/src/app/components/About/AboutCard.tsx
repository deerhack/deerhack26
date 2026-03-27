"use client";

import { ReactElement, useState } from "react";
import {
  cabinetBold,
  satoshiRegular,
  cabinetExtraBold,
} from "@/app/utils/fonts";

import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import Software from "@/app/assets/icons/SoftwareClub";
import CollegeInfo from "@/app/assets/icons/CollegeInfo";

type TabKey = "deerhack" | "software" | "college";

interface TabContent {
  svg?: ReactElement;
  title?: string;
  description?: string;
}

export default function AboutCard({
  tabs,
}: {
  tabs: Record<TabKey, TabContent>;
}): ReactElement {
  const [activeTab, setActiveTab] = useState<TabKey>("deerhack");

  const { svg, title, description } = tabs[activeTab];

  const buttons: {
  key: TabKey;
  Icon: React.ComponentType<{ className?: string; isActive?: boolean; width?:number; height?:number }>;
}[] = [
  { key: "deerhack", Icon: DeerhackLogo },
  { key: "software", Icon: Software },
  { key: "college", Icon: CollegeInfo },
];
  return (
    <div className="primary-aboutpage-background max-w-[55rem] sm:h-full flex flex-col lg:h-[30rem] md:h-[35.75rem] h-fit rounded-2xl p-[0.2875rem] mx-6 mb-6">
      <div className="relative bg-[#110C24] flex flex-col h-full w-full rounded-[1rem] justify-start gap-4 py-12 px-12">


        <div className="absolute top-1/2 right-[-105px] -translate-y-1/2 flex flex-col gap-5 z-20">
          {buttons.map(({ key, Icon }) => {
  const isActive = activeTab === key;

  return (
    <button
      key={key}
      onClick={() => setActiveTab(key)}
      className={`
        rounded-r-[40px] rounded-l-[6px] about-section-button
        flex items-center justify-center shadow-lg
        h-20
        ${isActive ? "w-28 brightness-125" : "w-20"}
      `}
      aria-label={`Show ${key} info`}
      aria-pressed={isActive}
    >
      <Icon
        
        isActive={isActive}
        width={50}
        height={50}

      />
    </button>
  );
})}
          
        </div>

       
        <div className="lg:h-[171px] h-fit">
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
          className={`text-magnolia text-base text-justify lg:text-[20px] ${satoshiRegular.className} leading-7 tracking-wide pr-9`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}