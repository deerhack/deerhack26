import type Judges from "@/app/types/judges";
import BhabukImg from "@/app/assets/images/judges/Bhabuk.png"
import RikeshImg from "@/app/assets/images/judges/rikesh.png"
import SwastikaImg from "@/app/assets/images/judges/Swastika.png"




const Judges: Judges[] = [
  {
    name:"Bhabuk Singh Kunwar",
    image: BhabukImg,
    linkedin_url:"https://www.linkedin.com/in/baburamaryal/",
    position:"Chairman and MD, Delta Law Firm",
  },
    {
    name:"Rikesh Lal Shrestha",
    image: RikeshImg,
    linkedin_url:"https://www.linkedin.com/in/binay-khadka-100485b9/",
    position:"CEO, Khalti",
  },
  {
    name:"Swastika K.C.",
    image: SwastikaImg,
    linkedin_url:"https://www.linkedin.com/in/isarojdahal/",
    position:"Founder/CTO, 28Softwares",
  },
];

export { Judges };
