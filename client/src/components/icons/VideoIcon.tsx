import React from "react";

const VideoIcon: React.FC = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_20_34)"></g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 19H27C28.1046 19 29 19.8954 29 21V22.223V25.777V27C29 28.1046 28.1046 29 27 29H17C15.8954 29 15 28.1046 15 27V21C15 19.8954 15.8954 19 17 19ZM30.9959 27.1818C30.9009 29.3066 29.1482 31 27 31H17C14.7909 31 13 29.2091 13 27V21C13 18.7909 14.7909 17 17 17H27C29.1482 17 30.9009 18.6934 30.9959 20.8182L35 18V30L30.9959 27.1818ZM31 24.739L33 26.147V21.854L31 23.261V24.739Z"
        fill="black"
        fillOpacity="0.6"
      />
      <defs>
        <filter
          id="filter0_b_20_34"
          x="-40"
          y="-40"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="20" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_20_34"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_20_34"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { VideoIcon };
