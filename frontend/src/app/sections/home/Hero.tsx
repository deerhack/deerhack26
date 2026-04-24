"use client";
import DiscordHero from "@/app/assets/icons/DiscordHero";
import Devfolio from "@/app/assets/icons/Devfolio";
import styles from "./styles.module.css";
import DeerHack26Logo from "@/app/assets/icons/Deerhack26";
import { cabinetBold, cabinetExtraBold, cabinetMedium, satoshiBlack, satoshiBold } from "@/fonts";
import Link from "next/link";
// import { useState, useEffect } from "react";
import Flicker from "@/app/components/Flicker/flicker";
import { useState, useCallback } from "react";


const Hero = () => {
  const [isGlowing, setIsGlowing] = useState(true);

  const handleGlowChange = useCallback((allGlowing: boolean) => {
    setIsGlowing(allGlowing);
  }, []);

  return (
    <div
      className={`${styles.hero_background_container} flex justify-center items-center w-full min-h-screen`}
      id="hero_container"
    >
      <div
        className={`px-10 py-10 lg:py-8 lg:px-14 text-center rounded-3xl w-[304px] sm:w-[427px] md:w-[500px] h-fit ${styles.muted_color}`}
        style={{
          border: isGlowing ? "2px solid #FFB401" : "2px solid #B98402",
          transition: "border 0.1s ease, box-shadow 0.1s ease",
          boxShadow: isGlowing
            ? "0 0 10px rgba(245,193,68,0.9), inset 0 0 10px rgba(102,51,204,0.8)"
            : "0 0 6px rgba(245,193,68,0.2), inset 0 0 6px rgba(102,51,204,0.2)",
        }}
      >
        <Flicker onGlowChange={handleGlowChange} />

        <p className={`text-2xl md:text-4xl lg:text-3xl font-bold text-center text-heropage-gradient ${cabinetBold.className}`}>
          12th - 14th June
        </p>

        <DeerHack26Logo className="mt-3 h-auto w-full md:mt-6" width={309} height={130} />
        <div className="flex flex-col justify-center items-center gap-4 md:gap-6 mx-auto mt-7 w-full">
          <Link
            href="https://deerhack-25.devfolio.co"
            className="w-full flex justify-center items-center"
            target="_blank"
          >
            <div className="opacity-100 hover:opacity-90 transition-bg duration-150 flex h-[48px] md:h-[48px] lg:w-[85%] w-[100%] justify-center items-center py-5 md:py-8 hover:scale-105 transition-transform bg-[#3670FF] rounded-lg">
              <Devfolio className="w-6 h-6 lg:w-[30px] lg:h-[30px] shrink-0" />
              <p className={`text-white ${cabinetMedium.className} text-sm md:text-2xl ml-2`}>
                Apply with Devfolio
              </p>
            </div>
          </Link>
          <Link
            href="https://discord.com/invite/56PAU7sBgZ"
            className="inline-block"
            target="_blank"
          >
            <div className="flex flex-row w-[175px] h-[47px] md:w-[280px] md:h-[64px] lg:w-[238.30857849121094px] justify-center items-center gap-2 px-4 lg:px-6 py-3 border-[1px] border-magnolia  hover:bg-[#6633CCD9]  transition-all duration-150 rounded-xl bg-[#2F1B5FE6] text-white lg:bg-[#6633CC2E]">
              <DiscordHero className="w-6 h-6 lg:w-[30px] lg:h-[30px]" />
              <p className={`text-white ${satoshiBold.className} text-xs md:text-xl lg:text-[17px]`}>
                Join Our Discord
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
