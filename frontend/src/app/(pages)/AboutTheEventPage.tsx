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
import DarinCupPhone from "../assets/icons/DarinCupPhone";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const allIcons = gsap.utils.toArray<HTMLElement>(
				".phone-event-icon, .event-icon",
			);

			allIcons.forEach((icon) => {
				const isMobile = window.innerWidth < 768;
				const targetRotate =
					isMobile && icon.classList.contains("phone-event-icon") ? -15 : 0;

				gsap.fromTo(
					icon,
					{ x: -600, rotate: -180, opacity: 0 },
					{
						x: 0,
						rotate: targetRotate,
						duration: 1,
						opacity: 1,
						ease: "expo.out",
						scrollTrigger: {
							trigger: icon,
							start: isMobile ? "top 90%" : "top 95%",
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

			const tl_ph = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top 40%",
					toggleActions: "play none none reverse",
				},
			});

			tl_ph.fromTo(
				".darin-anim-ph",
				{ yPercent: 100, rotate: 20, opacity: 0 },
				{
					yPercent: 0,
					rotate: 0,
					opacity: 1,
					duration: 1.5,
					ease: "power2.out",
				},
			);
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
				className="phone-event-icon md:event-icon absolute bottom-[120px] md:-left-[5px] md:bottom-[8%] w-[137px] h-[118px] md:w-[354px] md:h-[306px]"
			/>
			<CoffeCup
				height={170}
				width={124}
				className="z-50 phone-event-icon md:event-icon absolute bottom-[230px] md:left-[38px] md:bottom-[38%] w-[48px] h-[56px] md:w-[124px] md:h-[170px]"
			/>

			{/* For Large Screens */}
			<DarinCup
				height={600}
				width={420}
				className="darin-anim absolute z-50 bottom-[-130px] right-[-160px] hidden md:block"
			/>
			{/* For Phone  Screens */}
			<DarinCupPhone className="darin-anim-ph absolute z-50 right-0 bottom-[50px] block md:hidden" />

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
				className="phone-event-icon md:event-icon absolute left-[95px] bottom-[110px] md:bottom-[-25px] md:left-[200px] z-50 pointer-events-none w-[138px] h-[147px] md:h-[381px] md:w-[358px]"
			/>
		</div>
	);
}
