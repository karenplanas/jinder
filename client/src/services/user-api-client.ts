import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, getDoc, setDoc } from '../services/firebase';
import { ICredentials } from "../Interfaces/ICredentials";
import { User } from "../Interfaces/User";
import { performRequest } from './helpers';

type UserCredential = any;


const postUser = (user: unknown /*Partial<User>*/) => {
  return performRequest<User>({
    method: 'POST',
    path: '/users',
    body: user,
  })
}

const getUser = (id: string) => {
  return performRequest<User>({
    method: 'GET',
    path: `/users/${id}`,
  })
}

const loginUser = async (credentials: ICredentials): Promise<User> => {
  const response = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)

  return getUser(response.user.uid)
}

const signInwithGoogle = async (): Promise<User> => {
  const googleProvider = new GoogleAuthProvider();
  const response = await signInWithPopup(auth, googleProvider);

  return getUser(response.user.uid)
};

const signInwithGithub = (): Promise<any> => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth, githubProvider);
};

const createEmployerAccount = async (user: User): Promise<User> => {
  const response = await createUserWithEmailAndPassword(auth, user.email, user.password)

  return postUser({
    type: 'employer',
    externalId: response.user.uid,
    email: response.user.email as string,
    accessToken: (response.user as any).accessToken,
  })
}

const creatJobSeekerAccount = async (user: User): Promise<User> => {
  const response = await createUserWithEmailAndPassword(auth, user.email, user.password )

  return postUser({
    type: 'job-seeker',
    externalId: response.user.uid,
    email: response.user.email as string,
    firstName: user.firstName,
    lastName: user.lastName,
    accessToken: (response.user as any).accessToken,
  })
}


export { 
  loginUser,
  signInwithGoogle,
  signInwithGithub,
  createEmployerAccount, 
  creatJobSeekerAccount
 };

