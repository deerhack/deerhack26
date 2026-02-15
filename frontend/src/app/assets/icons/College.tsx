import { ReactElement } from "react";

export default function CollegeSVG({
  height = 34,
  width = 34,
}: {
  height?: number;
  width?: number;
}): ReactElement {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.529419 33.4706V7.84968H7.84968V0.529419H26.1503V15.1699H33.4706V33.4706H18.8301V26.1503H15.1699V33.4706H0.529419ZM4.18955 29.8105H7.84968V26.1503H4.18955V29.8105ZM4.18955 22.4902H7.84968V18.8301H4.18955V22.4902ZM4.18955 15.1699H7.84968V11.5098H4.18955V15.1699ZM11.5098 22.4902H15.1699V18.8301H11.5098V22.4902ZM11.5098 15.1699H15.1699V11.5098H11.5098V15.1699ZM11.5098 7.84968H15.1699V4.18955H11.5098V7.84968ZM18.8301 22.4902H22.4902V18.8301H18.8301V22.4902ZM18.8301 15.1699H22.4902V11.5098H18.8301V15.1699ZM18.8301 7.84968H22.4902V4.18955H18.8301V7.84968ZM26.1503 29.8105H29.8105V26.1503H26.1503V29.8105ZM26.1503 22.4902H29.8105V18.8301H26.1503V22.4902Z"
        fill="url(#paint0_linear_134_408)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_408"
          x1="-5.42283"
          y1="-4.11329"
          x2="20.7844"
          y2="27.4572"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6633CC" />
          <stop offset="1" stopColor="#F5C144" />
        </linearGradient>
      </defs>
    </svg>
  );
}
