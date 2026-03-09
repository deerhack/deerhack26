import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetMedium } from "../../utils/fonts";
import { satoshiRegular, satoshiBold } from "../../utils/fonts";

interface LegacyCardDetails {
    logo:ReactElement;
    eventLead: string;
    eventColead: string;
    date: string;
    application: number;
    participation: number;
}

const LegacyCards: React.FC<LegacyCardDetails> = ({
    logo,
    eventLead,
    eventColead,
    date,
    application,
    participation,
}) => {
   return (
        <div className="w-full flex flex-col items-center py-5 z-0 mt-[-5px] lg:mt-[-210px]  ">
            <div className="border-[3px] border-secondary rounded-2xl w-[310px] sm:w-[500px] lg:w-[380px] md:h-[150px] md:[130px]  lg:h-[170px] legacy-gradient py-4 px-4 sm:py-7 sm:px-10 flex justify-center items-center">
                {logo}
            </div>

            <div className="border-[3px] border-secondary rounded-2xl mt-5 w-[310px] sm:w-[500px] lg:w-[380px] h-[320px] sm:h-[400px] lg:h-[390px] legacy-gradient shadow-sm shadow-secondary py-5 px-5 sm:py-10 sm:px-10">
                <div className="flex justify-between mb-4 mt-3 sm:mt-7 sm:mb-6">
                    <div>
                        <h2 className={`text-[16px] sm:text-2xl headings ${cabinetExtraBold.className} lg:ml-[0px] md:ml-0 ml-[-15px]`}>Event Leads</h2>
                        <p className={`text-[12px] sm:text-[16px] py-1 sm:py-2 ${satoshiRegular.className}`}>{eventLead}</p>
                        <p className={`text-[12px] sm:text-[16px] ${satoshiRegular.className}`}>{eventColead}</p>
                    </div>
                    <div className="ml-2 sm:ml-3">
                        <h2 className={`text-[16px] sm:text-2xl headings ml-[-15px] md:ml-0 lg:ml-0 ${cabinetExtraBold.className}`}>Dates</h2>
                        <p className={`text-[12px] sm:text-[16px] py-1 sm:py-2 ${satoshiRegular.className}`}>{date}</p>
                    </div>
                </div>

                <div className="mb-3 sm:mb-6 text-left"> 
                    <h2 className={`text-[16px] sm:text-2xl headings ${cabinetExtraBold.className} lg:ml-[0px] md:ml-0 ml-[-15px]`}>Applications</h2>
                    <p className={`text-[12px] sm:text-[16px] py-1 sm:py-2 ${satoshiRegular.className}`}>{application}</p>
                </div>

                <div className="text-left"> 
                    <h2 className={`text-[16px] sm:text-2xl headings ${cabinetExtraBold.className} lg:ml-[0px] md:ml-0 ml-[-15px]`}>Participation</h2>
                    <p className={`text-[12px] sm:text-[16px] py-1 sm:py-2 ${satoshiRegular.className}`}>{participation}</p>
                </div>
            </div>
        </div>
    );
}

export default LegacyCards;