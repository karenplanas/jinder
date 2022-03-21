
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { JobOffer } from '../../Interfaces/JobOffer';
import { postJobOffer } from '../../services/api-client';
import './CreateJobOffer.css';
import { ProfileTabsNav } from '../ProfileTabsNav/ProfileTabsNav';


const CreateJobOffer: React.FC = () => {
  const methods = useForm<JobOffer>({
    defaultValues: {
      companyname: "",
      companysize: "",
      position: "",
      bio: "",
      role: "",
      level: "",
      description: "",
      languages: [],
      education: "",
      experience: "",
      location: "",
      contract: "",
      salary: "",
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit(async (data) => {
    // JSON.stringify(data.languages);
    await postJobOffer(data);
  });

  return (
    <div className="createjoboffer">
      <div className="joboffercontent">
        <ProfileTabsNav />
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <h3>Company name</h3>
            <input type="text" {...register('companyname')} />
            <h3>Company size</h3>
            <input type="text" {...register('companysize')} />
            <h3>Position</h3>
            <input type="text" {...register('position')} />
            <h3>Bio</h3>
            <input type="text" {...register('bio')} />
            <h3>Role</h3>
            <input type="text" {...register('role')} />
            <h3>Level</h3>
            <input type="text" {...register('level')} />
            <h3>Description</h3>
            <input type="text" {...register('description')} />
            <h3>Languages</h3>
            <label>
              <input
                type="checkbox"
                value="Javascript"
                {...register('languages')}
              />{' '}
              Javascript
            </label>
            <label>
              <input type="checkbox" value="HTML" {...register('languages')} />{' '}
              HTML
            </label>
            <label>
              <input type="checkbox" value="CSS" {...register('languages')} />{' '}
              CSS
            </label>
            <label>
              <input type="checkbox" value="C#" {...register('languages')} /> C#
            </label>
            <label>
              <input type="checkbox" value="Java" {...register('languages')} />{' '}
              Java
            </label>
            <label>
              <input
                type="checkbox"
                value="Python"
                {...register('languages')}
              />{' '}
              Python
            </label>
            <label>
              <input type="checkbox" value="React" {...register('languages')} />{' '}
              React
            </label>
            <label>
              <input
                type="checkbox"
                value="Angular"
                {...register('languages')}
              />{' '}
              Angular
            </label>

            <h3>Education</h3>
            <input type="text" {...register('education')} />
            <h3>Experience</h3>
            <input type="text" {...register('experience')} />
            <h3>Location</h3>
            <input type="text" {...register('location')} />
            <h3>Contract</h3>
            <input type="text" {...register('contract')} />
            <h3>Salary</h3>
            <input type="text" {...register('salary')} />
            <input type="submit" />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateJobOffer;
