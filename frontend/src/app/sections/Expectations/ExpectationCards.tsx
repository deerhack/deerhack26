"use client";

import { ReactElement, useState, useEffect } from "react";
import FunGamesSVG from "@/app/assets/images/funGames";
import WorkshopSVG from "@/app/assets/images/workshop";
import MusicSVG from "@/app/assets/images/music";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";

import fun_games_image from "@/app/assets/images/fun_games.webp";
import live_music_image from "@/app/assets/images/live_music_image.webp";
import workshop_image from "@/app/assets/images/workshop_image.webp";

export default function ExpectationCards(): ReactElement {
  const data = [
    {
      title: "Fun Games",
      desc: "Get ready to unleash your competitive spirit and bond with fellow participants.",
      svg: <FunGamesSVG height={40} width={40} />,
      image: fun_games_image,
    },
    {
      title: "Live Music",
      desc: "Take a break from coding and enjoy soulful melodies.",
      svg: <MusicSVG height={40} width={40} />,
      image: live_music_image,
    },
    {
      title: "Workshops",
      desc: "Learn cutting-edge tech from industry experts.",
      svg: <WorkshopSVG height={40} width={40} />,
      image: workshop_image,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const slides = [data[data.length - 1], ...data, data[0]];

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(data.length);
      }, 500);
    }

    if (currentIndex === data.length + 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 500);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="relative w-[90vw] lg:w-[60vw] overflow-hidden">


        <div
          className={`flex ${transition ? "transition-transform duration-500" : ""}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((item, index) => (
            <div key={index} className="min-w-full flex justify-center">
              
              <div className="bg-[#2A0E4A] rounded-xl p-6 flex gap-6 items-center w-[500px]">

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {item.svg}
                    <h2 className="text-white text-lg font-bold">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </div>

              
                <div className="border border-purple-400 rounded-lg p-2">
                  <ExpectationImage imageSrc={item.image} />
                </div>

              </div>

            </div>
          ))}
        </div>

    
        <button
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ❮
        </button>

  
        <button
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ❯
        </button>

      </div>
    </div>
  );
}