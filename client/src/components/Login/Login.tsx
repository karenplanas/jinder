import { useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { InputTextField } from '../InputTextField/InputTextField';
import { Button } from '../Button/Button';
import { AppLayout } from '../AppLayout/AppLayout';
import { GoogleLogoColors } from '../icons/GoogleLogoColors';
import { GitHub } from '../icons/GitHub';
import { User } from '../../Interfaces/User';
import { LogoTitleVertical } from '../LogoTitleVertical/LogoTitleVertical';
import { useUserContext } from '../../contexts/UserContext';
import * as ApiClient from '../../services/api-client';
import './Login.css';

const Login: React.FC = () => {
  const methods = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { user, login } = useUserContext(); 
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  useEffect(()=> {
    user && navigate('/home')
  }, [user, navigate])

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const onSubmit = handleSubmit(async (data) => {
    login(data)
  });

  return (
    <AppLayout displayNavBarTop={false} displayNavBarBottom={false}>
      <FormProvider {...methods}>
        <div className="login--container">
          <LogoTitleVertical />

          <form onSubmit={onSubmit}>
            <div className="inputs-buttons">
              <div className="login-inputs-signin">
                <div className="login-inputs">
                  <InputTextField
                    placeholder={'Email'}
                    name="email"
                    label="Email"
                    required
                  />
                  <InputTextField
                    placeholder={'Password'}
                    type="password"
                    name="password"
                    label="Password"
                    required
                  />
                </div>
                <Button text="Sign In" />
              </div>

              <h3>Or</h3>
              <div className="providers-buttons">
                <Button
                  variant="outlined"
                  text="Sign in with Google"
                  icon={<GoogleLogoColors />}
                  onClick={() =>
                    ApiClient.signInwithGoogle()
                      // .then((user: User) => {
                      //   console.log(user);
                      //   setLoggedIn(true);
                      // })
                      // .catch((error: any) => console.log(error))
                  }
                />
                <Button
                  variant="outlined"
                  text="Sign in with Github"
                  icon={<GitHub />}
                  onClick={() =>
                    ApiClient.signInwithGithub()
                      // .then((user: User) => {
                      //   console.log(user);
                      //   setLoggedIn(true);
                      // })
                      // .catch((error) => console.log(error))
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
