import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

export default function ExpectationImage({
  imageSrc,
}: {
  imageSrc: StaticImageData;
}): ReactElement {
  return (
    <div className="relative h-[370px] sm:h-[27rem] w-64 sm:w-80 bg-saffron rounded-lg mt-10">
      <div className="absolute bottom-3 left-2 z-[5] rounded-lg h-full w-full">
        <Image
          src={imageSrc}
          alt="Some Fun Games Played at Deerhack 2023"
          fill
          className="object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}
