import React from "react";

const Favourite: React.FC = () => {
  return (
    <div className="navIcon">
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.59789 2.61804C10.1966 0.775416 12.8034 0.775409 13.4021 2.61803L14.9207 7.2918L19.835 7.2918C21.7724 7.2918 22.578 9.77103 21.0106 10.9098L17.0348 13.7984L18.5534 18.4721C19.1521 20.3148 17.0432 21.847 15.4757 20.7082L11.5 17.8197L7.52426 20.7082M9.59789 2.61804L7.52426 20.7082M9.59789 2.61804L8.07929 7.2918H3.16501C1.22756 7.2918 0.422008 9.77103 1.98944 10.9098L5.96517 13.7984L4.44658 18.4721C3.84787 20.3148 5.95684 21.847 7.52426 20.7082M9.59789 2.61804L7.52426 20.7082"
          fill="#FAFAFC"
          stroke="#1D1D1F"
          stroke-width="2"
        />
      </svg>
      <h3 className="iconTag">Favourites</h3>
    </div>
  );
};

export default Favourite;