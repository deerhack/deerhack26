import AboutCard from "@/app/components/About/AboutCard";
import CodeSVG from "@/app/assets/icons/Code";
import CollegeSVG from "@/app/assets/icons/College";
const AboutTheEventCards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <AboutCard
        svg={CollegeSVG({ height: 30, width: 30 })}
        title="Deerwalk Institute of Technology"
        description="Deerwalk Institute of Technology (DWIT) is an educational institution that prepares students and professionals of all levels to meet the problems and grab the possibilities of the twenty-first century IT Industry. The institute is well-known for its approach to learning that is both open-minded and responsible. It has an affiliation with Tribhuvan University and offers two undergraduate degrees, BSc. CSIT and BCA."
      />
      <AboutCard
        svg={CodeSVG({ height: 30, width: 30 })}
        title="DeerHack 2025"
        description="DeerHack 2025 is a 48-hour hackathon where developers, designers, students, entrepreneurs, educators, and mentors work together to build ideas that solve real-world complications. DeerHack provides an opportunity for individuals to sharpen their teamwork, communication, leadership skills, and networking in a risk-free and comfortable environment."
      />
    </div>
  );
};

export default AboutTheEventCards;
