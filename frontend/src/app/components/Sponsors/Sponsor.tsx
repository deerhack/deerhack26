import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export default function Sponsor({
  image,
  alt,
  url,
}: {
  image: StaticImageData;
  alt: string;
  url: string;
}) {
  return (
    <div className="flex flex-row  justify-center items-center w-[15rem] h-[11rem]  rounded-full mb-10">
      <Link href={url} target="_blank">
        <Image
          src={image}
          alt={alt}
          width={150}
          height={150}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </Link>
    </div>
  );
}
