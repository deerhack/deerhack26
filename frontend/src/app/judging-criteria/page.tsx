
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CodeOfConductSection } from "../sections/codeOfConduct"; 
import Image from "next/image";
import longLeafSVG from "../assets/images/long_leaf.svg";
import shortFatLeaf from "../assets/images/leaf_deerhack2023_right.svg";
import shortLeaf from "../assets/images/leaf_prizes_right.svg";
import veryLongLeaf from "../assets/images/veryLongLeaf.svg";
import NewLeafSVG from "../assets/images/NewLeafSVG.svg";
import { JudgesCriteriaSection } from "../sections/judgesCriteriaSection";

const COD = () => {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
      <Image
          src={NewLeafSVG}
          height={460.72593352729126}
          width={245.93094397367338}
          alt="leaf"
          className="absolute top-[31.816rem] scale-110 hidden lg:block"
        />
      
        <Image
          src={NewLeafSVG}
          height={460.72593352729126}
          width={245.93094397367338}
          alt="leaf"
          className="absolute top-[66.826rem] -right-3 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />

        <Image
          src={NewLeafSVG}
          height={460.72593352729126}
          width={245.93094397367338}
          alt="leaf"
          className="absolute top-[105.205rem] scale-110 hidden lg:block"
        />
      
        <Image
          src={NewLeafSVG}
          height={460.72593352729126}
          width={245.93094397367338}
          alt="leaf"
          className="absolute top-[140.214rem] -right-3 hidden lg:block"
          style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
        />
     
      <JudgesCriteriaSection/>
      </div>
      <Footer/>
    </>
  );
};


export default COD;
