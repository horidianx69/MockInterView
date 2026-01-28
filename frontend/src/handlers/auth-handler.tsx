import LoaderPage from "@/routes/loader-page";
import { useAuth, useUser } from "@clerk/clerk-react";
import { getDoc,doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { db } from "../config/firebase.config";
import type { User } from "@/types";

const AuthHandler = () => {
  const {isSignedIn} = useAuth(); 
  const{user}=useUser();
  const pathname=useLocation().pathname;
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);
  
  useEffect(()=>{
    const storeUserData= async()=>{
        if(isSignedIn && user){
            setLoading(true);
            try{
                const userSnap= await getDoc(doc(db,"users",user.id));
                if(!userSnap.exists()){
                    const userData: User={
                        id:user.id,
                        name:user.fullName ||user.firstName || "Anonymous",
                        email:user.primaryEmailAddress?.emailAddress || "No Email",
                        image: user.imageUrl || "",
                        createdAt: serverTimestamp(),
                        updatedAt: serverTimestamp(),
                    }
                    await setDoc(doc(db,"users",user.id),userData);
                }
            }catch(err){
                console.error("Error storing user data:",err);
            }finally{
                setLoading(false);
            }
        }
    };
    storeUserData();
  },[isSignedIn,user,pathname,navigate]);

  if(loading){
    return <LoaderPage/>
  }
}

export default AuthHandler;