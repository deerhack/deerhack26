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

export default function OtherWinners() {
    const lists: listContent[] = [
        {
            id: 1,
            title: "Code Crusaders",
            description: "DeerHack 2023 Open Innovation Track Winner",
            svg: <LightBulbSVG className="inline-block relative right-2 "/>,
        },
        {
            id: 2,
            title: "The Kripples",
            description: "DeerHack 2023 Data Science / ML Track Winner",
            svg: <DataLogoSVG />,

        },
        {
            id: 3,
            title: "Custodes",
            description: "DeerHack 2023 Blockchain Track Winner",
            svg: <BlockChainSVG />,

        },
        {
            id: 4,
            title: "Pentagon",
            description: "DeerHack 2023 Interactive Technology Track Winner",
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
