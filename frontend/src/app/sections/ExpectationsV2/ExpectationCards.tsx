"use client";
import ExpectationCard from "@/app/components/ExpectationsV2/ExpectationCard";
import { ReactElement, useState, useEffect } from "react";
import ExpectationImage from "@/app/components/ExpectationsV2/ExpectationImage";
import ExpectationsArrow from "@/app/assets/icons/ExpectationsArrow";
import { originalCards } from "./data";

export default function ExpectationCards(): ReactElement {
  const cards = [...originalCards, ...originalCards, ...originalCards];

  const [currentIndex, setCurrentIndex] = useState(originalCards.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [gap, setGap] = useState(98);
  const [cardWidth, setCardWidth] = useState(380);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setGap(98);
        setCardWidth(380);
      } else if (width >= 768) {
        setGap(50);
        setCardWidth(320);
      } else {
        setGap(28);
        setCardWidth(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex >= originalCards.length * 2) {
      setCurrentIndex(currentIndex - originalCards.length);
    } else if (currentIndex < originalCards.length) {
      setCurrentIndex(currentIndex + originalCards.length);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center w-full max-w-[1400px] mx-auto mt-10 items-center gap-10">
      <div className="relative w-full lg:w-[65%] flex flex-col items-center justify-center overflow-hidden">
        <ExpectationsArrow
          onClick={prevSlide}
          className="absolute opacity-30 sm:opacity-100 bottom-[180px] -left-4 sm:bottom-[120px] sm:left-[90px] md:left-24 z-40 p-3 scale-x-[-1] cursor-pointer hover:opacity-100 transition-opacity"
        />
        <ExpectationsArrow
          onClick={nextSlide}
          className="absolute opacity-30 sm:opacity-100 bottom-[180px] -right-4 sm:bottom-[120px] sm:right-[90px] md:right-24 z-40 p-3 cursor-pointer hover:opacity-100 transition-opacity"
        />

        <div
          className="absolute inset-0 z-30 pointer-events-none transform-gpu"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute -left-px top-0 h-full w-16 md:w-40 bg-gradient-to-r from-dark-purple to-transparent" />
          <div className="absolute -right-px top-0 h-full w-16 md:w-40 bg-gradient-to-l from-dark-purple to-transparent" />
        </div>

        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex py-10"
          style={{
            transition: isTransitioning
              ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
            transform: `translateX(calc(50% - ${cardWidth / 2}px - ${currentIndex * (cardWidth + gap)}px))`,
            willChange: "transform",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {cards.map((card, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                style={{
                  minWidth: `${cardWidth}px`,
                  marginRight: `${gap}px`,
                  transition: isTransitioning
                    ? "transform 500ms ease-in-out, opacity 500ms ease-in-out"
                    : "none",
                }}
                className={`flex items-center justify-center ${
                  isActive
                    ? "scale-[1.1] mb-4 md:mb-0 lg:scale-[1.3] opacity-100 z-20"
                    : "scale-[1] opacity-30 z-10"
                }`}
              >
                <div className="flex flex-col justify-center items-center gap-[25px]">
                  <ExpectationImage
                    imageSrc={card.img}
                    className="block lg:hidden"
                  />
                  <ExpectationCard
                    svg={card.svg}
                    title={card.title}
                    description={card.desc}
                    isActive={isActive}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 md:mt-4 mb-6 lg:hidden z-40">
          {originalCards.map((_, dotIndex) => {
            const activeDotIndex = currentIndex % originalCards.length;
            return (
              <div
                key={dotIndex}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeDotIndex === dotIndex
                    ? "bg-white w-2 scale-[1.4]"
                    : "bg-white/20 w-2 scale-100"
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="shrink-0 transition-all duration-500 hidden lg:block">
        <ExpectationImage
          imageSrc={originalCards[currentIndex % originalCards.length].img}
        />
      </div>
    </div>
  );
}