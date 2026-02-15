import Image from "next/image";
import JudgesSection from "../sections/Judges/Judges";
import { cabinetExtraBold } from "../utils/fonts";
import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";

const Judges = () => {
  return (
    <div
      key="JudgeContainer"
      className="relative w-full m-auto py-10 bg-dark-purple"
    >
      <Image
        src={leaf_prizes_right}
        alt="leaf"
        height={350}
        style={{ transform: "scaleX(-1)" }}
        className="absolute bottom-0 left-0 xl:block hidden"
      />
      <div key="judgeContainer" className="flex items-center flex-col my-20">
        <h1 className={`headings ${cabinetExtraBold.className}`}>
          Judges for DeerHack 2025
        </h1>
        <JudgesSection />
      </div>
    </div>
  );
};

export default Judges;
