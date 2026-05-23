"use client";

import { ReactElement, useState } from "react";
import {
  cabinetBold,
  satoshiRegular,
  cabinetExtraBold,
} from "@/app/utils/fonts";

import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import Software from "@/app/assets/icons/SoftwareClub";
import AboutSoftware from "@/app/assets/icons/AboutSoftware";
import CollegeInfo from "@/app/assets/icons/CollegeInfo";
import AboutCollege from "@/app/assets/icons/AboutCollege";
import DeerhackIconPhone from "@/app/assets/icons/DeerhackIconMobile";

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
    Icon: React.ComponentType<{
      className?: string;
      isActive?: boolean;
      width?: number;
      height?: number;
    }>;
  }[] = [
    { key: "deerhack", Icon: DeerhackIconPhone },
    { key: "software", Icon: Software },
    { key: "college", Icon: CollegeInfo },
  ];
  const largeButtons: {
    key: TabKey;
    Icon: React.ComponentType<{
      className?: string;
      isActive?: boolean;
      width?: number;
      height?: number;
    }>;
  }[] = [
    { key: "deerhack", Icon: DeerhackLogo },
    { key: "software", Icon: AboutSoftware },
    { key: "college", Icon: AboutCollege },
  ];

  const positions = [
    "absolute top-0 left-[82px]",
    "absolute -right-[40px] top-[150px]",
    "absolute left-[45px] top-[280px]",
  ];

  return (
    <div className="primary-aboutpage-background w-[26rem] h-fit sm:w-auto md:max-w-[55rem] sm:h-full flex flex-col lg:h-[30rem] rounded-2xl p-[0.2875rem] mx-6 mb-6">
      <div className="relative bg-[#110C24] flex flex-col h-full w-full rounded-[1rem] justify-start gap-4 pl-10 pr-16 py-[60px] xl:py-12 md:px-12">
        <div className="absolute flex lg:hidden top-[108px] md:top-[150px] right-[-10px] scale-x-[-1] -translate-y-1/2 flex-col gap-5 z-20">
          {buttons.map(({ key, Icon }) => {
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  rounded-r-[40px] rounded-l-[6px] about-section-button p-1 md:p-2
                  flex items-center justify-end shadow-lg
                  h-10 md:h-16
                  transition-all duration-300 ease-in-out
                  ${isActive ? "w-[72px] md:w-[140px] brightness-125" : "w-12 md:w-16"}
                `}
                aria-label={`Show ${key} info`}
                aria-pressed={isActive}
              >
                <Icon
                  isActive={isActive}
                  width={22}
                  height={22}
                  className="w-8 h-8 md:w-12 md:h-12 scale-x-[-1]"
                />
              </button>
            );
          })}
        </div>

        <div className="lg:h-[171px] h-fit relative">
          <div className="hidden lg:flex absolute top-[100px] -right-[160px] bg-white h-[4.71px] w-[170px] rounded-[7.35px] -rotate-45"></div>
          <div className="hidden lg:flex absolute top-[300px] -right-[145px] bg-white h-[4.71px] w-[165px] rounded-[7.35px] rotate-45"></div>
          <div className="hidden lg:flex absolute top-0 right-0 flex-col z-50">
            <div className="flex flex-col gap-6 relative h-full">
              {largeButtons.map(({ key, Icon }, index) => {
                const isActive = activeTab === key;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    aria-label={`Show ${key} info`}
                    aria-pressed={isActive}
                    className={`${positions[index]} -rotate-3`}
                  >
                    <Icon
                      isActive={isActive}
                      width={100}
                      height={100}
                      className={`w-[100px] h-[100px] transition-all ease-in-out duration-300 hover:scale-[1.5] ${isActive ? "scale-[1.5]" : "scale-100"}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex bg-dark-purple rounded-full w-12 lg:w-20 h-12 mb-5 lg:h-20 items-center justify-center p-0">
            {svg}
          </div>

          <h1
            className={`text-[32px] md:text-[32px] lg:text-6xl text-main-title w-fit text-primary-gradient-color ${cabinetExtraBold.className} lg:text-[36px] leading-normal tracking-normal text-start`}
          >
            {title}
          </h1>
        </div>

        <div
          className={` text-magnolia text-[16px] md:text-[16px] text-left lg:text-[20px] ${satoshiRegular.className} leading-7 sm:leading-8 tracking-tighter md:tracking-wide md:pr-24 `}
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}