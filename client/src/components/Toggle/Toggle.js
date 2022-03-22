import React from "react";
import "./Toggle.css";

// const Toggle: React.FC = ({ onChange }: { onChange: any }) => {
//   return (
//     <div>
//       <input type="checkbox" onChange={onChange} />
//     </div>
//   );
// };
const Toggle = ({ onChange }) => {
  return (
    <div className="switch-toggle">
      <div className="button-check" id="button-check">
        <input type="checkbox" className="checkbox" onChange={onChange} />
        <span className="switch-btn"></span>
        <span className="layer"></span>
      </div>
    </div>
  );
};

export default Toggle;
