import type Judges from "@/app/types/judges";
import BhabukImg from "@/app/assets/images/judges/Bhabuk.png"
import RikeshImg from "@/app/assets/images/judges/rikesh.png"
import SwastikaImg from "@/app/assets/images/judges/Swastika.png"




const Judges: Judges[] = [
  {
    name:"Bhabuk Singh Kunwar",
    image: BhabukImg,
    linkedin_url:"https://www.linkedin.com/in/bhabuk-kunwar-58a82751/",
    position:"Director of Engineering",
    company: "Infinite Computer Solutions",
  },
    {
    name:"Rikesh Lal Shrestha",
    image: RikeshImg,
    linkedin_url:"https://www.linkedin.com/in/rikesh-lal-shrestha-55b063132/",
    position:"Senior Engineering Manager",
    company: "Leapfrog Technology. Inc.",
  },
  {
    name:"Swastika K.C.",
    image: SwastikaImg,
    linkedin_url:"https://www.linkedin.com/in/swastika-kc-84a56413b/",
    position:"Innovation Program Coordinator",
    company: "Youth Innovation Lab",
  },
];

export { Judges };
