import CardMedium from "./CardMedium";
import CardMini from "./CardMini";
import HackersSVG from "@/app/assets/images/hackers";
import ProjectsSVG from "@/app/assets/images/projects";
import CardLarge from "./CardLarge";

export default function StatsSection() {
  return (
    <div className="flex flex-wrap border gap-4">
      <div className="flex flex-col gap-4">
        <CardMedium />
        <CardMini svg={<HackersSVG />} title="Hackers" numbers={75} />
        <CardMini svg={<ProjectsSVG />} title="Projects" numbers={18} />
      </div>
      <CardLarge />
    </div>
  );
}
