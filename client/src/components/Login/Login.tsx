import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../service/firebase";
import Registration from "../Registration/Registration";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState<{
    email: string | null;
  } | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log("auth state changed", currentUser);
  });

  const login = async (e: any) => {
    console.log("logged in!");

    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoggedIn(true);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    console.log("logged out");
    await signOut(auth);
    setLoggedIn(false);
    console.log(user);
  };

  const signInwithGoogle = () => {
    console.log("logged in google");
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const signInwithGithub = () => {
    console.log("logged in github");
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };
  return (
    <>
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
                  .then((user) => {
                    console.log(user);
                    setLoggedIn(true);
                  })
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
                  .then((user) => {
                    console.log(user);
                    setLoggedIn(true);
                  })
                  .catch((error) => console.log(error))
              }
            >
              Login with Github
            </button>
          </div>
        </form>
      </div>
      <h4>{user?.email}</h4>
      {loggedIn ? <button onClick={logout}>Log out</button> : "not logged in"}
      <div>
        <Registration />
      </div>
    </>
  );
};

export default Login;
