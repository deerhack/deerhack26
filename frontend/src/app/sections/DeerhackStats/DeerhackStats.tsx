import CardMedium from "@/app/components/DeerhackStats/CardMedium";
import CardMini from "@/app/components/DeerhackStats/CardMini";
import HackersSVG from "@/app/assets/images/hackers";
import ProjectsSVG from "@/app/assets/images/projects";
import CardLarge from "@/app/components/DeerhackStats/CardLarge";

export default function DeerHackStats() {
  return (
    <div className="flex-wrap flex gap-4 justify-center">
      <div className="flex flex-col gap-4">
        <CardMedium />
        <CardMini svg={<HackersSVG />} title="Hackers" numbers={147} />
        <CardMini svg={<ProjectsSVG />} title=" Total Projects" numbers={36} />
      </div>
      <CardLarge />
    </div>
  );
}
