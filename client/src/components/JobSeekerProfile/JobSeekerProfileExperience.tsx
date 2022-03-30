import React, { useEffect } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'
import { JobSeekerProfileLayout } from './JobSeekerProfileLayout'
import { JobSeekerProfileButtons } from './JobSeekerProfileButtons'
import { Experience } from '../../Interfaces/JobSeekerProfile'
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client'
import './JobSeekerProfile.css'

const JobSeekerProfileExperience: React.FC = () => {
  const apiClient = useAuthenticatedApiClient()
  const methods = useForm<{ experiences: Experience[] }>({
    defaultValues: { experiences: [{}] }
  });

  const fetchJobseekerProfile = async () => {
    const jobSeekerProfile = await apiClient.getJobSeekerProfile();
    methods.reset(jobSeekerProfile)
  }

  useEffect(() => {
    fetchJobseekerProfile()
  }, [])

  const { handleSubmit, control } = methods;
  const { fields, append } = useFieldArray({ control, name: 'experiences'})

  const onSubmit = handleSubmit(apiClient.updateJobSeekerProfile);

  return (
    <JobSeekerProfileLayout>
      <FormProvider {...methods} >
        <form onSubmit={onSubmit}>
          <div className='CreateJobSeekerProfile-Experience profile-sections'>
            <div className='title-and-plus'>
              <h3>Experience</h3>
              <div className='clickable' onClick={() => append({})} >
                <PlusInCircle />
              </div>
            </div>
            <div className='field-list'>
              { fields.map((field, index) => (
                <div className='field-list-item' key={field.id}>
                  <InputTextField placeholder='Title' name={`experiences[${index}].title`} label='Title'/>
                  <InputTextField placeholder='Company Name' name={`experiences[${index}].companyName`} label='Company Name'/>
                  <InputTextField placeholder='Location' name={`experiences[${index}].location`} label='Location'/>
                  <div className='dates'>
                    <InputTextField placeholder='YYYY-MM' name={`experiences[${index}].startDate`} label='Start Date' />
                    <InputTextField placeholder='YYYY-MM' name={`experiences[${index}].endDate`} label='End Date' />
                  </div>
                  <InputTextField placeholder='Description' name={`experiences[${index}].description`} label='Description' />
                </div>
              ))}            
            </div>

            
            <JobSeekerProfileButtons />
          </div>
        </form>
      </FormProvider>  
    </JobSeekerProfileLayout>
  )
}

export { JobSeekerProfileExperience }