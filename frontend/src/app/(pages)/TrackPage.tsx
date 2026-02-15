import { cabinetExtraBold } from "../utils/fonts";
import TracksCard from "@/app/sections/Tracks/TracksCard";
import TrackLeftLeaf from "@/app/assets/icons/TrackLeftLeaf.svg";
import Image from "next/image";

const TrackPage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={TrackLeftLeaf}
          alt="left leaf"
          height={400}
          className="absolute bottom-0 left-0 xl:block hidden"
        />
        <div className="py-20 mt-0">
          <p className={`mb-8 ${cabinetExtraBold.className} track-heading `}>
            Tracks
          </p>
          <TracksCard />
        </div>
      </div>
    </>
  );
};

export default TrackPage;
