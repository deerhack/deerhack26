import AboutCard from "@/app/components/About/AboutCard";
import CodeSVG from "@/app/assets/icons/Code";
import CollegeSVG from "@/app/assets/icons/College";
import CoffeCup from "@/app/assets/icons/CoffeeCup";
import Laptop from "@/app/assets/icons/Laptop";
import Guitar from "@/app/assets/icons/Guitar";
const AboutTheEventCards = () => {
  return (
    <div className="flex flex-wrap justify-center relative">
      <CoffeCup height={100} width={100} className="   absolute "  />
			<Laptop height={100} width={100} className=" absolute " />
			<Guitar height={100} width={100} className="  absolute " />

      <AboutCard
        svg={CollegeSVG({ height: 30, width: 30 })}
        title="Deerwalk Institute of Technology"
        description="Deerwalk Institute of Technology (DWIT) is an educational institution that prepares students and professionals of all levels to meet the problems and grab the possibilities of the twenty-first century IT Industry. The institute is well-known for its approach to learning that is both open-minded and responsible. It has an affiliation with Tribhuvan University and offers two undergraduate degrees, BSc. CSIT and BCA."
      />
      
    </div>
  );
};

export default AboutTheEventCards;
