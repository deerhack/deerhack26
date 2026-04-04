  import Image, { StaticImageData } from "next/image";
  import { ReactElement } from "react";

  export default function ExpectationImage({
    imageSrc,
  }: {
    imageSrc: StaticImageData;
  }): ReactElement {
    return (
      <div className="relative h-[528px] sm:h-[23rem] sm:w-80 bg-gradient-to-br from-[#6633CC] to-[#9D4BAD] rounded-lg p-[5px]">
        <div className="relative rounded-lg h-full w-full">
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
