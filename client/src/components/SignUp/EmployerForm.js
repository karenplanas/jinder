import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../service/firebase";
import { setDoc, doc } from "firebase/firestore";
import { InputTextField } from "../InputTextField/InputTextField";
import { Button } from "../Button/Button";

const EmployerForm: React.FC = () => {
  const [registerCompanyName, setRegisterCompanyName] = useState("");
  const [registerCompanyEmail, setRegisterCompanyEmail] = useState("");
  const [registerCompanyPassword, setRegisterCompanyPassword] = useState("");

  const registerCompany = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerCompanyEmail,
        registerCompanyPassword
      ).then((cred) => {
        const company = {
          companyName: registerCompanyName,
          id: cred.user.uid,
        };
        const res = setDoc(doc(db, "companies", company.id), company);
        console.log("res", res);
        console.log("cred", cred);
      });
      setRegisterCompanyName("");
      setRegisterCompanyEmail("");
      setRegisterCompanyPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={registerCompany}>
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
      <Button className="contained" text="Sign Up" />
    </form>
  );
};

export default EmployerForm;
