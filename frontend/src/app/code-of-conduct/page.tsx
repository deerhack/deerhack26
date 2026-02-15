
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CodeOfConductSection } from "../sections/codeOfConduct"; 
import Image from "next/image";
import longLeafSVG from "../assets/images/long_leaf.svg";
import shortFatLeaf from "../assets/images/leaf_deerhack2023_right.svg";
import shortLeaf from "../assets/images/leaf_prizes_right.svg";
import veryLongLeaf from "../assets/images/veryLongLeaf.svg";
import code_of_conduct_leaf from "../assets/images/code_of_conduct_leaf.svg";


const COD = () => {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
      <Image
          src={code_of_conduct_leaf}
          height={240}
          width={240}
          alt="leaf"
          className="absolute top-[23rem] scale-110 hidden lg:block"
        />
        <Image
          src={code_of_conduct_leaf}
          height={240}
          width={240}
          alt="leaf"
          className="absolute top-[48rem] right-0 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
       <Image
          src={code_of_conduct_leaf}
          height={200}
          width={200}
          alt="leaf"
          className="absolute top-[77rem] scale-110 hidden lg:block"
        />
        <Image
          src={code_of_conduct_leaf}
          height={240}
          width={240}
          alt="leaf"
          className="absolute top-[98rem] right-0 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
     
        <Image
          src={shortFatLeaf}
          height={200}
          width={200}
          alt="leaf"
          className="absolute top-[124rem] left-0 hidden lg:block"
          style={{ transform: "scaleX(-1)" }}
        />
        <Image
          src={veryLongLeaf}
          height={80}
          width={80}
          alt="leaf"
          className="absolute top-[163rem] left-4 hidden lg:block scale-150"
          // style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
        <Image
          src={shortLeaf}
          height={140}
          width={140}
          alt="leaf"
          className="absolute top-[180rem] right-0 lg:block hidden"
          style={{ transform: "rotate(-5deg)" }}
        />
      <CodeOfConductSection/>
      </div>
      <Footer/>
    </>
  );
};

export default COD;
