"use client";
import type { ReactElement } from "react";
import MainWinCard from "./MainWinCard";
import LightBulbSVG from "@/app/assets/images/lightbulb";
import DataLogoSVG from "@/app/assets/images/dataLogo";
import BlockChainSVG from "@/app/assets/images/blockChainLogo";
import InteractiveLogoSVG from "@/app/assets/images/interactiveTechLogo";

type listContent = {
    id: number
    title: string
    description: string
    svg: ReactElement
}

export default function OtherWinners24() {
    const lists: listContent[] = [
        {
            id: 1,
            title: "Team Decent",
            description: "DeerHack 2024 Open Innovation Track Winner",
            svg: <LightBulbSVG />,
        },
        {
            id: 2,
            title: "Nymna",
            description: "DeerHack 2024 Data Science / ML Track Winner",
            svg: <DataLogoSVG />,

        },
        {
            id: 3,
            title: "Error-404",
            description: "DeerHack 2024 Blockchain Track Winner",
            svg: <BlockChainSVG />,

        },
        {
            id: 4,
            title: "Team Everest",
            description: "DeerHack 2024 Interactive Technology Track Winner",
            svg: <InteractiveLogoSVG />,

        },
    ]

    return(
        <div className="flex flex-col pb-[3rem]">
            {lists.map((list, index) => (
                <div  key={list.id}> 
                    <MainWinCard
                        title={list.title}
                        description={list.description}
                        svg={list.svg}
                    />
                </div>
            ))}
        </div>
    );
   
}
