"use client"
import { useEffect, useRef, useState } from "react"
import PlayButtonExpCard from "@/app/assets/images/PlayButtonExpCard"
import PauseButtonExpCard from "@/app/assets/images/PauseButtonExpCard"
import MuteButton from "../assets/images/sponsors/mutebutton"
import BigTopComa from "../assets/images/sponsors/BigTopComa"
import ExpStars from "../assets/images/sponsors/expStars"
import { cabinetExtraBold } from "../utils/fonts"
import SamipLamsal from "../assets/images/sponsors/SamipLamsal"
import NischalTamang from "../assets/images/sponsors/NischalTamang"
import UnMuteButton from "../assets/images/sponsors/UnMuteButton"
import MalaDeep from "../assets/images/sponsors/MalaDeep"
import StarsExpCard from "../assets/images/sponsors/StarsExpCard"

export default function ExperiencePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const videoId = "VGlzJgzTvWg" 

  const postCommand = (func: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "https://www.youtube-nocookie.com"
      )
    }
  }

  const handleDotClick = (index: number) => {
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
      setActiveCard(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollLeft = container.scrollLeft;
        const width = container.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        if (newIndex !== activeCard && newIndex >= 0 && newIndex <= 2) {
          setActiveCard(newIndex);
        }
      }
    };
    const scrollArea = scrollContainerRef.current;
    scrollArea?.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollArea?.removeEventListener("scroll", handleScroll);
  }, [activeCard]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (hasLoadedOnce) {
          if (entry.isIntersecting) { postCommand("playVideo"); setIsPlaying(true) }
          else { postCommand("pauseVideo"); setIsPlaying(false) }
        }
      })
    }, { threshold: 0.6 })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasLoadedOnce])

  useEffect(() => { if (hasLoadedOnce) postCommand(isMuted ? "mute" : "unMute") }, [isMuted, hasLoadedOnce])

  const togglePlay = () => {
    if (!hasLoadedOnce) { setHasLoadedOnce(true); setIsPlaying(true) }
    else { const next = !isPlaying; setIsPlaying(next); postCommand(next ? "playVideo" : "pauseVideo") }
  }

  return (
    <div className="bg-dark-purple min-h-screen overflow-x-hidden">
      <div className={`${cabinetExtraBold.className} headings w-full max-w-[1640px] mx-auto text-[1.875rem] md:text-[3.5rem] mb-[3rem] text-white px-4 md:px-10 pt-10`}
        style={{ background: "linear-gradient(150.54deg,#6633CC 30.7% ,rgb(245, 193, 68, 1) 70.29%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        The DeerHack Experience
      </div>

      <section className="text-white pb-20 px-4 md:px-10 flex justify-center">
        <div className="max-w-[1640px] w-full flex flex-col lg:flex-row gap-8 items-stretch">
          
          <div ref={containerRef} className="w-full lg:w-[467px] aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl bg-black group shrink-0 self-start">
            <div className="absolute inset-0 w-full h-full cursor-pointer z-0" onClick={togglePlay}>
              {hasLoadedOnce ? (
                <iframe ref={iframeRef} className="absolute inset-0 w-full h-full pointer-events-none" src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`} allow="autoplay; encrypted-media" />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` }}>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all"><PlayButtonExpCard /></div>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button onClick={togglePlay} className="w-12 h-12 flex items-center justify-center">{isPlaying ? <PauseButtonExpCard /> : <PlayButtonExpCard />}</button>
                <div>
                  <p className="font-extrabold text-lg">Moments of Deerhack</p>
                  <p className="text-xs opacity-60">2025</p>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }} className="w-10 h-10 flex items-center justify-center">
                {isMuted ? <UnMuteButton /> : <MuteButton />}
              </button>
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col gap-7 self-stretch overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex md:flex-col overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar gap-4 md:gap-7 md:flex-1"
            >
              <div ref={el => cardRefs.current[0] = el} className="min-w-full md:min-w-0 snap-center md:flex-1 md:flex">
                <div className="bg-[rgba(33,24,68,1)] p-6 md:p-10 rounded-[25px] flex-1 relative border border-white/10 border-t-2 border-t-yellow-400 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0"><MalaDeep/></div>
                      <div>
                        <h3 className="text-xl md:text-4xl font-bold leading-tight text-white">Mala Deep Upadhaya</h3>
                        <p className="text-sm md:text-base opacity-60 text-white/60 font-medium">Mentor</p>
                      </div>
                      <div className="hidden md:block ml-auto w-15 md:w-20 opacity-40"><BigTopComa /></div>
                    </div>
                    <p className="md:pt-8 text-sm md:text-base lg:text-lg font-bold text-white leading-relaxed">
                      “Mentoring at DeerHack was an incredibly fulfilling experience. The participants brought <span className="text-yellow-400">great energy</span>, creativity, and a genuine eagerness to learn, while the volunteers ensured everything ran smoothly with their constant dedication. The welcoming and collaborative environment made it easy to <span className="text-yellow-400">build together</span>; it’s truly an inspiring community to be part of.”
                    </p>
                  </div>
                  <div className="mt-6 text-yellow-500"><ExpStars /></div>
                </div>
              </div>

              <div className="contents md:grid md:grid-cols-2 gap-6">
                <div ref={el => cardRefs.current[1] = el} className="min-w-full md:min-w-0 snap-center">
                  <div className="bg-[rgba(36,26,74)] p-6 md:p-8 rounded-[20px] border border-white/10 border-t-2 border-t-yellow-400 flex flex-col justify-between shadow-lg h-full gap-5">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0"><NischalTamang/></div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white">Nischal Tamang</h4>
                        <p className="text-xs md:text-sm opacity-60 text-white/60">Participant</p>
                      </div>
                    </div>
                    <p className="text-base md:text-base font-bold text-white mb-2 leading-relaxed">
                    “One of the <span className="text-yellow-400">best</span> hackathons and the event management was very good, providing a <span className="text-yellow-400">seamless experience</span> and a supportive atmosphere that truly exceeded all expectations.”
                    </p>
                    <div className="text-yellow-500"><ExpStars/></div>
                  </div>
                </div>

                <div ref={el => cardRefs.current[2] = el} className="min-w-full md:min-w-0 snap-center">
                  <div className="bg-[rgba(36,26,74)] p-6 md:p-8 rounded-[20px] border border-white/10 border-t-2 border-t-yellow-400 flex flex-col justify-between shadow-lg h-full gap-5">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0"><SamipLamsal/></div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white">Samip Lamsal</h4>
                        <p className="text-xs md:text-sm opacity-60 text-white/60">Participant</p>
                      </div>
                    </div>
                    <p className="text-base md:text-base font-bold text-white mb-2 leading-relaxed">
                     “DeerHack was my third national hackathon and by far the <span className="text-yellow-400">best organized</span> and managed one I've attended, making it a truly <span className="text-yellow-400">memorable experience</span> that set a new standard for future events.”
                    </p>
                    <div className="text-yellow-500"><StarsExpCard/></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-2 space-x-2 md:hidden">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeCard === i ? "bg-white w-6" : "bg-white/30 w-2"}`}
                />
              ))}
            </div>

            <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-[rgb(102,51,204,0.78)] p-6 rounded-[25px] flex justify-center items-center hover:bg-purple-600 transition-all cursor-pointer group border border-white/5">
              <p className="text-[18px] md:text-xl font-semibold text-white text-center">
                Want to create your own experience? <span className="text-yellow-400 font-bold underline ml-2 group-hover:text-white">Join Now!</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


/* OLD CODE - FOR BACKUP IN EMERGENCY */

/*
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
  
*/