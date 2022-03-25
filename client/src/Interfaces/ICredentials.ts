export interface ICredentials {
  email: string;
  password: string;
}

export interface EmployerCreationPayload extends ICredentials { 
  companyName: string 
}

export interface JobSeekerCreationPayload extends ICredentials { 
  firstName: string 
  lastName: string 
}

