import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const GoogleLogo: React.FC<Props> = ({ width = 30, height = 30 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.0001 68.5415C19.688 68.542 6.31927 58.1727 2.51112 43.3417C-1.29704 28.5107 5.42221 12.9834 18.8404 5.60685C32.2586 -1.76967 48.969 0.877394 59.4505 12.0398L50.9484 20.0257C46.8273 15.6019 41.046 13.1003 35.0001 13.1248C23.8816 13.1485 14.5495 21.5088 13.3083 32.5579C12.0672 43.6069 19.3118 53.8294 30.148 56.3192C40.9842 58.8091 51.9643 52.7742 55.6705 42.2915H39.3751V30.6248H68.5418V36.7498C67.6099 54.5876 52.8622 68.5658 35.0001 68.5415V68.5415Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0417 23.9164L6.84839 16.5635"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2752 46.165L7.42896 54.1275"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.0405 52.5845L55.828 61.3491"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


export { GoogleLogo };
