// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfcQdRzDSk7uzJNoahSBMFqGNI_PvUjyQ',
  authDomain: 'journal-app-7e84a.firebaseapp.com',
  projectId: 'journal-app-7e84a',
  storageBucket: 'journal-app-7e84a.appspot.com',
  messagingSenderId: '279165263509',
  appId: '1:279165263509:web:6cd2db14b505df9da3059c',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
