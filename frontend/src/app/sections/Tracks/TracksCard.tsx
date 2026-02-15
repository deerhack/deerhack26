"use client";
import { useState } from "react";
import TracksHeading from "@/app/components/Tracks/TracksHeadingCard";
import InteractiveTechnologySVG from "@/app/assets/icons/InteractiveTechnology";
import InteractiveTechnologyNewSVG from "@/app/assets/icons/InteractiveTechnologyNew";
import DataScienceSVG from "@/app/assets/icons/DataScience";
import BlockchainSVG from "@/app/assets/icons/Blockchain";
import OpenInnovationSVG from "@/app/assets/icons/OpenInnovation";
import EdTechSVG from "@/app/assets/icons/EdTech";
import TracksBodyCard from "@/app/components/Tracks/TracksBodyCard";
import { useRef } from "react";
import DataScienceNew from "@/app/assets/icons/DataScienceNew";
import BlockchainNew from "@/app/assets/icons/BlockChainNew";
import OpenInnovationNew from "@/app/assets/icons/OpenInnovationNew";
import EdTechNew from "@/app/assets/icons/EdTechNew";

const TracksCard = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>(
    "Interactive Technology",
  );

  const trackData = [
    {
      title: "Interactive Technology",
      svg: <InteractiveTechnologySVG height={24} width={24} />,
      svgBody: <InteractiveTechnologyNewSVG height={50} width={50} />,
      headStyling:
        selectedTrack === "Interactive Technology"
          ? "bg-grape text-magnolia active"
          : "bg-violet hover:bg-grape hover:text-magnolia",
      bodyStyling: "bg-grape text-magnolia",
      description:
        "Enter the World of IoT with DeerHack. Explore connectivity, innovation, and the future of global interaction.",
    },
    {
      title: "Data Science / Machine Learning",
      svg: <DataScienceSVG height={25} width={25} />,
      svgBody: <DataScienceNew height={50} width={50} />,
      headStyling:
        selectedTrack === "Data Science / Machine Learning"
          ? "bg-purpures text-magnolia active"
          : "bg-violet hover:bg-purpures hover:text-magnolia",
      bodyStyling: "bg-purpures text-magnolia",
      description:
        "Dive deep into the captivating realm of Data Analysis and Predictive Modeling, Leveraging algorithms ",
    },
    {
      title: "Blockchain",
      svg: <BlockchainSVG height={25} width={25} />,
      svgBody: <BlockchainNew height={50} width={50} />,
      headStyling:
        selectedTrack === "Blockchain"
          ? "bg-magnolia text-dark-purple active"
          : "bg-violet hover:bg-magnolia hover:text-dark-purple",
      bodyStyling: "bg-magnolia text-dark-purple",
      description:
        "Embrace Decentralization with DeerHack. Explore smart contracts, secure transactions, and reshape industries at the forefront of innovation.",
    },
    {
      title: "Open Innovation",
      svg: <OpenInnovationSVG height={25} width={25} />,
      svgBody: <OpenInnovationNew height={50} width={50} />,
      headStyling:
        selectedTrack === "Open Innovation"
          ? "bg-secondary text-dark-purple active"
          : "bg-violet hover:bg-secondary hover:text-dark-purple",
      bodyStyling: "bg-secondary text-dark-purple",
      description:
        "Transforming Challenges into Opportunities at DeerHack. Be part of the solution, forging a brighter future for all.",
    },
    {
      title: "Ed-Tech",
      svg: <EdTechSVG height={25} width={25} />,
      svgBody: <EdTechNew height={50} width={50} />,
      headStyling:
        selectedTrack === "Ed-Tech"
          ? "gradient-bg text-magnolia active"
          : "bg-violet hover:gradient-bg hover:text-magnolia",
      bodyStyling: "gradient-bg text-magnolia",
      description:
        "Reimagining education at DeerHack through smart, interactive, and personalized tech",
    },
    
  ];

  const handleTrackSelection = (title: string) => {
    setSelectedTrack(title);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="lg:w-[69.25rem]  mx-5 lg:mx-auto">
     
      <div
        className={`flex  lg:justify-center items-start text-magnolia  lg:gap-3 md:gap-6 gap-3 overflow-x-auto  no-scrollbar justify-evenly px-3`}
        ref={containerRef}
      >
        {trackData.map((track, index) => (
          <TracksHeading
            key={index}
            headStyling={track.headStyling}
            svg={track.svg}
            title={track.title}
            onClick={() => handleTrackSelection(track.title)}
          />
        ))}
      </div>

      {trackData.map(
        (track, index) =>
          selectedTrack === track.title && (
            <TracksBodyCard
              key={index}
              svg={track.svgBody}
              title={track.title}
              description={track.description}
              bodyStyling={track.bodyStyling}
            />
          ),
      )}
    </div>
  );
};

export default TracksCard;
