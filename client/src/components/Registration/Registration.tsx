import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";

const Registration = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Registration</h3>
      <form>
        <div>
          <h3>Registuer user</h3>
          <input
            value={registerEmail}
            name="registerEmail"
            type="email"
            autoComplete="email"
            placeholder="Email..."
            required
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
          <input
            value={registerPassword}
            name="registerPassword"
            type="password"
            autoComplete="password"
            placeholder="Password..."
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <button onClick={register}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
