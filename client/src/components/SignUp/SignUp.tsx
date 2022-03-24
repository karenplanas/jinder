import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import EmployeeForm from './EmployeeForm';
import EmployerForm from './EmployerForm';
import { AppLayout } from '../AppLayout/AppLayout';
import { LogoTitleVertical } from '../LogoTitleVertical/LogoTitleVertical';
// import { NavTabs } from '../NavTabs/NavTabs';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  // const tabs = [
  //   {name: 'User', endpoint:'/sign-up/user'},
  //   {name: 'Employer', endpoint:'/sign-up/employer'},
  // ]

  return (
    <AppLayout displayNavBarTop={false} displayNavBarBottom={false}>
      <div className="signup--container">
        <LogoTitleVertical />
        <div className='SignUp-text'>
          <h4>Looking for {toggled ? 'a developer' : 'a job'}? SIGN UP!</h4>
        </div>
        {/* <NavTabs tabs={tabs} /> */}
        <div className='SignUp-toggle'>
          <Toggle onChange={(event: any) => setToggled(event.target.checked)} />
        </div>
        {toggled ? <EmployerForm /> : <EmployeeForm /> }
      </div>
    </AppLayout>
  );
};

export { SignUp };
