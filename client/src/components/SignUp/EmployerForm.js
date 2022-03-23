import React, { useState } from "react";
import { InputTextField } from "../InputTextField/InputTextField";

const EmployerForm = () => {
  const [registerCompanyName, setRegisterCompanyName] = useState("");
  const [registerCompanyEmail, setRegisterCompanyEmail] = useState("");
  const [registerCompanyPassword, setRegisterCompanyPassword] = useState("");
  return (
    <>
      <InputTextField
        value={registerCompanyName}
        name="registerCompanyName"
        type="text"
        placeholder="Company name"
        onChange={(e) => {
          setRegisterCompanyName(e.target.value);
        }}
        required
      />
      <InputTextField
        value={registerCompanyEmail}
        name="registerCompanyEmail"
        type="email"
        placeholder="Email"
        required
        onChange={(e) => {
          setRegisterCompanyEmail(e.target.value);
        }}
      />
      <InputTextField
        value={registerCompanyPassword}
        name="registerCompanyPassword"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setRegisterCompanyPassword(e.target.value);
        }}
      />
    </>
  );
};

export default EmployerForm;
