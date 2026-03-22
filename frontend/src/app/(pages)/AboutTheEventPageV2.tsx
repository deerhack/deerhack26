"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import DarinCropped from "@/iconsDarinCropped";
import about_right from "@/app/assets/images/AboutRight.svg";
import AboutCard from "../components/AboutV2/AboutCardV2";
import { cabinetExtraBold } from "../utils/fonts";

gsap.registerPlugin(ScrollTrigger);

const AboutTheEventPageV2 = () => {
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
						opacity: 1,
						ease: "power2.out",
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
					trigger: ".about-card-container",
					start: "top 85%",
					toggleActions: "play none none reverse",
					// markers: true,
				},
			});

			tl.fromTo(
				".interactive-btn-anim",
				{ scale: 0, opacity: 0 },
				{
					scale: 1,
					opacity: 1,
					duration: 2,
					ease: "back.out(1.7)",
				},
			).fromTo(
				".darin-anim",
				{ yPercent: 100, rotate: 20, opacity: 0 },
				{
					yPercent: 0,
					rotate: 0,
					opacity: 1,
					duration: 1.5,
					ease: "power2.out",
				},
				"<",
			);
		},
		{ scope: container },
	);

	return (
		<div
			ref={container}
			id="trigger-zone"
			className="pt-[100px] pb-[80px] bg-[#110C24] flex justify-center items-center relative"
		>
			<img
				src={about_right}
				alt="right leaf"
				height={400}
				className="absolute top-0 right-0 xl:block hidden"
			/>
			<div className="pb-80 pt-[100px] w-full flex flex-col justify-center items-center">
				<h1
					className={`${cabinetExtraBold.className} mb-[3rem] headings lg:text-[]`}
				>
					About The Event
				</h1>

				<div className="about-card-container w-full flex justify-center">
					<AboutCard />
				</div>

				<DarinCropped className="darin-anim absolute right-0 -bottom-[5%] w-100 hidden 2xl:flex" />
			</div>
		</div>
	);
};

export default AboutTheEventPageV2;
