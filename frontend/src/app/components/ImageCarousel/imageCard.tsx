import { ReactElement } from "react";
import Image from "next/image";

export default function ImageCard({ image }: { image: string }): ReactElement {
  return (
    <li>
      <div className="primary-gradient-background w-[15.625rem] h-[8.75rem] md:w-[30rem] md:h-[16.875rem] flex justify-center items-center rounded-xl">
        <Image
          // className=" w-[15.125rem] h-[8.25rem] md:w-[29.5rem] md:h-[16.375rem] rounded-xl"
          src={image}
          // alt="Carousel Component"
          width={100}
          height={100}
          // objectFit="contain"
          className="rounded-xl object-cover w-full h-full bg-gradient-to-br p-1 from-grape to-saffron"
          alt="Deerhack2023 Images"
          quality={50}
          // priority={true}
        />
      </div>
    </li>
  );
}
