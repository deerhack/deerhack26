import Image from "next/image";
import Faq from "../sections/FAQ/FAQ";
import { cabinetBold, cabinetExtraBold } from "../utils/fonts";
import leaf_deerhack2023_right from "@/app/assets/images/leaf_deerhack2023_right.svg";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center bg-dark-purple py-20">
      <Image
        src={leaf_deerhack2023_right}
        alt="leaf"
        height={250}
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-1 top-46 hidden xl:block"
      />
      <h1 className={`headings mb-[3rem] ${cabinetExtraBold.className}`}>FAQ</h1>
      <Faq />
    </div>
  );
};

export default FAQ;
