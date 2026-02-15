import { ReactElement } from "react";

export default function NewOpportunitySVG({
  height = 124,
  width = 113,
  className = "opacity-[100%]",
}: {
  height?: number;
  width?: number;
  className?: string;
}): ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 268 214" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10.749rem] md:w-[auto] md:h-auto h-[9.764rem] hidden md:block">
    <g clip-path="url(#clip0_16_1950)">
    <path opacity="0.16" fill-rule="evenodd" clip-rule="evenodd" d="M267.296 0.100098L218.735 10.3239L236.407 18.8256L158.129 101.466L101.801 90.5819L99.9885 90.227L98.8217 91.5659L0.653442 204.042L102.152 98.0538L158.743 111.982L160.964 112.53L162.834 110.727L245.924 30.7962L251.112 51.2121L267.296 0.100098ZM27.2138 191.316V212.912H66.2227V150.586L27.2138 191.316ZM85.7234 130.223L102.152 113.069L124.732 118.625V212.913H85.7234V130.223ZM162.835 125.739L160.964 127.538L158.743 126.993L144.233 123.422V212.913H183.239V106.11L162.835 125.739ZM202.744 212.912V87.352L241.749 49.8271V212.912H202.744Z" fill="url(#paint0_linear_16_1950)"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear_16_1950" x1="133.975" y1="0.100098" x2="133.975" y2="212.913" gradientUnits="userSpaceOnUse">
    <stop stop-color="#6633CC"/>
    <stop offset="1" stop-color="#110C24"/>
    </linearGradient>
    <clipPath id="clip0_16_1950">
    <rect width="266.671" height="213.84" fill="white" transform="translate(0.65332 0.100098)"/>
    </clipPath>
    </defs>
    </svg>    
  );
}
