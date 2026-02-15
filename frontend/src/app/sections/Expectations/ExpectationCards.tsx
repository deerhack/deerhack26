"use client";
import ExpectationCard from "@/app/components/Expectations/ExpectationCard";
import { ReactElement, useState } from "react";
import FunGamesSVG from "@/app/assets/images/funGames";
import WorkshopSVG from "@/app/assets/images/workshop";
import MusicSVG from "@/app/assets/images/music";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";
import fun_games_image from "@/app/assets/images/fun_games.webp";
import live_music_image from "@/app/assets/images/live_music_image.webp";
import workshop_image from "@/app/assets/images/workshop_image.webp";

export default function ExpectationCards(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleImageIndex = (index: number) => {
    console.log("Expectation cards is triggered");
    setCurrentIndex((prev) => (prev == index ? -1 : index));
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center w-[90vw] lg:w-[80vw] lg:max-w-[60vw] mx-auto mt-10 items-center lg:items-start lg:gap-32 gap-5 ">
      
    
      <div className="lg:hidden w-[279px]  flex justify-center">
        <ExpectationImage
          imageSrc={
            currentIndex === 0
              ? fun_games_image
              : currentIndex === 1
              ? live_music_image
              : currentIndex === 2
              ? workshop_image
              : fun_games_image
          }
        />
      </div>

      
      <div className="flex flex-col py-10 gap-5">
        <div onClick={() => toggleImageIndex(0)}>
          <ExpectationCard
            svg={<FunGamesSVG height={40} width={40} />}
            title="Fun Games"
            description="Get ready to unleash your competitive spirit and bond with fellow participants in a series of exciting challenges and friendly competitions."
            index={0}
            isActive={currentIndex === 0}
          />
        </div>
        <div onClick={() => toggleImageIndex(1)}>
          <ExpectationCard
            svg={<MusicSVG height={40} width={40} />}
            title="Live Music"
            description="Take a break from coding and immerse yourself in the soulful melodies and electrifying beats of live music performances, adding rhythm and energy to your DeerHack experience."
            index={1}
            isActive={currentIndex === 1}
          />
        </div>
        <div onClick={() => toggleImageIndex(2)}>
          <ExpectationCard
            svg={<WorkshopSVG height={40} width={40} />}
            title="Workshops"
            description="Dive deep into cutting-edge technologies, sharpen your skills, and gain invaluable insights from industry experts through interactive workshops tailored to enhance your expertise and ignite your innovation."
            index={2}
            isActive={currentIndex === 2}
          />
        </div>
      </div>

     
      <div className="hidden lg:block cursor-pointer">
        <ExpectationImage
          imageSrc={
            currentIndex === 0
              ? fun_games_image
              : currentIndex === 1
              ? live_music_image
              : currentIndex === 2
              ? workshop_image
              : fun_games_image
          }
        />
      </div>
    </div>
  );
}