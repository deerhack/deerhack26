import FunGamesSVG from "@/app/assets/images/funGames";
import MusicSVG from "@/app/assets/images/music";
import WorkshopSVG from "@/app/assets/images/workshop";

import fun_games_image from "@/app/assets/images/fun_games.webp";
import live_music_image from "@/app/assets/images/live_music_image.webp";
import workshop_image from "@/app/assets/images/workshop_image.webp";

// import fun_games_image from "@/app/assets/images/expectations/badminton.jpg";
// import live_music_image from "@/app/assets/images/expectations/football.jpg";
// import workshop_image from "@/app/assets/images/expectations/workshop_2.jpg";

export const originalCards = [
  {
    svg: <FunGamesSVG height={40} width={40} />,
    title: "Fun Games",
    img: fun_games_image,
    desc: "Get ready to unleash your competitive spirit and bond with fellow participants in a series of exciting challenges and friendly competitions.",
  },
  {
    svg: <MusicSVG height={40} width={40} />,
    title: "Live Music",
    img: live_music_image,
    desc: "Take a break from coding and immerse yourself in the soulful melodies and electrifying beats of live music performances, adding rhythm and energy to your DeerHack experience.",
  },
  {
    svg: <WorkshopSVG height={40} width={40} />,
    title: "Workshops",
    img: workshop_image,
    desc: "Dive deep into cutting-edge technologies, sharpen your skills, and gain invaluable insights from industry experts through interactive workshops tailored to enhance your expertise.",
  },
];
