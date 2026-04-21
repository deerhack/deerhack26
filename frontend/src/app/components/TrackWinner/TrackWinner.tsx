
"use client";
import type { ReactElement } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { cabinetBlack, cabinetBold, cabinetRegular } from "@/app/utils/fonts";
import { useEffect, useRef } from "react";

export default function TrackWinner({ scrollProgress }: { scrollProgress: number }): ReactElement {
  const dotLottieRef = useRef<any>(null);

  useEffect(() => {
    if (!dotLottieRef.current) return;
    const anim = dotLottieRef.current;
    const totalFrames = anim.totalFrames;
    const frame = scrollProgress * totalFrames;
    anim.setFrame(frame);
  }, [scrollProgress]);

  return (
    <div className="primary-gradient-background w-[19.985rem] sm:w-[19.985rem] md:w-[23.985rem] lg:w-[26.313rem] h-[20.369rem] sm:h-[20.369rem] md:h-[23.369rem] lg:h-[29.063rem] p-[2px] rounded-[2rem]">
      <div className="bg-[#110C24] flex flex-col h-full w-full rounded-[2rem] justify-between py-8">
       <div className="flex flex-col justify-center gap-4 items-center">
  <div style={{ width: 120, height: 120, marginBottom: "-30px" }}>
    <DotLottieReact
      dotLottieRefCallback={(ref) => { dotLottieRef.current = ref; }}
      src="/animations/confetti.json"
      loop={false}
      autoplay={false}
      style={{ width: 120, height: 120 }}
    />
  </div>
  <div className="flex p-0">
    <p className={`${cabinetBold.className} text-primary-gradient-color font-extrabold text-2xl sm:text-2xl md:text-2xl lg:text-[47px] relative top-[1.3rem]`}>
      Track Winner
    </p>
  </div>
</div>
        <div className="flex flex-col items-start gap-1 lg:gap-2 px-6">
          <p className={`${cabinetRegular.className} text-white  text-xs sm:text-xs md:text-xl lg:text-2xl tracking-wide w-full`}>
            Environment Track Added 
          </p>
          <p className={`${cabinetBlack.className} text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-[#F5C144] `}>
            Rs. 15,000
          </p>
          <p className={`${cabinetRegular.className} text-white text-xs sm:text-xs md:text-xl lg:text-2xl italic tracking-wide w-full`}>
            per track
          </p>
        </div>
      </div>
    </div>
  );
}
