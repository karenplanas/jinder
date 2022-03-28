import React, { createContext, useContext, useEffect, useState } from 'react'
import { EmployerCreationPayload, ICredentials, JobSeekerCreationPayload } from '../Interfaces/ICredentials';
import { User } from '../Interfaces/User';
import * as ApiClient from '../services/user-api-client';

const STORAGE_KEY = 'user';

interface IUserContext {
  user?: User;
  createEmployer: (userPayload: EmployerCreationPayload) => void;
  createJobSeeker: (userPayload: JobSeekerCreationPayload) => void
  login: (credentials: ICredentials) => void;
  logout: () => void;
  loginWithGoogle: () => void;
  loginWithGithub: () => void;
}

const UserContext = createContext<IUserContext | undefined >(undefined);

const UserContextProvider: React.FC = ({ children }) => {
  const storedData = window.localStorage.getItem(STORAGE_KEY)
  const [user, setUser] = useState<User | undefined>(
    storedData ? JSON.parse(storedData) : undefined
  )

  useEffect(() => {
    user && window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const createEmployer = async (userPayload: EmployerCreationPayload) => {
    const user = await ApiClient.createEmployerAccount(userPayload);
    setUser(user);
  }

  const createJobSeeker = async (userPayload: JobSeekerCreationPayload) => {
    const user = await ApiClient.creatJobSeekerAccount(userPayload);
    setUser(user);
  }

  const login = async (credentials: ICredentials) => {
    const user = await ApiClient.loginUser(credentials)
    setUser(user);
  };

  const logout = () => {
    setUser(undefined);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  const loginWithGoogle = async () => {
    const response = await ApiClient.signInwithGoogle()
    setUser(response);
  };

  const loginWithGithub = async () => {
    const response = await ApiClient.signInwithGithub()
    setUser(response);
  };
  
  const value = {
    user, 
    createEmployer,
    createJobSeeker,
    login, 
    loginWithGoogle,
    loginWithGithub,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUserContext = () : IUserContext => {
  return useContext(UserContext) as IUserContext
}

export { UserContextProvider, useUserContext }