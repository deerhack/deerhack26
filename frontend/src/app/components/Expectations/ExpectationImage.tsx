
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

export default function ExpectationImage({ imageSrc }: { imageSrc: StaticImageData }): ReactElement {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden shadow-2xl"
      style={{
        width: "300px",
        height: "360px",
        background: "linear-gradient(180deg, #6633CC 0%, #9D4BAD 100%)",
        padding: "4px", // This creates the gradient border
      }}
    >
      <div className="relative w-full h-full bg-[#110C24] rounded-[17px] overflow-hidden">
        <Image src={imageSrc} alt="Expectation" fill className="object-cover" />
      </div>
    </div>
  );
}