"use client"
import { useEffect, useRef, useState } from "react"
import PlayButtonExpCard from "@/app/assets/images/PlayButtonExpCard"
import PauseButtonExpCard from "@/app/assets/images/PauseButtonExpCard"
import MuteButton from "../assets/images/sponsors/mutebutton"
import BigTopComa from "../assets/images/sponsors/BigTopComa"
import ExpStars from "../assets/images/sponsors/expStars"
import { cabinetExtraBold } from "../utils/fonts"
import DeerExpCardFirst from "../assets/images/DeerExpCardFirst"
import DeerExpCardSecond from "../assets/images/DeerExpCardSecond"
import DeerExpCardThird from "../assets/images/DeerExpCardThird"
import SamipLamsal from "../assets/images/sponsors/SamipLamsal"
import NischalTamang from "../assets/images/sponsors/NischalTamang"
import UnMuteButton from "../assets/images/sponsors/UnMuteButton"
import { MIDDLEWARE_LOCATION_REGEXP } from "next/dist/lib/constants"
import MalaDeep from "../assets/images/sponsors/MalaDeep"

export default function ExperiencePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false)
  
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const videoId = "VGlzJgzTvWg" 

  const postCommand = (func: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "https://www.youtube-nocookie.com"
      )
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (hasLoadedOnce) {
            if (entry.isIntersecting) {
              postCommand("playVideo")
              setIsPlaying(true)
            } else {
              postCommand("pauseVideo")
              setIsPlaying(false)
            }
          }
        })
      },
      { threshold: 0.6 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasLoadedOnce])

  useEffect(() => {
    if (hasLoadedOnce) {
      postCommand(isMuted ? "mute" : "unMute")
    }
  }, [isMuted, hasLoadedOnce])

  const togglePlay = () => {
    if (!hasLoadedOnce) {
      setHasLoadedOnce(true)
      setIsPlaying(true)
    } else {
      const nextState = !isPlaying
      setIsPlaying(nextState)
      postCommand(nextState ? "playVideo" : "pauseVideo")
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation() 
    setIsMuted(!isMuted)
  }

  return (
    <div className="bg-dark-purple min-h-screen">
      <div className={`${cabinetExtraBold.className} headings w-full max-w-[1640px] mx-auto text-[1.875rem] md:text-[3.5rem] mb-[3rem] text-white px-4 md:px-10 pt-10`}
        style={{
          background: "linear-gradient(150.54deg,#6633CC 30.7% ,rgb(245, 193, 68, 1) 70.29%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        The DeerHack Experience
      </div>

      <section className="text-white pb-20 px-4 md:px-10 flex justify-center">
        <div className="max-w-[1640px] w-full flex flex-col lg:flex-row gap-8 items-start">
          
          <div 
            ref={containerRef}
            className="w-full lg:w-[467px] aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl bg-black group shrink-0"
          >
           <div className="absolute inset-0 w-full h-full cursor-pointer z-0" onClick={togglePlay}>
              
              {hasLoadedOnce ? (
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ border: 'none' }}
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
                  allow="autoplay; encrypted-media"
                />
              ) : (
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` }}
                >
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all">
                    <div className="transition-transform group-hover:scale-110">
                       <PlayButtonExpCard />
                     </div>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-t border-white/10">
              <div className="flex items-center justify-between px-6 py-6 md:px-8">
                <div className="flex items-center gap-4">
                  <button onClick={togglePlay} className="flex items-center justify-center transition-all hover:scale-105 active:scale-95">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {isPlaying ? <PauseButtonExpCard /> : <PlayButtonExpCard />}
                    </div>
                  </button>
                  <div className="flex flex-col">
                    <p className="font-extrabold text-lg md:text-xl leading-tight">Moments of Deerhack</p>
                    <p className="text-xs md:text-sm opacity-60 font-medium text-white/70">2025</p>
                  </div>
                </div>
        
                <button onClick={toggleMute} className="transition-all hover:scale-110 active:scale-90 shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center text-white">
                    { isMuted ? <UnMuteButton/>: <MuteButton />} 
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 flex flex-col gap-7">
            <div className="bg-[rgba(33,24,68,1)] p-6 md:p-10 rounded-[25px] flex-1 relative border border-white/10 border-t-2 border-t-yellow-400 flex flex-col justify-between shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0"><MalaDeep/></div>
                <div>
                  <h3 className="text-xl md:text-4xl font-bold leading-tight text-white">Mala Deep Upadhaya</h3>
                  <p className="text-sm md:text-base opacity-60 text-white font-medium text-white/60">Mentor</p>
                </div>
                <div className="hidden md:block ml-auto w-6 md:w-12 opacity-40"><BigTopComa /></div>
              </div>
              <p className="mt-2 mb-5 md:text-base font-bold text-white">
                “Mentoring at DeerHack was an incredibly fulfilling experience. <span className="text-yellow-400">The participants brought great energy, creativity, and a genuine eagerness to learn,</span>,while the volunteers ensured everything ran smoothly with their constant dedication. The welcoming and collaborative environment made <span className="text-yellow-400">it easy to connect, share ideas, and build together</span>, it’s truly an inspiring community to be part of.”
              </p>

              <div className="mt-2 text-yellow-500"><ExpStars /></div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-6">
              <div className="min-h-[261px] bg-[rgba(36,26,74)] p-6 md:p-8 rounded-[20px] border border-white/10 border-t-2 border-t-yellow-400 flex flex-col items-start justify-center shadow-lg gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0"><NischalTamang/></div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Nischal Tamang</h4>
                    <p className="text-xs md:text-sm opacity-60 text-white/60">Participant</p>
                  </div>
                </div>
                <p className="text-base md:text-base font-bold text-white mb-2">
                  “One of the best hackathons<span className="text-yellow-400"> and the event management was very good</span> and truly exceeded all expectations.”
                </p>
                <div className="text-yellow-500"><ExpStars /></div>
              </div>

              <div className="min-h-[261px] bg-[rgba(36,26,74)] p-6 md:p-8 rounded-[20px] border border-white/10 border-t-2 border-t-yellow-400 flex flex-col justify-center shadow-lg gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0"><SamipLamsal/></div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Samip Lamsal</h4>
                    <p className="text-xs md:text-sm opacity-60 text-white/60">Participant</p>
                  </div>
                </div>
                <p className="text-base md:text-base font-bold text-white mb-2">
                “ DeerHack was my third national hackathon<span className="text-yellow-400"> and by far the best organized and managed one I've attended. </span> ”
              </p>
                <div className="text-yellow-500"><ExpStars /></div>
              </div>
            </div>

            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[rgb(102,51,204,0.78)] p-6 md:p-6 rounded-[25px] flex justify-center items-center hover:bg-purple-600 transition-all cursor-pointer group border border-white/5"
            >
              <p className="text-base md:text-xl font-semibold text-center text-white">
                Want to create your own experience? 
                <span className="text-yellow-400 font-bold underline ml-2 group-hover:text-white transition-colors">Join Now!</span>
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