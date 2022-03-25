import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { InputTextField } from '../InputTextField/InputTextField';
import { Button } from '../Button/Button';
import { AppLayout } from '../AppLayout/AppLayout';
import { GoogleLogoColors } from '../icons/GoogleLogoColors';
import { GitHub } from '../icons/GitHub';
import { User } from '../../Interfaces/User';
import { LogoTitleVertical } from '../LogoTitleVertical/LogoTitleVertical';
import { useUserContext } from '../../contexts/UserContext';
import './Login.css';

const Login: React.FC = () => {
  const methods = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { user, login, loginWithGoogle, loginWithGithub } = useUserContext(); 
  const { handleSubmit } = methods;
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(()=> {
    user && navigate((state as any)?.from || '/home')
  }, [user, navigate, state])

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
                  onClick={loginWithGoogle}
                />
                <Button
                  variant="outlined"
                  text="Sign in with Github"
                  icon={<GitHub />}
                  onClick={loginWithGithub}
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
        </div>
      </FormProvider>
    </AppLayout>
  );
};

export { Login };
