"use client";

import { ReactElement, useState, useEffect } from "react";
import MusicSVG from "@/app/assets/images/music";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";

import live_music_image from "@/app/assets/images/live_music_image.webp";
import fun_games_image from "@/app/assets/images/fun_games.webp";
import workshop_image from "@/app/assets/images/workshop_image.webp";

export default function ExpectationCards(): ReactElement {
  const data = [
    {
      title: "Live Music",
      desc: "Take a break from coding and immerse yourself in the soulful melodies and electrifying beats of live music performances.",
      image: live_music_image,
    },
    {
      title: "Fun Games",
      desc: "Get ready to unleash your competitive spirit and bond with fellow participants through exciting interactive games.",
      image: fun_games_image,
    },
    {
      title: "Workshops",
      desc: "Dive deep into cutting-edge technologies with hands-on sessions led by industry experts to boost your dev skills.",
      image: workshop_image,
    },
  ];

  const slides = [data[data.length - 1], ...data, data[0]];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // FIGMA MATH: 
  // Purple Card (480px) + Image Card overlap (approx 300px visible) = ~780px
  const CARD_WIDTH = 800; 
  const GAP = 100;

  const next = () => {
    if (!transition) return;
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (!transition) return;
    setIndex((i) => i - 1);
  };

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 500);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(data.length);
      }, 500);
    }
  }, [index, data.length, slides.length]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 20);
    }
  }, [transition]);

  return (
    <div className="relative w-full flex justify-center items-center py-20">
      
      {/* LEFT ARROW - Positioned absolutely relative to the viewport */}
      <button
        onClick={prev}
        className="absolute left-[8%] text-white text-[64px] z-50 opacity-50 hover:opacity-100 transition-all select-none"
      >
        ❮
      </button>

      {/* RIGHT ARROW - Positioned absolutely relative to the viewport */}
      <button
        onClick={next}
        className="absolute right-[8%] text-white text-[64px] z-50 opacity-50 hover:opacity-100 transition-all select-none"
      >
        ❯
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full max-w-[1500px]">
        <div
          className={`flex items-center ${transition ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(calc(-${index * (CARD_WIDTH + GAP)}px))`,
            gap: `${GAP}px`,
            paddingLeft: `calc(50% - ${CARD_WIDTH / 2}px)`
          }}
        >
          {slides.map((item, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: CARD_WIDTH }}>
              <div className="relative flex items-center h-[550px]">
                
                {/* PURPLE CARD */}
                <div
                  className="z-10 flex flex-col justify-center shadow-[0px_20px_60px_rgba(0,0,0,0.6)]"
                  style={{
                    width: "520px",
                    height: "380px",
                    borderRadius: "24px",
                    background: "#4A219B",
                    padding: "40px 140px 40px 50px", // Increased right padding for the overlap
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#FFC107] p-3 rounded-full flex items-center justify-center shadow-lg">
                        <MusicSVG height={20} width={20} />
                    </div>
                    <h2 className="text-white text-[32px] font-bold leading-tight">
                        {item.title}
                    </h2>
                  </div>

                  <p className="text-white/80 text-[16px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* FIGMA IMAGE CARD (456x528) */}
                <div className="absolute right-0 z-20 drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]">
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