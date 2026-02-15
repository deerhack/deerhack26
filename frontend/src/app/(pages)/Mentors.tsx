import Image from "next/image";
import MentorsSection from "../sections/Mentors/Mentors";
import { cabinetExtraBold } from "../utils/fonts";
import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";

const Mentors = () => {
  return (
    <div key="MentorContainer" className="w-full m-auto py-10 bg-dark-purple">
      <div
        key="MentorContainer"
        className=" relative flex items-center flex-col my-20"
      >
        <h1 className={`headings ${cabinetExtraBold.className}`}>
          Mentors for DeerHack 2025
        </h1>
        <Image
          src={leaf_prizes_right}
          alt="leaf"
          height={350}
          className="absolute z-0 right-9 hidden xl:block"
        />
        <MentorsSection />
      </div>
    </div>
  );
};

export default Mentors;
