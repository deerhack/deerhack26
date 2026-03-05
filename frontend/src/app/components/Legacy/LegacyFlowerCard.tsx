import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold } from "../../utils/fonts";
import LegacyFlower from "@/app/assets/images/LegacyFlower.svg";
import LegacyLeafLeft from "@/app/assets/images/LegacyLeafLeft.svg";
import LegacyLeafRight from "@/app/assets/images/LegacyLeafRight.svg";
import Image from "next/image";

interface LegacyCardDetails {
    logo: ReactElement;
    eventLead: string;
    eventColead: string;
    date: string;
    application: number;
    participation: number;
}

const LegacyCard: React.FC<LegacyCardDetails> = ({
    logo,
    eventLead,
    eventColead,
    date,
    application,
    participation,
}) => {
    return (
       <div className="w-full flex flex-col items-center py-5 z-0 px-10 ">
          
           <div className="border-[3px] border-secondary rounded-2xl w-[310px] sm:w-[500px] lg:w-[380px] md:h-[150px] md:[130px]  lg:h-[170px] legacy-gradient py-4 px-4 sm:py-7 sm:px-10 flex justify-center items-center">
         {logo}
       </div>
       
       <div className="border-[3px] border-secondary rounded-2xl mt-5 w-[310px] sm:w-[500px] lg:w-[380px] h-[320px] sm:h-[400px] lg:h-[390px] legacy-gradient shadow-sm shadow-secondary py-5 px-5 sm:py-10 sm:px-10">
         <div className="flex justify-between mb-4 mt-3 sm:mt-7 sm:mb-6">
           <div>
             <h2 className={`text-[16px] sm:text-2xl headings ${cabinetExtraBold.className} lg:ml-[0px] md:ml-0 ml-[-15px]`}>Event Leads</h2>
             <p className="text-[12px] sm:text-[16px] py-1 sm:py-2">{eventLead}</p>
             <p className="text-[12px] sm:text-[16px]">{eventColead}</p>
           </div>
           <div className="ml-2 sm:ml-3">
             <h2 className={`text-[16px] sm:text-2xl headings ml-[-15px] md:ml-0 lg:ml-0 ${cabinetExtraBold.className}`}>Dates</h2>
             <p className="text-[12px] sm:text-[16px] py-1 sm:py-2">{date}</p>
           </div>
         </div>
       
         <div className="mb-3 sm:mb-6 text-left"> 
           <h2 className={`text-[16px] sm:text-2xl headings ${cabinetExtraBold.className} lg:ml-[0px] md:ml-0 ml-[-15px]`}>Applications</h2>
           <p className="text-[12px] sm:text-[16px] py-1 sm:py-2">{application}</p>
         </div>
       
         <div className="text-left"> 
           <h2 className={`text-[16px] sm:text-2xl headings ${cabinetExtraBold.className} lg:ml-[0px] md:ml-0 ml-[-15px]`}>Participation</h2>
           <p className="text-[12px] sm:text-[16px] py-1 sm:py-2">{participation}</p>
         </div>
       </div>
        

           
            <div className="flex justify-center mt-[-50px]">
                <Image
                    src={LegacyFlower}
                    width={370.47}
                    height={252.2}
                    alt="center flower"
                    className="opacity-80 lg:block hidden"
                />
                 <Image
                    src={LegacyLeafRight}
                    width={645}
                    height={284}
                    alt="right leaf"
                    className="absolute top-[650px] left-[650px] lg:block opacity-20 -z-10 hidden"
                />
                <Image
                    src={LegacyLeafLeft}
                    width={645}
                    height={284}
                    alt="left leaf"
                    className="absolute top-[650px] left-[80px] lg:block opacity-20 z-0  hidden"
                />
                
            </div>
           
        </div>
    );
}

export default LegacyCard;
