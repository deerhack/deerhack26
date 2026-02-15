
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import longLeafSVG from "../assets/images/long_leaf.svg";
import shortFatLeaf from "../assets/images/leaf_deerhack2023_right.svg";
import shortLeaf from "../assets/images/leaf_prizes_right.svg";
import veryLongLeaf from "../assets/images/veryLongLeaf.svg";
import Timer_wrapper from "../components/counter/Timer";
import Link from "next/link";
import { redirect } from "next/navigation";

const Schedule = () => {
  redirect("/ends");

  return (
    <>
      {/* <Navbar /> */}
      <div className="relative lg:overflow-hidden h-[420px] sm:h-screen  flex flex-col justify-center">
        <Image
          src={longLeafSVG}
          height={50}
          width={50}
          alt="leaf"
          className="absolute top-4 scale-110 hidden lg:block"
        />
        <Image
          src={shortLeaf}
          height={90}
          width={90}
          alt="leaf"
          className="absolute top-80 right-3 hidden lg:block"
        />
        <Image
          src={shortLeaf}
          height={55}
          width={55}
          alt="leaf"
          className="absolute top-[50rem] -left-3 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
        <Image
          src={longLeafSVG}
          height={70}
          width={70}
          alt="leaf"
          className="absolute top-[65rem] right-0 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
        <Image
          src={shortLeaf}
          height={55}
          width={55}
          alt="leaf"
          className="absolute top-[125rem] right-0 hidden lg:block"
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
          className="absolute top-[135rem] left-0 hidden lg:block scale-150"
        // style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
        <Image
          src={shortLeaf}
          height={90}
          width={90}
          alt="leaf"
          className="absolute top-[165rem] right-0 lg:block hidden"
          style={{ transform: "rotate(-5deg)" }}
        />
        <div className="headings">

          {/* <Timer_wrapper targetDate="May 10,2024 17:00:00"/> */}
          <p className="min-h-24 text-wrap">
            Event Has Begun, click
            <Link href="/ends" className="font-extrabold">
              {" "} here.
            </Link>
          </p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Schedule;
