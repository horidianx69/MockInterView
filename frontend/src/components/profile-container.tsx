import React from 'react';
import { useAuth, UserButton } from "@clerk/clerk-react"
import { Loader } from 'lucide-react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';

const ProfileContainer = () => {
  const {isSignedIn,isLoaded}= useAuth();
  if(!isLoaded){
    return <div className="flex items-center">
      <Loader className='min-w-4 min-h-4 animate-spin text-emerald-600'/>
    </div>     
  }
  return (
    <div>
      {isSignedIn ? <UserButton /> : <NavLink to="/signin"><Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button></NavLink>}
    </div>
  );
}

export default ProfileContainer;
