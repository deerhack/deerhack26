import styles from "./styles.module.css";
import { cabinetExtraBold } from "@/app/utils/fonts";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import MainLogo from "@/app/assets/icons/MainLogo";

export default function ComingSoonCard() {
  return (
    <div
      className={`${styles.muted_color} rounded-[0.65rem] w-[25vw] h-[40vh] flex flex-col gap-7 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-2 py-3`}
    >
      <MainLogo height={100} width={400} />
      <div
        className={` ${cabinetExtraBold.className} text-center text-4xl text-primary-gradient-color`}
      >
        Coming Soon
      </div>
    </div>
  );
}
