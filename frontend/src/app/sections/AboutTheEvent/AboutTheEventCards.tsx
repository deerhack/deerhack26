import AboutCard from "@/app/components/About/AboutCard";
import CodeSVG from "@/app/assets/icons/Code";
import CollegeSVG from "@/app/assets/icons/College";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";

const AboutTheEventCards = () => {
  const tabs = {
    deerhack: {
      svg: <DeerhackLogo height={50} width={50} />,
      title: "Deerhack 2026",
      description:
        "DeerHack 2026 is a 48-hour hackathon where developers, designers, students, entrepreneurs, educators, and mentors work together to build ideas that solve real-world complications. DeerHack provides an opportunity for individuals to sharpen their teamwork, communication, leadership skills, and networking in a risk-free and comfortable environment.",
    },
    software: {
      svg: <CodeSVG height={40} width={40} />,
      title: "Software Club",
      description:
        "The Software Club of Deerwalk Institute of Technology is a student-led organization dedicated to promoting a culture of technology, innovation, and collaboration through workshops and events. Additionally, it is the core team responsible for building Deerhack. Whether it's late-night debugging sessions or organizing large-scale hackathons, we're focused on bridging the gap between classroom theory and the grit of the tech industry.",
    },
    college: {
      svg: <CollegeSVG height={40} width={40} />,
      title: "Deerwalk Institute of Technology",
      description:
        "Deerwalk Institute of Technology (DWIT) is an educational institution that prepares students and professionals of all levels to meet the problems and grab the possibilities of the twenty-first century IT Industry. The institute is well-known for its approach to learning that is both open-minded and responsible. It has an affiliation with Tribhuvan University and offers two undergraduate degrees, BSc. CSIT and BCA.",
    },
  };

  return (
    <div className="flex flex-wrap justify-center relative">
      <AboutCard tabs={tabs} />
    </div>
  );
};

export default AboutTheEventCards;
