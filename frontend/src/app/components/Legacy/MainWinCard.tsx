import { cabinetBold, cabinetExtraBold, satoshiBold, satoshiRegular } from "@/app/utils/fonts";
import { ReactElement } from "react";

export default function MainWinCard({
  title,
  description,  
  svg,
}: {
    title: string;
    description: string;
    svg: ReactElement;
}){
    return(
        <div className="flex flex-row  relative top-[2.5rem] md:left-[2rem]">
            <div className="w-[6.313rem] h-[6.313rem] absolute left-[1.5rem] top-[1.2rem] hidden lg:block">
                {svg}
            </div>
            <div className="w-[19.875rem] lg:w-[41.952rem] h-[6.113rem] lg:h-[10.429rem]">
                <ul className="divide-y-2 divide-gray-200/10">
                    <li>
                        <div className={`${cabinetBold.className} text-[1.25rem] lg:text-[2.25rem] flex justify-end items-end lg:pb-[1rem]`}>
                            {title}
                        </div>
                        <div className={`${satoshiRegular.className} italic text-[0.75rem] lg:text-[1.25rem] flex justify-end items-end pb-[2.5rem]`}>
                            {description}
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}