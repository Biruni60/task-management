import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider() 
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const signUp=(email,password)=>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false)
        });
        return () => {
          unsubscribe();
        };
      },[]); 
    const info={signUp,signIn,googleSignIn,loading,user}
    return (
        <AuthContext.Provider value={info}>
         {
            children
         }
        </AuthContext.Provider>
    );
};

export default AuthProvider;