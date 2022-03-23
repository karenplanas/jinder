import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { auth } from "../../services/firebase";
import { Logo } from "../icons/Logo";
import { InputTextField } from "../InputTextField/InputTextField";
import { Button } from "../Button/Button";
import "./Login.css";

const Login: React.FC = () => {

  const methods = useForm();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState<{
    email: string | null;
  } | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoggedIn(true);
      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    console.log('logged out');
    await signOut(auth);
    setLoggedIn(false);
  };

  const signInwithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const signInwithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };
  return (
    <FormProvider {...methods}>
      <div className="login--container">
        <Logo />
        <div className="logo-title">Jinder</div>
        <form onSubmit={login} autoComplete="off">
          <InputTextField
            placeholder={'Email'}
            name='email'
            value={loginEmail}
            required
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <InputTextField
            placeholder={'Password'}
            type={'password'}
            name='password'
            value={loginPassword}
            required
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <Button className="contained" text="Sin In" />

          <div className="login--option">
            <h3>Or</h3>
          </div>
          <Button
            className="outlined"
            text="Log in with Google"
            // icon={<GoogleLogo />}
            onClick={() =>
              signInwithGoogle()
                .then((user) => {
                  console.log(user);
                  setLoggedIn(true);
                })
                .catch((error) => console.log(error))
            }
          />
          <Button
            className="outlined"
            text="Log in with Github"
            // icon={<FaGithub />}
            onClick={() =>
              signInwithGithub()
                .then((user) => {
                  console.log(user);
                  setLoggedIn(true);
                })
                .catch((error) => console.log(error))
            }
          />
        </form>
        <div className="sign-up">
          Not registered yet?
          <span className="join-link">
            <Link to="/sign-up">Join Now!</Link>
          </span>
        </div>
        <div>
          <h4>{user?.email}</h4>
          {loggedIn ? (
            <Button className="contained" text="Log Out" onClick={logout} />
          ) : (
            ''
          )}
        </div>
      </div>
    </FormProvider>
  );
};

export { Login };
