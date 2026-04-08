"use client";
import { useState, useEffect, useRef } from "react";
import TracksHeading from "@/app/components/Tracks/TracksHeadingCard";
import TracksBodyCard from "@/app/components/Tracks/TracksBodyCard";
import InteractiveTechnologySVG from "@/app/assets/icons/InteractiveTechnology";
import InteractiveTechnologyNewSVG from "@/app/assets/icons/InteractiveTechnologyNew";
import DataScienceSVG from "@/app/assets/icons/DataScience";
import DataScienceNew from "@/app/assets/icons/DataScienceNew";
import BlockchainSVG from "@/app/assets/icons/Blockchain";
import BlockchainNew from "@/app/assets/icons/BlockChainNew";
import OpenInnovationSVG from "@/app/assets/icons/OpenInnovation";
import OpenInnovationNew from "@/app/assets/icons/OpenInnovationNew";
import EdTechSVG from "@/app/assets/icons/EdTech";
import EdTechNew from "@/app/assets/icons/EdTechNew";
import EnvironmentTrackSVG from "@/app/assets/icons/EnvironmentTrack";
import EnvironmentTrackBodySVG from "@/app/assets/icons/EnvironmentTrackBody";
import styles from "./styles.module.css"

const TracksCard = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>(
    "Interactive Technology"
  );
  const [animKey, setAnimKey] = useState(0);

  const autoSwitchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trackData = [
    {
      title: "Interactive Technology",
      svg: <InteractiveTechnologySVG height={24} width={24} />,
      svgBody: <InteractiveTechnologyNewSVG height={50} width={50} />,
      headStyling:
        selectedTrack === "Interactive Technology"
          ? "bg-grape text-magnolia active"
          : "bg-violet hover:bg-grape hover:text-magnolia transition-all duration-300",
      bodyStyling: "bg-grape text-magnolia",
      description:
        "Enter the World of IoT with DeerHack. Explore connectivity, innovation, and the future of global interaction.",
    },
    {
      title: "Machine Learning / AI",
      svg: <DataScienceSVG height={25} width={25} />,
      svgBody: <DataScienceNew height={50} width={50} />,
      headStyling:
        selectedTrack === "Machine Learning / AI"
          ? "bg-purpures text-magnolia active"
          : "bg-violet hover:bg-purpures hover:text-magnolia transition-all duration-300",
      bodyStyling: "bg-purpures text-magnolia",
      description:
        "Dive deep into the captivating realm of Data Analysis and Predictive Modeling, Leveraging algorithms and Artificial Intelligence.",
    },
    {
      title: "Blockchain",
      svg: <BlockchainSVG height={25} width={25} />,
      svgBody: <BlockchainNew height={50} width={50} />,
      headStyling:
        selectedTrack === "Blockchain"
          ? "bg-magnolia text-dark-purple active"
          : "bg-violet hover:bg-magnolia hover:text-dark-purple transition-all duration-300",
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
          : "bg-violet hover:bg-secondary hover:text-dark-purple transition-all duration-300",
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
          : "bg-violet hover:gradient-bg hover:text-magnolia transition-all duration-300",
      bodyStyling: "gradient-bg text-magnolia",
      description:
        "Reimagining education at DeerHack through smart, interactive, and personalized tech",
    },
    {
      title: "Environment",
      svg: <EnvironmentTrackSVG height={25} width={25} />,
      svgBody: <EnvironmentTrackBodySVG height={50} width={50} />,
      headStyling:
    selectedTrack === "Environment"
      ? `gradient-bg text-magnolia active invert`
      : `${styles.envAnimate} text-magnolia hover:opacity-90 transition-opacity duration-500`,
      bodyStyling: "gradient-bg text-magnolia invert transition-all duration-500",
      description:
        "Think Green, Code Clean at DeerHack. Dive into the world of climate-positive innovation. Turn environmental challenges into elegant, scalable, and sustainable tech solutions.",
    },
  ];

  // Function to handle track selection manually
  const handleTrackSelection = (title: string) => {
    setSelectedTrack(title);
    setAnimKey((prev) => prev + 1);
  };

  // // Auto switch logic
  // const resetAutoSwitchTimer = () => {
  //   if (autoSwitchTimer.current) clearTimeout(autoSwitchTimer.current);

  //   autoSwitchTimer.current = setTimeout(() => {
  //     const currentIndex = trackData.findIndex(
  //       (track) => track.title === selectedTrack
  //     );
  //     const nextIndex = (currentIndex + 1) % trackData.length;
  //     setSelectedTrack(trackData[nextIndex].title);
  //     setAnimKey((prev) => prev + 1);
  //     resetAutoSwitchTimer(); // schedule next switch
  //   }, 10000); // 8 seconds
  // };

  // // Start auto-switch when component mounts
  // useEffect(() => {
  //   resetAutoSwitchTimer();
  //   return () => {
  //     if (autoSwitchTimer.current) clearTimeout(autoSwitchTimer.current);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedTrack]);

  return (
    <div className="lg:w-[70.36rem] mx-5 lg:mx-auto transition-all duration-300 ease-in">
      <div
        className={`flex lg:justify-center items-start text-magnolia lg:gap-[12px] md:gap-6 gap-3 overflow-x-auto no-scrollbar justify-evenly px-3`}
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
            <div
              key={animKey}
              className="animate-track-fade-in"
            >
              <TracksBodyCard
                key={index}
                svg={track.svgBody}
                title={track.title}
                description={track.description}
                bodyStyling={track.bodyStyling}
              />
            </div>
          )
      )}
    </div>
  );
};

export default TracksCard;