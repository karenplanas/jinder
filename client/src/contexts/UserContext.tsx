import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from 'firebase/auth';
import { ICredentials } from '../Interfaces/ICredentials';
import * as ApiClient from '../services/api-client';

const STORAGE_KEY = 'user';

interface IUserContext {
  user?: User;
  login: (credentials: ICredentials) => void;
  logout: () => void;
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

  const login = async (credentials: ICredentials) => {
    const response = await ApiClient.loginUser(credentials)
    console.log('response', response)
    setUser(response.user);
    // return response;
  };

  const logout = () => {
    setUser(undefined);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  const value = {
    user, 
    login, 
    logout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUserContext = () : IUserContext => {
  return useContext(UserContext) as IUserContext
}

export { UserContextProvider, useUserContext }