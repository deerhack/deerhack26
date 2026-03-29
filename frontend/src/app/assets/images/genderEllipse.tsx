import { ReactElement } from "react";

export default function GenderEllipseSVG({
  height = 315,
  width = 315,
}: {
  height?: number;
  width?: number;
}): ReactElement {
  return (
    <svg 
     height={`${height}`}
    width={`${width}`}
     viewBox="0 0 315 315" 
     fill="none"
      xmlns="http://www.w3.org/2000/svg">
<path
  d="M157.823 -0.221
     A157.87 157.87 0 1 1 -0.047 157.649
     L63.673 157.649
     A94.15 94.15 0 1 0 157.823 63.499 Z"
  fill="#602EA7"
/>


<path
  d="M-0.047 157.649
     A157.87 157.87 0 0 1 65.033 29.889
     L102.616 86.043
     A94.15 94.15 0 0 0 63.673 157.649 Z"
  fill="rgba(235,140,253,1)"
/>


<path
  d="M65.033 29.889
     A157.87 157.87 0 0 1 157.823 -0.221
     L157.823 63.499
     A94.15 94.15 0 0 0 102.616 86.043 Z"
  fill="rgba(157,75,173,1)"
/>
</svg>
  );
}
