// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_htRs0QTRwQSRptQPgTLFdVBx9_3HGSQ",
  authDomain: "farmrag-60e2c.firebaseapp.com",
  projectId: "farmrag-60e2c",
  storageBucket: "farmrag-60e2c.appspot.com",
  messagingSenderId: "519312724828",
  appId: "1:519312724828:web:4fbce69d15427ef73e2799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth, app}

