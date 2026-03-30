"use client";

import { ReactElement, useState, useEffect } from "react";
import MusicSVG from "@/app/assets/images/music";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";

import live_music_image from "@/app/assets/images/live_music_image.webp";
import fun_games_image from "@/app/assets/images/fun_games.webp";
import workshop_image from "@/app/assets/images/workshop_image.webp";


export default function ExpectationCards() {

  const data = [
    {
      title: "Live Music",
      desc: "Take a break from coding and enjoy soulful melodies.",
      image: live_music_image,
    },
    {
      title: "Fun Games",
      desc: "Unleash your spirit and bond with fellow participants.",
      image: fun_games_image,
    },
    {
      title: "Workshops",
      desc: "Learn cutting-edge tech from industry experts.",
      image: workshop_image,
    },
  ];

  const slides = [data[data.length - 1], ...data, data[0]];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const CARD_WIDTH = 780; // exact visual width
  const GAP = 60;

  const next = () => {
    if (!transition) return;
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (!transition) return;
    setIndex((i) => i - 1);
  };

  // infinite loop fix
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
  }, [index]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 20);
    }
  }, [transition]);

  return (
    <div className="relative w-full flex justify-center items-center">

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-[5%] text-white text-[48px] z-50 opacity-60 hover:opacity-100 transition"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-[5%] text-white text-[48px] z-50 opacity-60 hover:opacity-100 transition"
      >
        ❯
      </button>

      <div className="overflow-hidden w-full max-w-[1400px]">

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

              <div className="relative flex items-center">

                {/* PURPLE CARD */}
                <div
                  className="z-10 flex flex-col justify-center"
                  style={{
                    width: "480px",
                    height: "340px",
                    borderRadius: "24px",
                    background: "#4A219B",
                    padding: "40px 120px 40px 40px",
                    boxShadow: "0px 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  <h2 className="text-white text-[30px] font-bold mb-4">
                    {item.title}
                  </h2>

                  <p className="text-white/80 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* IMAGE CARD (OVERLAP MAGIC) */}
                <div className="absolute right-0 translate-x-[30%] z-20">
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