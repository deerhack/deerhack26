"use client";
import ExpectationCard from "@/app/components/ExpectationsV2/ExpectationCard";
import { ReactElement, useState, useRef } from "react";
import ExpectationImage from "@/app/components/ExpectationsV2/ExpectationImage";
import ExpectationsArrow from "@/app/assets/icons/ExpectationsArrow";
import { originalCards } from "./data";

export default function ExpectationCards(): ReactElement {
  const cards = [...originalCards, ...originalCards, ...originalCards];

  const [currentIndex, setCurrentIndex] = useState(originalCards.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cardWidth = 380;
  const gap = 98;

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
      <div className="relative w-full lg:w-[65%] flex items-center justify-center overflow-hidden">
        <ExpectationsArrow
          onClick={prevSlide}
          className="absolute left-24 z-40 p-3 scale-x-[-1]"
        />
        <ExpectationsArrow
          onClick={nextSlide}
          className="absolute right-24 z-40 p-3"
        />

        <div
          className="absolute inset-0 z-30 pointer-events-none
          before:absolute before:left-0 before:top-0 before:h-full before:w-40 before:bg-gradient-to-r before:from-dark-purple before:to-transparent
          after:absolute after:right-0 after:top-0 after:h-full after:w-40 after:bg-gradient-to-l after:from-dark-purple after:to-transparent"
        />

        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex py-10"
          style={{
            transition: isTransitioning
              ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
            transform: `translateX(calc(50% - ${cardWidth / 2}px - ${currentIndex * (cardWidth + gap)}px))`,
          }}
        >
          {cards.map((card, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                style={{ minWidth: `${cardWidth}px`, marginRight: `${gap}px` }}
                className={`transition-all duration-500 ease-in-out ${
                  isActive
                    ? "scale-[1.3] opacity-100 z-20"
                    : "scale-[1] opacity-30 z-10"
                }`}
              >
                <ExpectationCard
                  svg={card.svg}
                  title={card.title}
                  description={card.desc}
                  isActive={isActive}
                />
              </div>
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
