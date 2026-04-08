"use client"
import { useEffect, useRef, useState } from "react"
import PlayButton from "../assets/images/sponsors/playbutton"
import MuteButton from "../assets/images/sponsors/mutebutton"
import WhiteEllipse from "../assets/images/sponsors/WhiteEllipse"
import BigTopComa from "../assets/images/sponsors/BigTopComa"
import ExpStars from "../assets/images/sponsors/expStars"
import { cabinetExtraBold } from "../utils/fonts"

export default function ExperiencePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false)
  
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const videoId = "eC5j9NO3Lmc" 

  const postCommand = (func: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      )
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (hasLoadedOnce) {
              postCommand("playVideo")
              setIsPlaying(true)
            }
          } else {
            postCommand("pauseVideo")
            setIsPlaying(false)
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
      <div className={`${cabinetExtraBold.className} headings w-full max-w-[1640px] mx-auto text-[1.875rem] md:text-[3.5rem] mb-[3rem] text-white px-4 md:px-10`}
        style={{
          background: "linear-gradient(150.54deg,#6633CC 30.7% ,rgb(245, 193, 68, 1) 70.29%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        The DeerHack Experience
      </div>

      <section className="text-white py-10 md:py-20 px-4 md:px-10 flex justify-center">
        <div className="max-w-[1640px] w-full flex flex-col lg:flex-row gap-8">
          
          <div 
            ref={containerRef}
            className="w-full lg:w-[467px] h-[500px] md:h-[600px] lg:h-[694px] relative rounded-3xl overflow-hidden shadow-2xl bg-black group"
          >

           <div 
            className="absolute inset-0 w-full h-full cursor-pointer z-0"
            onClick={togglePlay}
            >

{/*<iframe
  ref={iframeRef}
  className={`absolute top-1/2 left-1/2 pointer-events-none transition-opacity duration-500 ${hasLoadedOnce ? 'opacity-100' : 'opacity-0'}`}
  style={{ 
    width: '100%', 
    height: '100%', 
    border: 'none',
    transform: 'translate(-50%, -50%) scale(1.5, 2.8)', 
    transformOrigin: 'center',
    objectFit: 'cover'
  }}
  src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}&iv_load_policy=3&disablekb=1`}
  allow="autoplay; encrypted-media"
/> */}

            {<iframe
              ref={iframeRef}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-video pointer-events-none transition-opacity duration-500 ${hasLoadedOnce ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
              border: 'none',
               }}
               src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}&iv_load_policy=3`}
              allow="autoplay; encrypted-media"
              />                }

          {!hasLoadedOnce && (
             <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="transition-transform group-hover:scale-110">
                     <PlayButton isPlaying={false} />
                   </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[142px] z-10" style={{ background: 'rgba(0, 0, 0, 0.48)',}} />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-20">
              <div className="flex items-center">
                <button onClick={togglePlay} className="flex items-center justify-center transition-all active:scale-95">
                  <PlayButton isPlaying={isPlaying} />
                </button>
                <div className="ml-3 md:ml-4">
                  <p className="font-extrabold text-lg md:text-2xl">Moments of Deerhack</p>
                  <p className="text-sm opacity-80">2025</p>
                </div>
              </div>
              <button onClick={toggleMute} className="transition-all active:scale-90">
                <MuteButton isMuted={isMuted} />
              </button>
            </div>
          </div>


          <div className="flex-1 flex flex-col gap-6">

  <div className="bg-[rgba(33,24,68,1)] p-6 md:p-10 rounded-[25px] min-h-[300px] relative border border-white/10 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-12 md:w-12 lg:w-20">
          <WhiteEllipse />
        </div>
        <div>
          <h3 className="text-xl md:text-[27.68px] font-cabinet-light font-extrabold leading-tight text-white">Alex Ford</h3>
          <p className="text-xs opacity-60 text-white">CEO</p>
        </div>
        <div className="ml-auto w-8 md:w-16 lg:w-20 opacity-60">
          <BigTopComa />
        </div>
      </div>
      <p className="text-lg md:text-xl font-extrabold leading-relaxed text-white">
        “ Hi i am Alex Ford the <span className="text-yellow-400">CEO of World Bank</span> I really enjoyed the deerhack 2025 and want to be a part of it next year <span className="text-yellow-400">DeerHack</span> is really the best hackathon”
      </p>
    </div>
    <div className="mt-6 text-yellow-500 text-xl md:text-2xl">
      <ExpStars />
    </div>
  </div>


  <div className="hidden md:grid md:grid-cols-2 gap-6">
    

    <div className="bg-[rgba(36,26,74)] opacity-[0.87] p-6 rounded-[12px] border border-white/10 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12">
            <WhiteEllipse />
          </div>
          <div>
            <h4 className="text-lg font-extrabold text-white">Ryan Hood</h4>
            <p className="text-[10px] opacity-60 text-white">Manager</p>
          </div>
        </div>
        <p className="text-base md:text-lg font-extrabold leading-tight text-white">
          “ Hi i am Ryan Hood <span className="text-yellow-400">Manager at Supabase</span> the deerhack 2025 is what i had never seen and want to be a part of it next year! ”
        </p>
      </div>
      <div className="mt-4 text-yellow-500 text-sm">
        <ExpStars />
      </div>
    </div>


    <div className="bg-[rgba(36,26,74)] opacity-[0.87] p-6 rounded-[12px] border border-white/10 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12">
            <WhiteEllipse />
          </div>
          <div>
            <h4 className="text-lg font-extrabold text-white">Amber Shorty</h4>
            <p className="text-[10px] opacity-60 text-white">Product Manager</p>
          </div>
        </div>
        <p className="text-base md:text-lg font-extrabold leading-tight text-white">
          “ Hi i am Amber Shorty, <span className="text-yellow-400">PM at Google</span>. The atmosphere at <span className="text-yellow-400">DeerHack</span> was absolutely amazing! ”
        </p>
      </div>
      <div className="mt-4 text-yellow-500 text-sm">
        <ExpStars />
      </div>
    </div>

  </div>
<div 
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="bg-[rgb(102,51,204,0.78)] p-6 md:p-8 rounded-[25px] flex justify-center items-center hover:bg-purple-600 transition-all cursor-pointer group"
>
  <p className="text-base md:text-xl font-medium text-center text-white">
    Want to create your own experience? 
    <span className="text-yellow-400 font-bold underline ml-1 group-hover:text-white transition-colors">
      Join Now!
    </span>
  </p>
</div>
</div>
</div>
      </section>
    </div>
  )
}