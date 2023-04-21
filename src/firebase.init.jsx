// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDF0_qn4SMKx-gBNaS-BX7uvMAzBBsflSk",
  authDomain: "quick-start-7efb6.firebaseapp.com",
  projectId: "quick-start-7efb6",
  storageBucket: "quick-start-7efb6.appspot.com",
  messagingSenderId: "502689170391",
  appId: "1:502689170391:web:287bf123a79d60645d0192"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;