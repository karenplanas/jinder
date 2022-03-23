import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../service/firebase";
import { setDoc, doc } from "firebase/firestore";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";

const EmployeeForm = () => {
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerUser = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((cred) => {
        const user = {
          firstName: registerFirstName,
          lastName: registerLastName,
          initials: registerFirstName[0] + registerLastName[0],
          id: cred.user.uid,
        };
        const res = setDoc(doc(db, "users", user.id), user);
        console.log("res", res);
        console.log("cred", cred);
      });
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={registerUser}>
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
      <Button className="contained" text="Sign Up" />
    </form>
  );
};

export default EmployeeForm;
