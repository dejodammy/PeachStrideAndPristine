import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDULDpB7HXUB4dd5DrZxQiVNvmzNOnv620",
  authDomain: "peachstrideandpristine.firebaseapp.com",
  projectId: "peachstrideandpristine",
  storageBucket: "peachstrideandpristine.appspot.com",
  messagingSenderId: "561394207382",
  appId: "1:561394207382:web:59423f578ef9ff032990b7"
};

const app = initializeApp(firebaseConfig);

const FIRESTORE_DB = getFirestore(app);

 export{FIRESTORE_DB } 


