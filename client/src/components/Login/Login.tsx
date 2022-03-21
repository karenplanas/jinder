import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../service/firebase";
import SignUp from "../SignUp/SignUp";

const Login: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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
      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    console.log("logged out");
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
      <div>
        <h3>Login</h3>
        <form onSubmit={login}>
          <input
            value={loginEmail}
            name="loginEmail"
            type="email"
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
            placeholder="Password..."
            required
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <button>Log IN</button>
          <form />
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
      <h4>{user?.email} Logged in</h4>
      {loggedIn ? <button onClick={logout}>Log out</button> : "not logged in"}

      <div>
        <SignUp />
      </div>
    </>
  );
};

export default Login;
