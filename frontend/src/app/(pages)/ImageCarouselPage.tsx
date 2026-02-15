import ImageCarouselSection from "../sections/ImageCarousel/ImageCarouselCard";
import long_leaf from "@/app/assets/images/long_leaf.svg";
import Image from "next/image";

export default function ImageCarouselPage() {
  return (
    <div className=" py-20 relative">
      <div>
        <ImageCarouselSection />
      </div>

      <Image
        src={long_leaf}
        alt="leaf"
        className=" absolute bottom-0 left-0 -z-10 rotate-{30} hidden xl:block"
      />
    </div>
  );
}
