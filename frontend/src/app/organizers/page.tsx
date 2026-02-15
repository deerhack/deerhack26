import { ReactElement } from "react";
import OrganizersPage from "../(pages)/OrganizersPage";
import Image from "next/image";
import longLeafSVG from "../assets/images/long_leaf.svg";
import shortFatLeaf from "../assets/images/leaf_deerhack2023_right.svg";
import shortLeaf from "../assets/images/leaf_prizes_right.svg";
import veryLongLeaf from "../assets/images/veryLongLeaf.svg";
import Navbar from "../components/Navbar/Navbar";
import VolunteerSection from "../sections/Volunteers/VolunteerSection";

export default function Page(): ReactElement {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <Image
          src={longLeafSVG}
          height={50}
          width={50}
          alt="leaf"
          className="absolute top-4 hidden lg:block"
        />
        <Image
          src={shortLeaf}
          height={90}
          width={90}
          alt="leaf"
          className="absolute top-20 right-3 hidden lg:block"
        />
        <Image
          src={shortLeaf}
          height={55}
          width={55}
          alt="leaf"
          className="absolute top-[40rem] -left-3 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
        <Image
          src={longLeafSVG}
          height={70}
          width={70}
          alt="leaf"
          className="absolute top-[35rem] right-0 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
        <Image
          src={shortLeaf}
          height={55}
          width={55}
          alt="leaf"
          className="absolute top-[75rem] right-0 hidden lg:block"
          style={{ transform: "rotate(-10deg)" }}
        />
        <Image
          src={shortFatLeaf}
          height={105}
          width={105}
          alt="leaf"
          className="absolute top-[105rem] left-0 hidden lg:block"
          style={{ transform: "scaleX(-1)" }}
        />
        <Image
          src={veryLongLeaf}
          height={80}
          width={80}
          alt="leaf"
          className="absolute top-[125rem] left-0 hidden lg:block"
          // style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
        <Image
          src={shortLeaf}
          height={90}
          width={90}
          alt="leaf"
          className="absolute top-[145rem] right-0 lg:block hidden"
          style={{ transform: "rotate(-5deg)" }}
        />

        <OrganizersPage />
      </div>
    </>
  );
}
