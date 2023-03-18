import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  FIREBASE_APP,
  FIREBASE_DOMAIN,
  FIREBASE_API_KEY,
  FIREBASE_PROJECT,
  FIREBASE_STORAGE,
  FIREBASE_MESSAGING,
} from "@env";
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_DOMAIN,
  projectId: FIREBASE_PROJECT,
  storageBucket: FIREBASE_STORAGE,
  messagingSenderId: FIREBASE_MESSAGING,
  appId: FIREBASE_APP,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
