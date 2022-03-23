import React, { useState } from "react";
import "./SignUp.css";
import Toggle from "../Toggle/Toggle";
import { Logo } from "../icons/Logo";
import EmployeeForm from "./EmployeeForm";
import EmployerForm from "./EmployerForm";

const SignUp: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="signup--container">
      <Logo />
      <div className="logo-title">Jinder</div>
      <p className="signup--text">
        Looking for {toggled ? "a job" : "a developer"}? SIGN UP!
      </p>
      <Toggle onChange={(event) => setToggled(event.target.checked)} />

      <div>{toggled ? <EmployeeForm /> : <EmployerForm />}</div>
    </div>
  );
};

export default SignUp;
