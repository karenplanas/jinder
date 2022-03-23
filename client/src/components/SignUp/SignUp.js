import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database, db } from "../../service/firebase";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
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
      <Toggle onChange={(event) => setToggled(event.target.checked)} />
      <p>Looking for {toggled ? "a job" : "a developer"}? SIGN UP!</p>
      <div>{toggled ? <EmployeeForm /> : <EmployerForm />}</div>
    </div>
  );
};

export default SignUp;
