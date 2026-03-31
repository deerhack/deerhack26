// components/Expectations/ExpectationImage.tsx
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

// Ensure the prop is typed as StaticImageData
interface ExpectationImageProps {
  imageSrc: StaticImageData | string; 
}

export default function ExpectationImage({ imageSrc }: ExpectationImageProps): ReactElement {
  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{
        width: "456px",
        height: "528px",
        borderRadius: "15px",
        background: "linear-gradient(180deg, #6633CC 0%, #9D4BAD 100%)",
        padding: "8px", 
      }}
    >
      <div 
        className="relative w-full h-full overflow-hidden"
        style={{
          background: "#110C24",
          borderRadius: "10px", 
        }}
      >
        <Image
          src={imageSrc}
          alt="Expectation"
          fill
          className="object-cover"
          priority // Helps with layout shift in sliders
          sizes="456px"
        />
      </div>
    </div>
  );
}