import { ReactElement } from "react";
import Image from "next/image";

export default function CarouselImage({ text }: { text: string }): ReactElement {

  return (
    <li>
      
    <div className=" w-[7.3rem] h-[0.75rem] md:w-[10rem] md:h-[2.875rem] sm:w-fit sm:h-[0.5rem] flex justify-center items-center rounded-xl">

        <p>
            {text} 
        </p>
    
    </div>
  
    </li>
    
  );
}