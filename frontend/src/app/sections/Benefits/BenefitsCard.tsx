import CardDark from "@/app/components/BenefitsOfParticipating/CardDark";
import CardLight from "@/app/components/BenefitsOfParticipating/CardLight";
import NewNetworksSVG from "@/app/assets/images/NewNetworks";
import NewOpportunitySVG from "@/app/assets/images/NewOpportunity";
import NewSupportIdeaSVG from "@/app/assets/images/NewSupportIdea";
import NewInterpersonalDevSVG from "@/app/assets/images/NewInterpersonalDev";
import BenefitsFirstCard from "@/app/assets/images/BenefitsFirstCard";
import BenefitsSecondCard from '@/app/assets/images/BenefitsSecondCard';
import BenefitsCardThird from "@/app/assets/images/BenefitsCardThird";
import BenefitsCardFourth from "@/app/assets/images/BenefitsCardFourth";


export default function BenefitsCards() {
  return (
    <div className="flex flex-col justify-center gap-5 mx-10 w-full items-center">
      <div className="flex w-full h-full flex-col gap-5 lg:flex-row justify-center items-center">
        <CardDark
          title="Build Powerful Network"
          bordercolour={true}
          description="DeerHack is the perfect platform to find like-minded people and build your connections."
          pgNo="1."
          svg={<BenefitsFirstCard/>}
        />
        <CardLight
          title="Support for Your Ideas"
          description="DeerHack is dedicated to fostering ideas that drive global change and provide new solutions."
           pgNo="2."
          svg={<BenefitsSecondCard/>}
        />
      </div>

      <div className="flex w-full h-full flex-col gap-5 lg:flex-row justify-center items-center">
      <CardDark
          title="Career Opportunities"
          description="Showcase talents, gain hands-on experience, and develop crucial skills like problem-solving and teamwork for career success."
           pgNo="3."
          svg={<BenefitsCardThird/>}
        />
        <CardLight
          title="Interpersonal Development"
          bordercolour={true}
          description="Embrace the challenge at DeerHack and watch as your interpersonal skills evolve under pressure, transforming you into a more resilient and effective collaborator."
           pgNo="4."
          svg={<BenefitsCardFourth/>}
        />
      </div>
    </div>
  );
}