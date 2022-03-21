import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";

const SignUp: React.FC = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Registration</h3>
      <form onSubmit={register}>
        <div>
          <h3>Registuer user</h3>
          <InputTextField
            value={registerEmail}
            name="registerEmail"
            type="email"
            placeholder="Email..."
            required
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
          <InputTextField
            value={registerPassword}
            name="registerPassword"
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <Button className="contained" text="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
