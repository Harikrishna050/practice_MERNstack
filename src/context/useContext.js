import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"; 
import { auth } from "../firebase";
const UserAuthContext=createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState({});
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function LogIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function SignOut() {
        return signOut(auth);
    }
    function googleSignIn() {
        const GoogleauthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleauthProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            // console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <UserAuthContext.Provider
            value={{ user, signUp,LogIn,SignOut,googleSignIn}}
        >
            {children}
        </UserAuthContext.Provider> 
    );

}

export function useUserAuth() {
    return useContext(UserAuthContext);
}