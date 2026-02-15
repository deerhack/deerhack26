"use client";
import AboutEventSVG from "@/app/assets/icons/AboutEventSVG";
import ArrowSVG from "@/app/assets/icons/ArrowSVG";
import EventLogSVG from "@/app/assets/icons/EventLogSVG";
import OtherSVG from "@/app/assets/icons/OtherSVG";
import ParticipationSVG from "@/app/assets/icons/ParticipationSVG";
import FAQQuestion from "@/app/components/FAQ/FAQQuestion";
import FAQSectionTitle from "@/app/components/FAQ/FAQSectionTitle";
import { cabinetBold } from "@/app/utils/fonts";
import { useState, useEffect, ReactElement, useRef } from "react";

interface Section {
  title: string;
  questions: Question[];
  link: ReactElement;
}

interface Question {
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  const sections: Section[] = [
    {
      title: "About the Event",
      questions: [
        {
          question: "What is DeerHack?",
          answer:
            "DeerHack is an event at Deerwalk Institute of Technology where individuals or teams collaborate to bring forward software or hardware-based solutions to a problem and work intensively for a set amount of time.",
        },
        {
          question: "How long will DeerHack last?",
          answer:
            "While DeerHack is a 48-Hour program, DeerHack also has a lot of other fun, team-building events lined up for the participants which will take place from 11th to 13th July 2025 making DeerHack a 3-Day event collectively.",
        },
        {
          question: "Who can Participate in DeerHack?",
          answer:
            "Anyone can participate in DeerHack, regardless of their background or skill level. But do make sure that you have the skill set to make your solution a reality.",
        },
      ],
      link: (
        <AboutEventSVG
          className={`${
            activeSectionIndex === 0 ? "fill-secondary" : "fill-[#FCF7FF]"
          }`}
        />
      ),
    },
    {
      title: "Event Logistics",
      questions: [
        {
          question: "What should I bring to DeerHack?",
          answer:
            "You should bring any necessary equipment or tools for your project, such as a laptop or hardware components. Additionally, you may also want to bring a water bottle, and comfortable clothing for the long hours of relrentless innovation.",
        },
        {
          question: "Will foods and drinks be provided at DeerHack?",
          answer:
            "Yes, you will be provided with food and momentary refreshment.",
        },
        {
          question: "Can I work in a team or do I have to work alone?",
          answer:
            "DeerHack is a team-based event, but don't hesitate to register even if you're alone, we will conduct a pre-event where all the individuals who signed up will be assigned teams respective to their interests and expertise.",
        },
      ],
      link: (
        <EventLogSVG
          className={`${
            activeSectionIndex === 1 ? "fill-secondary" : "fill-[#FCF7FF]"
          }`}
        />
      ),
    },
    {
      title: "Participation Guidelines",
      questions: [
        {
          question: "How will DeerHack be judged?",
          answer:
            "DeerHack has a diverse set of judges eager to know about your solutions. They will judge you on the basis of multiple factors like innovation, technical difficulty and user experience. Additionally, your teamwork and presentation skills might also be taken into consideration.",
        },
        {
          question: "Can I work on a project I've done before DeerHack?",
          answer:
            "While we cannot stop ideas generated outside DeerHack from being used, we require that all work on the projects be done during the event. No pre-existing projects will be allowed to be used.",
        },
        {
          question: "What if I get stuck on a problem during DeerHack?",
          answer:
            "With our experienced set of guides and mentors. DeerHack will make sure that if you encounter a problem, it will not go unsolved. Just don't be reluctant to reach out to us if you're facing a problem.",
        },
      ],
      link: (
        <ParticipationSVG
          className={`${
            activeSectionIndex === 2 ? "fill-secondary" : "fill-[#FCF7FF]"
          }`}
        />
      ),
    },
    {
      title: "Other",
      questions: [
        {
          question: "What about APIs?",
          answer:
            "You are permitted to use either your own or third-party APIs, provided that your project is entirely original and has not been used before.",
        },
        {
          question: "I have additional questions, how do I ask them?",
          answer:
            "No need to worry. We are available to help and answer any questions you may have. You can send us an email at deerhack@deerwalk.edu.np or contact us through our social media accounts.",
        },
      ],
      link: (
        <OtherSVG
          className={`${
            activeSectionIndex === 3 ? "fill-secondary" : "fill-[#FCF7FF]"
          }`}
        />
      ),
    },
  ];

  const handleSectionOnClick = (index: number) => {
    setActiveSectionIndex(index);
    setExpandedIndex(-1);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 250;
    }
  };

  return (
    <div key="faqContainer" className="bg-dark-purple md:w-[70%] w-[80%]">
      <div className=" box-border flex flex-col items-end sm:items-center md:items-start md:flex-row nowrap  w-full justify-between">
        <div className="sm:block md:hidden mb-5" onClick={handleArrowClick}>
          <ArrowSVG />
        </div>
        <div
          ref={containerRef}
          className="flex flex-row  mx-auto static sm:w-[70%] md:w-[70%] w-[90%] md:flex-col overflow-x-auto md:overflow-hidden no-scrollbar md:mb-20 mb-8 "
        >
          {sections.map((section, index) => (
            <FAQSectionTitle
              key={index}
              title={section.title}
              isActive={activeSectionIndex === index}
              onClick={() => handleSectionOnClick(index)}
              link={section.link}
            />
          ))}
        </div>
        <div className="sm:w-[80%] w-[80%] mx-auto ">
          {sections[activeSectionIndex].questions.map((question, index) => (
            <FAQQuestion
              key={index}
              question={question}
              index={index}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
