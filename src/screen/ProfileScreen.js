import React from 'react'
import Navbar from '../component/Navbar';
import { logOut, useAuth } from '../firebase';
import PlanScreen from './PlanScreen';
import './ProfileScreen.css'

function ProfileScreen() {
    let user = useAuth();
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch {
            alert('error!')
        }
    }
    return (
        <div className='profile'>
            <Navbar />
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="your avatar" />
                    <div className="profile-details">
                        <h2>{user?.email}</h2>
                        <div className="profile-plan">
                            <h3>Plans</h3>
                            <PlanScreen/>
                            <button onClick={handleSignOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen