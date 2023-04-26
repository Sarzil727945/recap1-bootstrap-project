// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmGmWOGelbFtASfNfAhUsplLaUUTSDmKo",
  authDomain: "recap1-bootstrap-project.firebaseapp.com",
  projectId: "recap1-bootstrap-project",
  storageBucket: "recap1-bootstrap-project.appspot.com",
  messagingSenderId: "803620957553",
  appId: "1:803620957553:web:817042d66bfc2983845ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;