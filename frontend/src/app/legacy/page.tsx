import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { cabinetBold, cabinetExtraBold, cabinetMedium } from "@/app/utils/fonts";
import LegacySection from "../sections/LegacySection/page";
import HistorySection from "../sections/HistorySection/page";
export default function LegacyPage(){
    return(
        <>
            <Navbar/>
            <div className="relative overflow-hidden flex items-center justify-center w-full  mx-auto">
                <LegacySection />
            </div>
            <div className="pb-[10rem] flex items-center justify-center">
                <HistorySection />
            </div>
            <div className={`text-3xl lg:text-4xl text-main-title w-fit ${cabinetBold.className} text-left lg:px-16 sm:text-center px-10`}>
“Each year, we honor DeerHack’s legacy by embracing its essence, advancing its vision, and passing the torch with intent.”
            </div>
            <Footer/>
        </>
    )
}