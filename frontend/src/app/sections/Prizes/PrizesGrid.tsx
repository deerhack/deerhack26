"use client";
import { ReactElement, useRef, useEffect, useState } from "react";
import GrandPrizeCard from "@/app/components/GrandPrize/GrandPrizeCard";
import SwagPrizes from "@/app/components/OtherPrizes/SwagPrizes";
import TrackWinner from "@/app/components/TrackWinner/TrackWinner";
import OtherPrizes from "@/app/components/OtherPrizes/OtherPrizes";
import GiftBox from "@/app/assets/images/giftbox";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PrizesGrid(): ReactElement {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex lg:flex-row flex-col gap-5 justify-center lg:items-start items-center mt-10"
    >
      <div className="w-fit h-fit">
        <GrandPrizeCard scrollProgress={scrollProgress} />
      </div>
      <div className="flex flex-col gap-5 w-fit justify-center items-center">
        <div className="flex lg:flex-row flex-col h-fit gap-5 md:items-center">
        <TrackWinner scrollProgress={scrollProgress} />
          <SwagPrizes scrollProgress={scrollProgress} />
        </div>
        <div className="">
          <OtherPrizes svg={<GiftBox width={120} height={120} />} />
        </div>
      </div>
    </div>
  );
}