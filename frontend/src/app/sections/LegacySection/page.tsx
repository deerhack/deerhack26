import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import LegacyCard from "@/app/components/Legacy/LegacyCards";
import LegacyFlowerCard from "@/app/components/Legacy/LegacyFlowerCard";
import MobileLegacyFlowerCard from "@/app/components/Legacy/MobileLegacyFlowerCard";
import Deerhack24 from "@/app/assets/icons/MainLogo";
import Deerhack25 from "@/app/assets/icons/Deerhack25";
// import Deerhack23 from "@/app/assets/icons/Deerhack23"; // Causes Compilation Error
import Deerhack23_Fix from "@/app/assets/icons/Deerhack23_Fix";

const LegacySection = () => {
    return (
        <>
            <div className="lg:w-[1351px] lg:h-[1100px] text-white flex flex-col items-center justify-center mx-auto relative ">
                <h1
                    className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32  justify-center text-center`}>
                    Legacy
                </h1>
                <div className="lg:flex justify-start items-center ">
                    <LegacyCard 
                        logo={<Deerhack23_Fix className="w-[200px] h-[75px] lg:w-[208px] lg:h-[92px] md:h-[92px] sm:[88px] "/>}
                        eventLead="Prayatna Mishra"
                        eventColead="Bipashree Aryal"
                        date="May 5, 6, 7: 2023"
                        application={1050}
                        participation={75}
                    />

                    <LegacyFlowerCard 
                        logo={<Deerhack24 className="w-[200px] h-[75px] lg:w-[208px] lg:h-[92px] md:h-[92px] sm:[88px]"/>}
                        eventLead="Aasutosh Pudasaini"
                        eventColead="Sampanna Gautam"
                        date="May 8, 9, 10: 2024" 
                        application={1050}
                        participation={75}
                    />

                    <MobileLegacyFlowerCard 
                        logo={<Deerhack25 className="w-[200px] h-[75px] lg:w-[208px] lg:h-[92px] md:h-[92px] sm:[88px]"/>}
                        eventLead="Dipan Silwal"
                        eventColead="Pragalva Sapkota"
                        date="June 5, 6, 7: 2025"
                        application={1050}
                        participation={75}
                    />
                </div>
            </div>
        </>
    );
};

export default LegacySection;
