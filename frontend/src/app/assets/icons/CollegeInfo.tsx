import { ReactElement } from "react";

export default function DarinCup({
  height = 50,
  width = 50,
  className=" "
}: {
  height?: number;
  width?: number;
  className?:string;
}): ReactElement {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#241A4A"/>
<path d="M8.52344 23.748V12.1664H11.8325V8.85742H20.105V15.4755H23.414V23.748H16.796V20.439H15.1415V23.748H8.52344ZM10.1779 22.0935H11.8325V20.439H10.1779V22.0935ZM10.1779 18.7845H11.8325V17.13H10.1779V18.7845ZM10.1779 15.4755H11.8325V13.821H10.1779V15.4755ZM13.487 18.7845H15.1415V17.13H13.487V18.7845ZM13.487 15.4755H15.1415V13.821H13.487V15.4755ZM13.487 12.1664H15.1415V10.5119H13.487V12.1664ZM16.796 18.7845H18.4505V17.13H16.796V18.7845ZM16.796 15.4755H18.4505V13.821H16.796V15.4755ZM16.796 12.1664H18.4505V10.5119H16.796V12.1664ZM20.105 22.0935H21.7595V20.439H20.105V22.0935ZM20.105 18.7845H21.7595V17.13H20.105V18.7845Z" fill="url(#paint0_linear_1867_559)"/>
<defs>
<linearGradient id="paint0_linear_1867_559" x1="5.83281" y1="6.75875" x2="17.6794" y2="21.0298" gradientUnits="userSpaceOnUse">
<stop stop-color="#6633CC"/>
<stop offset="1" stop-color="#F5C144"/>
</linearGradient>
</defs>
</svg>



  );
}
