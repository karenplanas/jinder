import React from "react";

const Home: React.FC = () => {
  return (
    <div className="navIcon">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1"
          width="22"
          height="22"
          rx="7"
          fill="#00BEA7"
          stroke="#1D1D1F"
          strokeWidth="2"
        />
      </svg>
      <h3 className="iconTag">Home</h3>
    </div>
  );
};

export default Home;
