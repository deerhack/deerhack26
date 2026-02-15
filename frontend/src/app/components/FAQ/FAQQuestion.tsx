import React, { useState } from "react";
import { cabinetBold, cabinetRegular } from "@/app/utils/fonts";
import PlusHorizontalSVG from "@/app/assets/images/plusHorizontal";
import PlusVerticalSVG from "@/app/assets/images/plusVertical";

interface Question {
  question: string;
  answer: string;
}

interface Props {
  question: Question;
  index: number;
  expandedIndex: number;
  setExpandedIndex: (index: number) => void;
}

const FAQQuestion: React.FC<Props> = ({
  question,
  index,
  expandedIndex,
  setExpandedIndex,
}) => {
  const isExpanded = expandedIndex === index;

  const toggleAnswerVisibility = () => {
    setExpandedIndex(isExpanded ? -1 : index); // Collapse if already expanded, otherwise expand
  };

  return (
    <div className="flex flex-col justify-center items-start bg-dark-purple text-white text-lg md:text-xl  border-b border-secondary mb-5">
      <button
        className={`flex items-center justify-between text-left text-xl sm:text-2xl md:text-3xl gap-8 py-2 w-full md:mb-2 md-1 ${cabinetBold.className}`}
        onClick={toggleAnswerVisibility}
      >
        {question.question}
        <span className="relative ml-2 w-5 h-5">
          <PlusHorizontalSVG
            className={`top-0 left-0 w-5 h-full transition-transform duration-500  ease-in-out transform`}
          />
          <PlusVerticalSVG
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </span>
      </button>
      <div className={`overflow-hidden`}>
        <p
          className={`text-xs sm:text-base transition-all ease-in-out md:text-lg ${cabinetRegular.className} ${
            isExpanded
              ? "max-h-screen mb-2 opacity-100"
              : "max-h-0 opacity-0 -mb-2  "
          } duration-500`}
        >
          {question.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQQuestion;
