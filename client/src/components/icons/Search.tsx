import React from "react";

const Search: React.FC = () => {
  return (
    <div className="navIcon">
      <svg
        width="27"
        height="26"
        viewBox="0 0 27 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6756 1.61803C13.9746 1.10875 13.0254 1.10875 12.3244 1.61803L2.08732 9.05573C1.38635 9.56502 1.09303 10.4678 1.36078 11.2918L5.27101 23.3262C5.53876 24.1503 6.30667 24.7082 7.17312 24.7082H19.8269C20.6933 24.7082 21.4612 24.1503 21.729 23.3262L25.6392 11.2918C25.907 10.4678 25.6137 9.56501 24.9127 9.05573L14.6756 1.61803Z"
          fill="#FAFAFC"
          stroke="#1D1D1F"
          strokeWidth="2"
        />
      </svg>
      <h3 className="iconTag">Search</h3>
    </div>
  );
};

export default Search;
