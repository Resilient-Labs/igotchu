import React from 'react';
// import UserDetails from './UserDetails'
import ItemView from './components/ItemView'
import { ProfileHeader } from './components/ProfileHeader'

import './css/ProfileHeader.css';


function ProfilePage() {
    return(
    
        <div>
            {/* <UserDetails/> */}
            <ProfileHeader />
            <ItemView />
        </div>
    );
}



export default ProfilePage