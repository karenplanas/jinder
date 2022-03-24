import { useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { Logo } from '../icons/Logo';
import { InputTextField } from '../InputTextField/InputTextField';
import { Button } from '../Button/Button';
import { AppLayout } from '../AppLayout/AppLayout';
import { GoogleLogoColors } from '../icons/GoogleLogoColors';
import { GitHub } from '../icons/GitHub';
import './Login.css';
import { User } from '../../Interfaces/User';

const Login: React.FC = () => {
  const methods = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const [user, setUser] = useState<{
    email: string | null;
  } | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoggedIn(true);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  });

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
    <AppLayout displayNavBarTop={false} displayNavBarBottom={false}>
      <FormProvider {...methods}>
        <div className="login--container">
          <div className="logo-title">
            <Logo />
            <h2>Jinder</h2>
          </div>

          <form onSubmit={onSubmit}>
            <div className="inputs-buttons">
              <div className="login-inputs-signin">
                <div className="login-inputs">
                  <InputTextField
                    placeholder={'Email'}
                    name="email"
                    label="Email*"
                    required
                  />
                  <InputTextField
                    placeholder={'Password'}
                    type="password"
                    name="password"
                    label="Password*"
                    required
                  />
                </div>
                <Button variant="contained" text="Sign In" />
              </div>

              <h3>Or</h3>
              <div className="providers-buttons">
                <Button
                  variant="outlined"
                  text="Sign in with Google"
                  icon={<GoogleLogoColors />}
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
                  variant="outlined"
                  text="Sign in with Github"
                  icon={<GitHub />}
                  onClick={() =>
                    signInwithGithub()
                      .then((user) => {
                        console.log(user);
                        setLoggedIn(true);
                      })
                      .catch((error) => console.log(error))
                  }
                />
              </div>
              <div className="not-registered">
                <span>Not registered yet?</span>
                <Link to="/sign-up" className="join-now">
                  Join Now!
                </Link>
              </div>
            </div>
          </form>

          {/* <div>
            <h4>{user?.email}</h4>
            {loggedIn ? (
              <Button variant="contained" text="Log Out" onClick={logout} />
            ) : (
              ''
            )}
          </div> */}
        </div>
      </FormProvider>
    </AppLayout>
  );
};

export { Login };
