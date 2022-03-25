import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import { JobSeekerForm } from './JobSeekerForm';
import { EmployerForm } from './EmployerForm';
import { AppLayout } from '../AppLayout/AppLayout';
import { LogoTitleVertical } from '../LogoTitleVertical/LogoTitleVertical';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <AppLayout displayNavBarTop={false} displayNavBarBottom={false}>
      <div className="signup--container">
        <LogoTitleVertical />
        <div className='SignUp-text'>
          <h4>Looking for {toggled ? 'a developer' : 'a job'}? SIGN UP!</h4>
        </div>
        <div className='SignUp-toggle'>
          <Toggle onChange={(event: any) => setToggled(event.target.checked)} />
        </div>
        {toggled ? <EmployerForm /> : <JobSeekerForm /> }
      </div>
    </AppLayout>
  );
};

export { SignUp };
