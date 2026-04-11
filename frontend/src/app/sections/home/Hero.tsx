"use client";
import DiscordHero from "@/app/assets/icons/DiscordHero";
import Devfolio from "@/app/assets/icons/Devfolio"; 
import styles from "./styles.module.css";
import DeerHack26Logo from "@/app/assets/icons/Deerhack26";
import { cabinetBold, cabinetMedium, satoshiBlack, satoshiBold } from "@/fonts";
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
        
        <Link
          href="https://discord.com/invite/56PAU7sBgZ"
          className="inline-block"
          target="_blank"
        >
          <div className="flex flex-row w-[182px] h-[47px] lg:w-[256px] lg:h-[67px] md:w-[280px] md:h-[60px] justify-center items-center gap-2 p-4 border-4 border-grape hover:bg-transparent rounded-xl text-white mx-auto mt-7 bg-grape">
            <DiscordHero />
            <p className={`text-white ${cabinetBold.className} text-bold text-xs md:text-xl lg:text-xl`}>
              Join Our Discord!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
