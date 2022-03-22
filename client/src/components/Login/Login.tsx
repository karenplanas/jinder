import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../services/firebase';
import { Logo } from '../icons/Logo';
import { GoogleLogo } from '../icons/GoogleLogo';
import './Login.css';
import { InputTextField } from '../InputTextField/InputTextField';
// import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import SignUp from '../SignUp/SignUp';

const Login: React.FC = () => {
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
    <>
      <div className="login--container">
        <Logo />
        <div className="logo-title">Jinder</div>
        <form onSubmit={login}>
          <InputTextField
            placeholder={'Email'}
            name={loginEmail}
            value={loginEmail}
            required
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <InputTextField
            placeholder={'Password'}
            type={'password'}
            name={loginPassword}
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
    </>
  );
};

export default Login;
