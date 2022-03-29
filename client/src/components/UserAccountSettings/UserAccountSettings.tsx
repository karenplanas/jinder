
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useUserContext } from '../../contexts/UserContext'
import { User } from '../../Interfaces/User'
import { AppLayout } from '../AppLayout/AppLayout'
import { Button } from '../Button/Button'
import { Camera } from '../icons/Camera'
import { InputTextField } from '../InputTextField/InputTextField'
import './UserAccountSettings.css'

const UserAccountSettings: React. FC = () => {
  const { user } = useUserContext()
  const methods = useForm<User>({ defaultValues: user});
  
  const { handleSubmit } = methods; 
  const onSubmit = handleSubmit(async (data) => {
    await console.log(data); //TODO implemt this on backend
  })

  const resetPassword = () => {

  }

  return(
    <AppLayout title='Account Settings'>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div className='UserAccountSettings-container'>
              <InputTextField name='firstName' label='First Name' placeholder='First Name' />
              <InputTextField name='lastName' label='Last Name' placeholder='Last Name' />
              <Button icon={<Camera />} text='Upload' variant='outlined'/>
              <InputTextField name='email' label='Email' placeholder='Email' />
              <div className='UserAccountSettings-password-reset'>
                <InputTextField name='password' label='Password' placeholder='**********' />
                <div>
                  <Button text='Reset' variant='outlined' onClick={resetPassword} />
                </div>
              </div>
              <div className='UserAccountSettings-buttons'>
                <Button text='Cancel' variant='contained' />
                <Button text='Save' variant='outlined' />
              </div>
            </div>
          </form>
        </FormProvider>
    </AppLayout>
  )
}

export { UserAccountSettings }