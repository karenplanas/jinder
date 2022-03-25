import React, { createContext, useContext, useEffect, useState } from 'react'
import { ICredentials } from '../Interfaces/ICredentials';
import { Employer } from '../Interfaces/Employer';
import { User } from '../Interfaces/User';
import * as ApiClient from '../services/user-api-client';

const STORAGE_KEY = 'user';

interface IUserContext {
  user?: User;
  createEmployer: (user: User) => void;
  createUser: (user: User) => void
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

  const createEmployer = async (userPayload: User) => {
    const user = await ApiClient.createEmployerAccount(userPayload);
    setUser(user);
  }

  const createUser = async (userPayload: User) => {
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
    const response = await ApiClient.signInwithGithub()
    setUser(response.user);
  };

  const loginWithGithub = async () => {
    const response = await ApiClient.signInwithGithub()
    setUser(response.user);
  };
  
  const value = {
    user, 
    createEmployer,
    createUser,
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