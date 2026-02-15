import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";
import leaf_deerhack2023_right from "@/app/assets/images/leaf_deerhack2023_right.svg";
import SponsorsSection from "../sections/Sponsors/SponsorsSection";
import Image from "next/image";
import { ReactElement } from "react";
export default function SponsorPage(): ReactElement {
  return (
    <div className="overflow-hidden py-20">
      <div className="relative">
        <Image
          src={leaf_deerhack2023_right}
          alt="leaf"
          height={250}
          className="absolute right-3 top-52 hidden xl:block"
        />
      </div>
      <div>
        <SponsorsSection />
      </div>
    </div>
  );
}
