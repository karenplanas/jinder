import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { doc, setDoc as _setDoc, getDoc as _getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);

//https://cloud.google.com/firestore/docs/query-data/get-data
export const getDoc = (collection: string, id: string) => _getDoc(doc(db, collection, id)).then((d) => d.data())

export const setDoc = async (collection: string , id: string, payload: unknown, returnValue = true) => {
  await _setDoc(doc(db, collection, id), payload)

  if(returnValue) {
    return getDoc(collection, id)
  }

  return
}