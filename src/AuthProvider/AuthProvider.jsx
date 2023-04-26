import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null)


     const register = (email, password)=>{
          return createUserWithEmailAndPassword(auth, email, password)

     }

     const login = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password)
     }

     const emailVerification = (user) =>{
          return sendEmailVerification(user)
     }
     const authInfo = {
          auth,
          user,
          register,
          login,
          emailVerification,

     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;