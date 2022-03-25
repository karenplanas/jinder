import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { ICredentials } from "../Interfaces/ICredentials";
import { User } from "../Interfaces/User";
import { performRequest } from './helpers';


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

const createEmployerAccount = async (payload: ICredentials & { companyName: string }): Promise<User> => {
  const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password)

  return postUser({
    type: 'employer',
    companyName: payload.companyName,
    externalId: response.user.uid,
    email: response.user.email as string,
    accessToken: (response.user as any).accessToken,
  })
}

const creatJobSeekerAccount = async (payload: ICredentials & { firstName: string, lastName: string }): Promise<User> => {
  const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password )

  return postUser({
    type: 'job-seeker',
    externalId: response.user.uid,
    email: response.user.email as string,
    firstName: payload.firstName,
    lastName: payload.lastName,
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

