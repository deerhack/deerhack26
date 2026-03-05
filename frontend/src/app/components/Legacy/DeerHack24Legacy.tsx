import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetMedium, satoshiRegular } from "../../utils/fonts";
import OtherWinners24 from "./otherWinners24";

interface LegacyCardDetails {
    logo:ReactElement;
    title:string;
    description:string;
   
}

const DeerHack24Legacy: React.FC<LegacyCardDetails> = ({
    logo,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-[19.728rem] lg:w-[29.674rem] h-[29.096rem] lg:h-[43.765rem] primary-gradient-background rounded-[3.6rem] p-[0.1875rem]">
                <div className="bg-dark-purple w-full h-full rounded-[3.5rem]">
                    <div className="flex flex-col items-center justify-center relative top-[8rem] lg:top-[10rem]">
                        <div className="mb-[1rem]">
                            {logo}
                        </div>
                        <div className={`${cabinetExtraBold.className} text-primary-gradient-color text-[2.313rem] lg:text-[4.5rem] font-[700]`}>
                            {title}
                        </div>
                        <div className={`${satoshiRegular.className} italic text-[0.831rem] lg:text-[1.25rem] font-[500]`}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>

            <OtherWinners24/>
        </div>
    );
}

export default DeerHack24Legacy;
