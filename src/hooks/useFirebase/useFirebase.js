import { getAuth, signInWithPopup, GoogleAuthProvider , signOut  , onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../useAuth";

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth=getAuth();
    const signInUsingGoogle=()=>{
        setIsLoading(true);
        const googleProvider= new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
        }).finally(()=>setIsLoading(false));
    }
    //observe user state change 
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=>unsubscribed;
    },[])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(result=>{})
        .finally(()=>setIsLoading(false));
    }
    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;