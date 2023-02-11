import { createContext, useContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const User=createContext(null);

export function UserContextProvider({children}){

    const [username, setUsername] = useState("LOGIN");
    const [loginState,setLoginState]=useState(false)
    const [showLogout,setShowLogout]=useState(false)
    const [showApplicant, setShowApplicant] = useState(false)

    // function SignUp(email,passoword){
    //     return createUserWithEmailAndPassword(auth,email,passoword)
    // }
    // function LogIn(email,passoword){
    //     return signInWithEmailAndPassword(auth,email,passoword)
    // }
    // useEffect(()=>{
    //    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
    //         setUsername(currentUser)
    //     })
    //     return ()=>{
    //         unsubscribe();
    //     }
    // },[])

    return ( <User.Provider value={{username,setUsername,loginState,setLoginState,showLogout,setShowLogout,showApplicant, setShowApplicant}}> {children} </User.Provider>);
    
}

export function UseUserContext(){
    const {username,setUsername,loginState,setLoginState,showLogout,setShowLogout,showApplicant, setShowApplicant}=useContext(User);
    return {username,setUsername,loginState,setLoginState,showLogout,setShowLogout,showApplicant, setShowApplicant}
}
