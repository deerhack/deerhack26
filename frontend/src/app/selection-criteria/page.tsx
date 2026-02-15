
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CodeOfConductSection } from "../sections/codeOfConduct"; 
import Image from "next/image";
import longLeafSVG from "../assets/images/long_leaf.svg";
import shortFatLeaf from "../assets/images/leaf_deerhack2023_right.svg";
import shortLeaf from "../assets/images/leaf_prizes_right.svg";
import veryLongLeaf from "../assets/images/veryLongLeaf.svg";

import code_of_conduct_leaf from "../assets/images/code_of_conduct_leaf.svg";


import { SelectionCriteriaSection } from "../sections/SelectionCriteriaSection";

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
              className="absolute top-[75rem] scale-110 hidden lg:block"
            />
            <Image
              src={code_of_conduct_leaf}
              height={240}
              width={240}
              alt="leaf"
              className="absolute top-[90rem] right-0 hidden lg:block z-20"
              style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
            />
         
         
          <SelectionCriteriaSection/>
          </div>
          <Footer/>
        </>
      );
    };

export default COD;
