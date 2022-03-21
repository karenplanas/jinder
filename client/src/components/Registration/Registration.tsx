import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";

const Registration = () => {
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
          <input
            value={registerEmail}
            name="registerEmail"
            type="email"
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
            placeholder="Password..."
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <button>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
