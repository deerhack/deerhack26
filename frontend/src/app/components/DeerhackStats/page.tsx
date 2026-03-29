import CardMedium from "./CardMedium";
import CardMini from "./CardMini";
import HackersSVG from "@/app/assets/images/hackers";
import ProjectsSVG from "@/app/assets/images/projects";
import CardLarge from "./CardLarge";

export default function StatsSection() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col gap-4">
        <CardMedium />
        <CardMini svg={<HackersSVG />} title="Hackers" numbers={215} customClass="bg-[#532B6A]"/>
        <CardMini svg={<ProjectsSVG />} title="Total Projects" border={true} numbers={33} />
      </div>
      <CardLarge />
    </div>
  );
}
