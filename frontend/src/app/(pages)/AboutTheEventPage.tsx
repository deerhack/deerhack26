"use client";
import React, { useRef } from "react";
import AboutTheEventCards from "../sections/AboutTheEvent/AboutTheEventCards";
import { cabinetExtraBold } from "@/fonts";
import Laptop from "@/app/assets/icons/Laptop";
import CoffeCup from "@/app/assets/icons/CoffeeCup";
import DarinCup from "@/app/assets/icons/DarinCup";
import Guitar from "@/app/assets/icons/Guitar";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const icons = gsap.utils.toArray<HTMLElement>(".event-icon");
			icons.forEach((icon) => {
				gsap.fromTo(
					icon,
					{ x: -600, rotate: -180, opacity: 0 },
					{
						x: 0,
						rotate: 0,
						duration: 1,
						opacity: 1,
						ease: "expo.out",
						scrollTrigger: {
							trigger: icon,
							start: "top 95%",
							toggleActions: "play none none reverse",
							invalidateOnRefresh: true,
						},
					},
				);
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			});

			tl.fromTo(
				".darin-anim",
				{ yPercent: 100, rotate: 20, opacity: 0 },
				{
					yPercent: 0,
					rotate: 0,
					opacity: 1,
					duration: 1.5,
					ease: "power2.out",
				},
			);
		},
		{ scope: container },
	);

	return (
		<div ref={container} className="relative overflow-hidden">
			<Laptop
				height={306}
				width={354}
				className="event-icon absolute -left-[5px] bottom-[8%]"
			/>
			<CoffeCup
				height={170}
				width={124}
				className="event-icon absolute left-[38px] bottom-[38%]"
			/>

			<DarinCup
				height={600}
				width={420}
				className="darin-anim absolute right-[-160px] bottom-[-10px]"
			/>

			<div className="pb-[280px] pt-[100px]">
				<h1
					className={`${cabinetExtraBold.className} mb-[3rem] headings lg:text-[55px]`}
				>
					About The Event
				</h1>
				<AboutTheEventCards />
			</div>

			<Guitar
				height={381}
				width={358}
				className="event-icon absolute bottom-[-25px] left-[200px] z-50 pointer-events-none"
			/>
		</div>
	);
}
