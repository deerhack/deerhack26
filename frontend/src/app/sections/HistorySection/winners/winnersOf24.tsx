"use client";
import { useState } from "react";
import { cabinetExtraBold } from "@/app/utils/fonts";
import QuotesCard from "@/app/components/Quotes/QuotesCard";
import DeerHack24Legacy from "@/app/components/Legacy/DeerHack24Legacy";
import CarouselImage from "@/app/components/Legacy/CarouselImage";
import Winners23SVG from "@/app/assets/images/legacyWinners23SVG";
import LegacyDemoSVG from "../../../assets/images/legacyWinners23SVG";
import IdeaSVG from "@/app/assets/images/idea";
import { data } from "../data";
import ArrowSVG from "@/app/assets/icons/ArrowSVG";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import WinnerTrophy from "@/app/assets/images/WinnerTrophy";

export default function WinnersOf24() {

    const quotes = [
        {
            id: 1,
            titleFront: "“The legacy set last year must be ",
            titleHighlight: "rightfully fulfilled",
            description: " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi... ",
            titleBack:
                "”",
            name: "Aashutosh Pudasaini",
            position: "President, Software Club",
            photo: "/legacy/deerhack24/aashutosh_pudasaini.jpg",
        },
        {
            id: 2,
            titleFront: "“This is dummy text 2 ",
            titleHighlight: "Best Hackathon in Nepal ",
            description: " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi... ",
            titleBack:
                "and we made it possible”",
            name: "Jane Doe",
            position: "Vice President, Software Club",
            photo: "/legacy/deerhack24/sampanna_gautam.png",
        },
    ];

    const [index, setIndex] = useState(0);
    const quotesData = quotes[index];

    const handlePrev = () => {
        const newIndex = (index - 1 + quotes.length) % quotes.length;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (index + 1) % quotes.length;
        setIndex(newIndex);
    };

    return(

        <div className="w-full px-4 lg:px-0 lg:w-[1171px] text-white flex flex-col lg:gap-10 md:gap-10 gap-1 mx-auto">
            <h1
                className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}
            >
                Deerhack 2024
            </h1>

            <div className="flex flex-row justify-center items-center">
                <QuotesCard
                    title_front={quotesData.titleFront}
                    title_highlight={quotesData.titleHighlight}
                    title_back={quotesData.titleBack}
                    description={quotesData.description}
                    name={quotesData.name}
                    position={quotesData.position}
                    photo={quotesData.photo}
                />

                <div className="flex gap-4 mt-4 flex-wrap ">
                    <button
                        onClick={handleNext}
                        className=" bg-yellow-500 rounded-[100px] hover:bg-gray-400 text-black h-fit lg:block md:block hidden"
                    >
                        <ArrowSVG />
                    </button>
                </div>

            </div>

              <div className="flex gap-4 flex-wrap">
                    <button
                        onClick={handleNext}
                        className=" bg-yellow-500 rounded-[100px] hover:bg-gray-400 text-black h-fit lg:hidden md:hidden block ml-[10vw] "
                    >
                        <ArrowSVG />
                    </button>
                </div>

            
                <div className="flex justify-center mt-4 gap-2">
                    {quotes.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === index ? "bg-white scale-110" : "bg-gray-500"
                                }`}
                        />
                    ))}
                </div>

            <div className="flex flex-col gap-4">

                <div className="flex flex-row">
                    <div className="text-primary-gradient-color">Participating Teams:</div>
                    <div className="w-full inline-flex flex-nowrap overflow-hidden bg-[#1B133854] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                        {[...Array(2)].map((_, j) => (
                            <ul
                                key={j}
                                className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
                            >
                                {data.map((e, i) => (
                                    <div className="flex items-center" key={`${j}-${i}`}>
                                        <CarouselImage text={`${e.text}`} />
                                        <div className="font-bold text-[1rem]">&middot;</div>
                                    </div>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                <DeerHack24Legacy
                    logo={<DeerhackLogo width="138" height="138" />}
                    title="Team Solo"
                    description="DeerHack 2024 Overall Winners"
                />
            </div>
            </div>

    );

}
