import React from "react";

interface Props {
  width?: number
  height?: number
}

const Square: React.FC<Props> = ({ width = 24, height = 24}) => {
  return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x={1}
          y={1}
          width="24"
          height="24"
          rx="7"
          stroke="#1D1D1F"
          fill="#ffffff"
          strokeWidth="2"
        />
      </svg>
  );
};

export { Square };
