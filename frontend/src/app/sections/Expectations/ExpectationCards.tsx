"use client";

import { ReactElement, useState, useEffect, useCallback } from "react";
import { StaticImageData } from "next/image";
import MusicSVG from "@/app/assets/images/music";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";

import live_music_image from "@/app/assets/images/live_music_image.webp";
import fun_games_image from "@/app/assets/images/fun_games.webp";
import workshop_image from "@/app/assets/images/workshop_image.webp";

interface ExpectationData {
  title: string;
  desc: string;
  image: StaticImageData;
}

export default function ExpectationCards(): ReactElement {
  const data: ExpectationData[] = [
    { title: "Live Music", desc: "Take a break from coding and immerse yourself in the soulful melodies and electrifying beats.", image: live_music_image },
    { title: "Fun Games", desc: "Get ready to unleash your competitive spirit and bond with fellow participants.", image: fun_games_image },
    { title: "Workshops", desc: "Learn cutting-edge tech from industry experts and enhance your skills.", image: workshop_image },
  ];

  const slides = [data[data.length - 1], ...data, data[0]];
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const next = useCallback(() => {
    if (!transition) return;
    setIndex((i) => i + 1);
  }, [transition]);

  const prev = useCallback(() => {
    if (!transition) return;
    setIndex((i) => i - 1);
  }, [transition]);

  useEffect(() => {
    if (index === slides.length - 1 || index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(index === 0 ? data.length : 1);
      }, 500);
    }
  }, [index, data.length, slides.length]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 20);
    }
  }, [transition]);

  return (
    <div className="relative w-full flex flex-col items-center py-20 overflow-hidden">
      
      {/* 1. NAVIGATION BUTTONS 
          Width is calculated so the right 'nose' is exactly 69px from the image card.
          Calculation: Purple(705.44) + Gap(158.76) + Image(456) + (GapToSlider 69 * 2) 
      */}
      <div className="absolute top-1/2 -translate-y-1/2 z-50 flex items-center justify-between w-[900px] pointer-events-none">
        <button 
          onClick={prev} 
          className="text-white text-[64px] opacity-40 hover:opacity-100 transition-all select-none pointer-events-auto"
          style={{ transform: 'translateX(-40px)' }} // Nudge to handle character width
        >
          ❮
        </button>
        <button 
          onClick={next} 
          className="text-white text-[64px] opacity-40 hover:opacity-100 transition-all select-none pointer-events-auto"
          style={{ transform: 'translateX(40px)' }}
        >
          ❯
        </button>
      </div>

      <div className="w-full">
        <div
          className={`flex items-center ${transition ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            // 2. SLIDER TRACK MOVEMENT
            // Unit width (1320.2) + Gap between groups (100)
            transform: `translateX(calc(-${index * (1320.2 + 100)}px))`,
            gap: `100px`, 
            paddingLeft: `calc(50% - ${1320.2 / 2}px)`
          }}
        >
          {slides.map((item, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: "1320.2px" }}>
              <div className="relative flex items-center h-[580px]">
                
                {/* 3. PURPLE CARD - Opacity 0.6 applied via RGBA to keep text clear */}
                <div
                  className="z-10 flex flex-col justify-center shadow-2xl"
                  style={{ 
                    width: "705.44px", 
                    height: "548px",
                    background: "rgba(74, 33, 155, 0.6)", 
                    borderRadius: "17.97px",
                    padding: "60px"
                  }}
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="bg-[#FFC107] p-4 rounded-full flex items-center justify-center">
                        <MusicSVG height={24} width={24} />
                    </div>
                    <h2 className="text-white text-[38px] font-bold">{item.title}</h2>
                  </div>
                  <p className="text-white/90 text-[18px] leading-relaxed max-w-[420px]">{item.desc}</p>
                </div>

                {/* 4. IMAGE CARD - Left position is Purple Width + 158.76 Gap */}
                <div 
                  className="absolute z-20 drop-shadow-[-30px_30px_60px_rgba(0,0,0,0.5)]"
                  style={{ left: `${705.44 + 158.76}px` }}
                >
                  <ExpectationImage imageSrc={item.image} />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}