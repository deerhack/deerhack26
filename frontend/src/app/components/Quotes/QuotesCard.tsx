import Image from "next/image";
import { ReactElement } from "react";
import { cabinetBold, cabinetMedium } from "../../utils/fonts";

interface QuotesCardDetails {
    title_front:string;
    title_highlight:string;
    title_back:string;
    description:string;  
    name:string;
    position:string;
    photo: ReactElement | string; 
}

const QuotesCard: React.FC<QuotesCardDetails> = ({
            title_front,
            title_highlight,
            title_back,
            description,
            name,
            position, 
            photo,
        }) => {
            return (
        <>
            <div className="md:flex md:flex-row justify-center items-center gap-9 sm:flex sm:flex-col">
                        <div className="photo flex justify-center items-center">
                            <div className="w-[19.125rem] lg:w-[20.763rem] h-[29.096rem] lg:h-[28.133rem] primary-gradient-background rounded-[1rem] p-[0.1875rem]">
                                <div className="relative w-full h-full legacy-gradient-background rounded-[1rem] p-[0.1rem] overflow-hidden">
                                    
                                    <div className="absolute inset-0 w-full h-full">
                                    {typeof photo === 'string' ? (
                                        <img 
                                            src={photo} 
                                            alt={name} 
                                            className="w-full h-full object-cover" 
                                        />
                                    ) : (
                                        <div className="w-full h-full">{photo}</div>
                                    )}
                                    </div>

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#110C24] flex justify-start h-fit w-[90%] rounded-[1rem] px-3 py-2">
                                        <div className="flex flex-col">
                                            <div className={`${cabinetBold.className} text-[1.125rem] h-fit`}>
                                                {name}
                                            </div>
                                            <div className={`${cabinetMedium.className} text-[0.875rem] h-fit text-zinc-400`}>
                                                {position}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="quotebox">
                            <div className="flex flex-col md:flex-row justify-center items-center mt-[2.813rem] md:mt-[0.7rem] lg:mt-[0.7rem]">
                                <div className="w-[19.728rem] lg:w-[50.75rem] h-[29.096rem] lg:h-[28.133rem] sm:h-max-[26.125rem] legacy-gradient-background rounded-[2rem] p-[0.1rem] mb-4">
                                    <div className="bg-dark-purple w-full h-full rounded-[1.9rem]">
                                        <div className="flex flex-col py-[2rem] px-[3.063rem] lg:py-[4.3rem] lg:px-[4.813rem] justify-center items-center ">
                                            <div className={`${cabinetBold.className} text-[1.5rem] lg:leading-[3rem] lg:text-[2.25rem] mb-[1.5rem]`}>
                                                {title_front}<span className="text-secondary">{title_highlight}</span>{title_back}<br />
                                                <br/>
                                                <div className={`${cabinetMedium.className} text-[0.75rem] leading-[1.5rem] lg:text-[1.125rem] justify-start`}>
                                                    {description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    );
}

export default QuotesCard;