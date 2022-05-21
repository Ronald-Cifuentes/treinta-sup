import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  projectId: process.env.REACT_APP_PROJECT_ID,
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  appId: process.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
