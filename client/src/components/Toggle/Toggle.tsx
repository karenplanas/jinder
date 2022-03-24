import "./Toggle.css";

const Toggle = ({ onChange }: { onChange: (event: any) => void }) => {
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
