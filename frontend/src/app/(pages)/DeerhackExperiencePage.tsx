"use client"
import { cabinetExtraBold } from "../utils/fonts"
import leaf_right_deerhack_2025 from "@/app/assets/images/leaf_right_deerhack_2025.svg";
import Image from "next/image"
import ExperienceCard from "../sections/Experience/ExperienceCard"
import { useState, useRef, useEffect } from "react"

export default function ExperiencePage() {
  const [activeCard, setActiveCard] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleDotClick = (index: number) => {
    setActiveCard(index)

    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollPosition = scrollContainerRef.current.scrollLeft
        const cardWidth = scrollContainerRef.current.clientWidth
        const newIndex = Math.round(scrollPosition / cardWidth)

        if (newIndex !== activeCard && newIndex >= 0 && newIndex <= 2) {
          setActiveCard(newIndex)
        }
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [activeCard])

  return (
    <div className="bg-dark-purple flex flex-col py-20 overflow-hidden relative">
        
        <Image
          src={leaf_right_deerhack_2025}
          alt="leaf"
          height={250}
          width={250}
          className="absolute p-0 m-0 right-[-30px]  z-10 hidden xl:block -rotate-12"
        />

      <div className={`${cabinetExtraBold.className} headings w-[17.875rem] md:w-[45rem] md:h-[6rem] text-[1.875rem] md:text-[3.5rem] mb-[3rem]`}>
        The DeerHack Experience
      </div>

      <div className="w-full flex flex-col">
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar p-2 lg:flex lg:justify-center"
        >
          <ExperienceCard activeIndex={activeCard} />
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2  lg:hidden">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeCard === index ? "bg-white scale-100" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`View experience card ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Image
        src={leaf_right_deerhack_2025}
        alt="leaf"
        height={250}
        width={250}
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-1 bottom-0 hidden lg:block"
      />
    </div>
  )
}
