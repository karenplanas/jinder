import React from 'react'
import { AppLayout } from '../AppLayout/AppLayout'
import { NavTabs } from '../NavTabs/NavTabs'

const CreateJobSeekerProfileLayout: React.FC = ({ children }) => {
  const tabs = [
    {name: 'Experience', endpoint:'/job-seeker-profile/edit/experience'},
    {name: 'Skills', endpoint:'/job-seeker-profile/edit/skills'},
    {name: 'Looking For', endpoint:'/job-seeker-profile/edit/looking-for'},
  ]

  return (
    <AppLayout displayNavBarBottom={true} title="My Profile">
      <div className='CreateJobSeekerProfileLayout'>
        <NavTabs tabs={tabs}/>
        {children}
      </div>
    </AppLayout>
  )
}

export { CreateJobSeekerProfileLayout }