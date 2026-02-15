"use client";
import DiscordHero from "@/app/assets/icons/DiscordHero";
import Devfolio from "@/app/assets/icons/Devfolio"; 
import styles from "./styles.module.css";
import DeerHack25Logo from "@/app/assets/icons/DeerHack25Logo";
import { cabinetBold, cabinetMedium, satoshiBlack, satoshiBold } from "@/fonts";
import Link from "next/link";


const Hero = () => {
  return (
    <div
      className={` ${styles.hero_background_container} flex justify-center w-full `}
      id="hero_container"
    >
    {/*Original div --> <div className={` px-10 py-10 lg:py-8 lg:px-14 text-center  rounded-3xl border-2 border-secondary  absolute lg:top-48 lg:w-[427px] lg:h-[447px] w-[304px] h-[319px] top-48 ${styles.muted_color} md:w-[500px] md:h-[500px] md:top-72 `}> */}
    <div className={` px-10 py-10 lg:py-8 lg:px-14 text-center  rounded-3xl border-2 border-secondary  absolute lg:top-60 lg:w-[427px]  w-[304px]  top-48 ${styles.muted_color} md:w-[500px] h-fit md:top-72 `}>
      <p
          className={`  text-2xl md:text-4xl lg:text-3xl font-bold text-center text-heropage-gradient ${cabinetBold.className}`}
        >
          11th - 13th July
        </p>
        <DeerHack25Logo className="mt-3 h-auto w-full md:mt-6" width={309} height={130} />
        {/* <div
          className="apply-button"
          data-hackathon-slug="deerhack24"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div> */}
         <Link
          href="https://deerhack-25.devfolio.co/"
          className="w-fit mx-auto"
          target="_blank"
        >
          <div className="flex flex-row justify-center items-center gap-2 py-3 px-5 bg-[#3670FF] w-[228px] h-[46px] md:w-[350px] md:h-[60px] lg:w-[321px] lg:h-[61px] rounded-md text-white mx-auto mt-9 transform transition-transform duration-300 hover:scale-105">
            <Devfolio />
            <p className={`text-white ${cabinetMedium.className}  text-[15px] md:text-xl lg:text-[23px] text-bold  `}>
              Apply With Devfolio
            </p>
          </div>
            {/* <div className="flex flex-row w-[182px] h-[47px] lg:w-[256px] lg:h-[67px]  md:w-[280px] md:h-[60px] justify-center items-center gap-2 p-4 rounded-xl text-black mx-auto mt-7 hover:bg-[#FACA16] bg-[#FFBF00] transition-ease in out duration-200 transform transition-transform hover:scale-105">
            <p className={`text-black ${satoshiBlack.className} text-bold text-xs md:text-xl lg:text-xl `}>
              Pre-Register Now
            </p>
          </div> */}
          
        </Link>

        <Link
          href="https://discord.gg/Us55AWTQMj"
          className="inline-block"
          target="_blank"
        >
          <div className="flex flex-row w-[182px] h-[47px] lg:w-[256px] lg:h-[67px]  md:w-[280px] md:h-[60px] justify-center items-center gap-2 p-4 border-4 border-grape  rounded-xl text-white mx-auto mt-7 hover:bg-grape">
            <DiscordHero />
            <p className={`text-white ${cabinetBold.className} text-bold text-xs md:text-xl lg:text-xl `}>
              Join Our Discord!
            </p>
          </div>
          </Link>
      </div>
      </div>
    
  );
};
export default Hero;
