import { StaticImageData } from "next/image";

type Sponsor = {
  id?: number;
  name: string;
  url: string;
  image: StaticImageData;
  imageAlt: string;
};

export default Sponsor;
