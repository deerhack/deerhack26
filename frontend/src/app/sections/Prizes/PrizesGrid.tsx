import { ReactElement } from "react";
import Solana from "@/app/components/Solana/Solana";
import Replit from "@/app/components/Replit/Replit";
import GrandPrizeCard from "@/app/components/GrandPrize/GrandPrizeCard";
import SwagPrizes from "@/app/components/OtherPrizes/SwagPrizes";
import TrackWinner from "@/app/components/TrackWinner/TrackWinner";
import Filecoin from "@/app/components/Filecoin/Filecoin";
import Polygon from "@/app/components/Polygon/Polygon";
import OtherPrizes from "@/app/components/OtherPrizes/OtherPrizes";
import ThumbsUp from "@/app/assets/images/ThumbsUp";
import GiftBox from "@/app/assets/images/giftbox";

export default function PrizesGrid(): ReactElement {
  return (
    <div className="flex lg:flex-row flex-col gap-5 justify-center lg:items-start items-center mt-10">
      <div className="w-fit h-fit">
        <GrandPrizeCard />
      </div>
      <div className="flex flex-col gap-5 w-fit justify-center items-center">
        <div className="flex lg:flex-row flex-col h-fit gap-5 md:items-center">
          <TrackWinner />
          <SwagPrizes svg={<ThumbsUp width={200} height={200} />} />
        </div>
        <div className="">
          <OtherPrizes svg={<GiftBox width={120} height={120} />} />
        </div>
      </div>
    </div>
  );
}
