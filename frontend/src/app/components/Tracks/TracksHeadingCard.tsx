import { cabinetBold } from "@/app/utils/fonts";
import { ReactElement } from "react";

type TracksHeadingProps = {
  svg?: ReactElement;
  title?: string;
  headStyling?: string;
  onClick?: () => void; // Add onClick to the props interface
};

const TracksHeading = ({
  svg,
  title,
  headStyling,
  onClick,
}: TracksHeadingProps) => {
  return (
    <div
      className={`w-full h-fit flex flex-row flex-nowrap gap-2 whitespace-nowrap justify-center items-center cursor-pointer p-3 lg:text-lg text-base ${cabinetBold.className}  ${headStyling} rounded-tl-lg rounded-tr-lg `}
      onClick={onClick}
    >
      <div className="flex justify-center lg:w-fit md:w-full w-full">{svg}</div>
      <div className="lg:block hidden">{title}</div>
    </div>
  );
};
export default TracksHeading;
