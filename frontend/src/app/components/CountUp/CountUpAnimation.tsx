"use client"
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cabinetBold, cabinetRegular } from "@/app/utils/fonts"

gsap.registerPlugin(ScrollTrigger)

interface CountdownProps{
    target: number;
    isExtra: boolean;
    time?: number;
    className?: string;
}

const CountUpAnimation = ({target, isExtra, time = 2, className = ""} : CountdownProps) => {

    const numberRef = useRef<HTMLParagraphElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() =>{
        const ctx = gsap.context(() =>{
            const countObj = {val : 0}
            gsap.to(countObj, {
                val: target,
                duration: time,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 95%",
                    toggleActions: "play none none none",
                    // markers: true // debugging ko bela only
                },
                onUpdate: () => {
                    if(numberRef.current){
                        const currentVal  = Math.floor(countObj.val);
                        const formatted = currentVal
                        numberRef.current.innerText = isExtra ? `${formatted}+` : `${formatted}`
                    }
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [target, isExtra, time])
    
    return (
    <div className='tabular-nums' ref={containerRef}>
        <p ref={numberRef} className={`${cabinetRegular.className} ${className}`}>0{isExtra && "+"}</p>
    </div>
    )
}

export default CountUpAnimation