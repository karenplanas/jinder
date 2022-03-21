import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { JobOffer } from '../../Interfaces/JobOffer';

const CreateJobOffer: React.FC = () => {
  const methods = useForm<JobOffer>({
    defaultValues: {
      companyname: '',
      position: '',
      role: '',
      description: '',
      languages: [''],
      education: '',
      experience: '',
      location: '',
      hours: '',
      salary: '',
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <div className="createjoboffer">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('companyname')} />
          <input type="text" {...register('position')} />
          <input type="text" {...register('languages')} />
          <input type="text" {...register('education')} />
          <input type="text" {...register('experience')} />
          <input type="text" {...register('location')} />
          <input type="text" {...register('hours')} />
          <input type="text" {...register('salary')} />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateJobOffer;
