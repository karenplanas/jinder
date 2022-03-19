import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../service/firebase";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
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
      {/* Registration */}
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

      {/* Login */}

      <div>
        <h3>Login</h3>
        <form>
          <input
            value={loginEmail}
            name="loginEmail"
            type="email"
            autoComplete="email"
            placeholder="Email..."
            required
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            value={loginPassword}
            name="loginPassword"
            type="password"
            autoComplete="password"
            placeholder="Password..."
            required
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <button onClick={login}>Log IN</button>
          <div>
            <button
              onClick={() =>
                signInwithGoogle()
                  .then((user) => console.log(user))
                  .catch((error) => console.log(error))
              }
            >
              Login with Google
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                signInwithGithub()
                  .then((user) => console.log(user))
                  .catch((error) => console.log(error))
              }
            >
              Login with Github
            </button>
          </div>
        </form>
      </div>

      <h4>User Logged In: {user?.email}</h4>
      <button onClick={logout}>Log out</button>
    </>
  );
};

export default Login;
