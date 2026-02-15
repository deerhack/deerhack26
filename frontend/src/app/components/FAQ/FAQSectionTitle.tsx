import { cabinetBold, cabinetRegular } from "@/app/utils/fonts";
import { ReactElement } from "react";

interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
  link: ReactElement;
}

const FAQSectionTitle: React.FC<Props> = ({
  title,
  isActive,
  onClick,
  link,
}) => {
  return (
    <div
      className={`cursor-pointer min-w-56 text-[20px] md:text-[28px]  flex flex-row mb-2 items-center ${
        isActive ? "text-secondary" : "text-white"
      }`}
      onClick={onClick}
    >
      <div className="inline">{link}</div>
      <h2 className={`p-4 font-[200] md:font-[300] ${cabinetBold.className}`}>
        {title}
      </h2>
    </div>
  );
};

export default FAQSectionTitle;
