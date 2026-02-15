"use client";
import { memo, useEffect, useState } from "react";
import { cabinetBold, cabinetMedium, cabinetRegular } from "@/app/utils/fonts";

interface CounterProp  {
  targetDate:string
  className?:string

}

const Timer_wrapper:React.FC<CounterProp> = ({targetDate,className}) => {
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);
  const Counter_component = memo(Counter);
  return isClient ? <Counter_component targetDate={targetDate} className={className} /> : null;
};

const Counter = ({targetDate,className}:CounterProp) => {
  const calculateTimeLeft = (): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    // const countDownDate = new Date("May 10, 2024 17:00:00").getTime();
    const countDownDate = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;
    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (number: number): string => {
    return number < 10 ? `0${number}` : number.toString();
  };

  return (
    <div className={`lg:max-w-full text-primary-gradient-color`}>
      <div className="flex justify-center flex-wrap">
        <div className="flex flex-col items-center lg:min-w-48 md:min-w-16">
          <p
            className={`text-4xl lg:text-9xl md:text-7xl xl:text-[10rem] font-bold tracking-[0.25rem] lg:tracking-[1.25rem] ${cabinetBold.className}  `}
          >
            {addLeadingZero(timeLeft.days)}:
          </p>
          <span className={` text-[15px] md:text-[25px] lg:text-[35px] mr-4 ${cabinetMedium.className}`}>
            Days
          </span>
        </div>
        <div className="flex flex-col items-center lg:min-w-48 md:min-w-16">
          <p
            className={`text-4xl lg:text-9xl md:text-7xl font-bold xl:text-[10rem] tracking-[0.25rem] lg:tracking-[1.25rem] ${cabinetBold.className}  `}
          >
            {addLeadingZero(timeLeft.hours)}:
          </p>
          <span className={` text-[15px]  md:text-[25px] lg:text-[35px]  mr-4 ${cabinetMedium.className}`}>
            Hours
          </span>
        </div>
        <div className="flex flex-col items-center lg:min-w-48 md:min-w-16">
          <p
            className={`text-4xl lg:text-9xl md:text-7xl xl:text-[10rem] font-bold tracking-[0.25rem] lg:tracking-[1.25rem] ${cabinetBold.className} `}
          >
            {addLeadingZero(timeLeft.minutes)}:
          </p>
          <span className={`  text-[15px] md:text-[25px] lg:text-[35px] mr-4 ${cabinetMedium.className}`}>
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center lg:w-48 xl:w-64 md:min-w-16">
          <p
            className={`text-4xl lg:text-9xl xl:text-[10rem] md:text-7xl tracking-[0.25rem] lg:tracking-[1.25rem] lg:ml-[15px]   font-bold ${cabinetBold.className}`}
          >
            {addLeadingZero(timeLeft.seconds)}
          </p>
          <span
            className={`font-medium text-[15px] md:text-[25px] lg:text-[35px] mr-4 ${cabinetMedium.className}`}
          >
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer_wrapper;
