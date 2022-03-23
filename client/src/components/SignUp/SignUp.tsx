import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";
import { FormProvider, useForm } from "react-hook-form";
import "./SignUp.css";
import { Logo } from "../icons/Logo";
import { AppLayout } from "../AppLayout/AppLayout";

const SignUp: React.FC = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const methods = useForm();

  const register = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRegisterEmail('');
      setRegisterPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout displayNavBarTop={false} displayNavBarBottom={false}>
      <FormProvider {...methods}>
        <div className="sign-up">
          <div className="logo-title">
            <Logo />
            <h2>Jinder</h2>
          </div>
          <form onSubmit={register}>
            <div className="inputs-buttons">
              <InputTextField
                value={registerEmail}
                name="registerEmail"
                label="Email*"
                placeholder="Email"
                required
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
              <InputTextField
                value={registerPassword}
                name="registerPassword"
                label="Password*"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
              <Button className="contained" text="Sign Up" />
            </div>
          </form>
        </div>
      </FormProvider>
    </AppLayout>
  );
};

export { SignUp };
