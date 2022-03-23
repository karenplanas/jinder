import React, { useState } from "react";
import { InputTextField } from "../InputTextField/InputTextField";

const EmployeeForm = () => {
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
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
    </div>
  );
};

export default EmployeeForm;
