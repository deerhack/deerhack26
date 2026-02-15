import { cabinetMedium } from "@/app/utils/fonts";
import { ReactElement } from "react";
import Image from "next/image";

export default function TitleSponsor({ image }: { image: ReactElement }) {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <div
        className={`${cabinetMedium.className} m-10 headings text-3xl font-extrabold tracking-normal`}
      >
        Title Sponsor
      </div>
      <div className="primary-gradient-background relative w-[20.4375rem] h-[15rem] md:w-[39.125rem] md:h-[19.25rem] rounded-[2rem] p-[0.1875rem]">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[12rem] h-[12rem] rounded-full bg-[#110C24] flex justify-center items-center">
            {image}
          </div>
        </div>
      </div>
    </div>
  );
}
