import { data } from "@/app/components/ImageCarousel/mockData";
import { dataTwo } from "@/app/components/ImageCarousel/mockDataTwo";
import ImageCard from "@/app/components/ImageCarousel/imageCard";

export default function ImageCarouselSection() {
  return (
    <div className="flex flex-col  gap-4">
      <div className="w-full inline-flex  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          {data.map((e, i) => (
            <ImageCard key={i} image={`${e.img}`} />
          ))}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          {data.map((e, i) => (
            <ImageCard key={i} image={`${e.img}`} />
          ))}
        </ul>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-inf-scroll">
          {dataTwo.map((x, i) => (
            <ImageCard key={i} image={`${x.img}`} />
          ))}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-inf-scroll">
          {dataTwo.map((x, i) => (
            <ImageCard key={i} image={`${x.img}`} />
          ))}
        </ul>
      </div>
    </div>
  );
}
