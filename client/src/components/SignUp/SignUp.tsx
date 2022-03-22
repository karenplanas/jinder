import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../service/firebase";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";
import { ref, push, child, update } from "firebase/database";
import "./SignUp.css";
import Toggle from "../Toggle/Toggle";
import { Logo } from "../icons/Logo";

const SignUp: React.FC = () => {
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toggled, setToggled] = useState(false);

  const handleSubmit = () => {
    let obj = {
      firstName: registerFirstName,
      lastName: registerLastName,
      email: registerEmail,
      password: registerPassword,
      confirmPassword: confirmPassword,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };

  // const register = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     await createUserWithEmailAndPassword(
  //       auth,
  //       registerFirstName,
  //       registerEmail,
  //       registerPassword
  //     );
  //     setRegisterFirstName("");
  //     setRegisterEmail("");
  //     setRegisterPassword("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="signup--container">
      <Logo />
      <div className="logo-title">Jinder</div>
      <Toggle onChange={(event) => setToggled(event.target.checked)} />
      <p>Sign-Up for {toggled ? "Job-seeker" : "Company"}</p>
      <form>
        <div>
          <InputTextField
            value={registerFirstName}
            name="registerEmail"
            type="text"
            placeholder="First name"
            onChange={(e) => {
              setRegisterFirstName(e.target.value);
            }}
            required
          />
          <InputTextField
            value={registerLastName}
            name="registerLastName"
            type="text"
            placeholder="Last name"
            onChange={(e) => {
              setRegisterLastName(e.target.value);
            }}
            required
          />
          <InputTextField
            value={registerEmail}
            name="registerEmail"
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
          <InputTextField
            value={registerPassword}
            name="registerPassword"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <InputTextField
            value={confirmPassword}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Button className="contained" text="Sign Up" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
