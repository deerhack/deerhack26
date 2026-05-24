import { ReactElement } from "react";

export default function CoffeeCup({
  height = 34,
  width = 34,
  className = " ",
}: {
  height?: number;
  width?: number;
  className?: string;
}): ReactElement {
  return (
 <svg width={width} height={height} className={className} viewBox="0 0 164 185" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.7227 43.1256C12.4844 53.4818 10.6445 44.0884 12.5888 41.4867C13.7843 39.8871 15.2815 38.5904 16.8386 37.4957C18.3245 36.451 20.0322 35.2039 20.8204 34.8874C25.6748 32.9379 28.8465 40.095 32.7227 43.1256ZM15.7 41.4897C16.306 40.5501 17.5065 38.7998 21.1349 36.8174C23.9841 35.2607 25.3915 37.8365 26.0537 39.0486C26.5186 39.8995 24.0959 41.4829 23.3896 42.2984C22.8382 42.9351 22.2281 43.6396 21.9735 44.4396C21.53 45.8335 19.4364 45.05 17.6482 44.3808C17.0956 44.174 16.5722 43.9781 16.1357 43.8607C15.0312 43.5638 14.7102 43.0242 15.7 41.4897Z" fill="#A9A9A9"/>
<rect x="11.6875" y="53.8277" width="67.2012" height="3.08201" rx="1.54101" transform="rotate(-34.793 11.6875 53.8277)" fill="#6633CC"/>
<rect x="97.8008" y="178.829" width="68.423" height="3.08201" rx="1.54101" transform="rotate(-34.793 97.8008 178.829)" fill="#6633CC"/>
<path d="M153.454 129.372C154.553 130.954 154.183 140.593 154.183 140.593L125.963 160.202L120.247 151.976C120.247 151.976 143.339 114.815 153.454 129.372Z" fill="#3B1770"/>
<path d="M88.4526 175.006C90.431 177.854 98.4946 179.288 98.4946 179.288L126.59 159.766L120.931 151.354C120.931 151.354 86.4741 172.159 88.4526 175.006Z" fill="#3B1770"/>
<path d="M153.066 130.576C153.52 130.261 153.632 129.637 153.317 129.184L83.5422 28.7648L18.3214 74.0827L88.0962 174.502C88.4114 174.955 89.0345 175.068 89.4881 174.752L153.066 130.576Z" fill="url(#paint0_linear_1113_4537)"/>
<path d="M14.1977 55.8355C16.3649 59.4899 13.0476 66.4926 18.3235 74.0857L47.1712 54.0412L37.2758 39.8C29.7486 45.0265 15.9566 54.6198 14.1977 55.8355Z" fill="url(#paint1_linear_1113_4537)"/>
<path d="M67.8794 18.5354C70.5484 21.8413 78.2684 21.1748 83.5443 28.7678L54.45 48.9836L44.5547 34.7423C52.0785 29.5109 66.1265 19.7599 67.8794 18.5354Z" fill="url(#paint2_linear_1113_4537)"/>
<path d="M32.5093 43.1111L50.0687 30.9102L59.9641 45.1514L42.4046 57.3524L32.5093 43.1111Z" fill="url(#paint3_linear_1113_4537)"/>
<mask id="mask0_1113_4537"  maskUnits="userSpaceOnUse" x="15" y="19" width="137" height="156">
<path d="M151.19 131.882C151.643 131.567 151.755 130.944 151.44 130.49L81.6653 30.0713L19.4132 73.3263L89.188 173.745C89.5032 174.199 90.1263 174.311 90.5799 173.996L151.19 131.882Z" fill="url(#paint4_linear_1113_4537)"/>
<path d="M15.0268 55.2616C17.2055 58.9081 14.1394 65.7363 19.4153 73.3293L46.9499 54.1973L37.0545 39.956C29.8699 44.9445 16.7059 54.1014 15.0268 55.2616Z" fill="url(#paint5_linear_1113_4537)"/>
<path d="M66.2651 19.6594C68.9227 22.9732 76.3915 22.4813 81.6674 30.0743L53.8974 49.3699L44.002 35.1286C51.1833 30.1352 64.5921 20.8283 66.2651 19.6594Z" fill="url(#paint6_linear_1113_4537)"/>
<path d="M32.5049 43.1164L49.2651 31.4708L59.1605 45.7121L42.4003 57.3577L32.5049 43.1164Z" fill="url(#paint7_linear_1113_4537)"/>
</mask>
<g mask="url(#mask0_1113_4537)">
<rect width="16.8085" height="104.043" transform="matrix(0.884984 0.465621 -0.429464 0.903084 102.568 54.3006)" fill="#FCF7FF" fill-opacity="0.23"/>
<rect width="5.38033" height="98.547" transform="matrix(0.884984 0.465621 -0.429464 0.903084 116.711 72.7428)" fill="#FCF7FF" fill-opacity="0.23"/>
</g>
<path d="M74.5021 30.5785C74.7824 29.5515 76.26 29.6153 76.4507 30.6626L77.9639 38.9714C78.0771 39.5934 78.732 39.9555 79.319 39.7208L85.2422 37.352C85.9898 37.053 86.7661 37.715 86.589 38.5004L83.0057 54.3934C82.7701 55.4384 81.2786 55.4315 81.0527 54.3843L79.0129 44.9299C78.8824 44.3248 78.239 43.9825 77.6642 44.2123L71.8039 46.555C71.0374 46.8615 70.2507 46.1597 70.468 45.3633L74.5021 30.5785Z" fill="#F5C144"/>
<defs>
<linearGradient id="paint0_linear_1113_4537" x1="12.6249" y1="17.6448" x2="238.829" y2="46.2199" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
<linearGradient id="paint1_linear_1113_4537" x1="12.6249" y1="17.6448" x2="238.829" y2="46.2199" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
<linearGradient id="paint2_linear_1113_4537" x1="12.6249" y1="17.6448" x2="238.829" y2="46.2199" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
<linearGradient id="paint3_linear_1113_4537" x1="12.6249" y1="17.6448" x2="238.829" y2="46.2199" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
<linearGradient id="paint4_linear_1113_4537" x1="12.6877" y1="17.6034" x2="233.611" y2="40.3407" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
<linearGradient id="paint5_linear_1113_4537" x1="12.6877" y1="17.6034" x2="233.611" y2="40.3407" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
<linearGradient id="paint6_linear_1113_4537" x1="12.6877" y1="17.6034" x2="233.611" y2="40.3407" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
<linearGradient id="paint7_linear_1113_4537" x1="12.6877" y1="17.6034" x2="233.611" y2="40.3407" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5C144"/>
<stop offset="0.501462" stop-color="#E669FF"/>
<stop offset="0.980769" stop-color="#300638"/>
</linearGradient>
</defs>
</svg>

  );
}
