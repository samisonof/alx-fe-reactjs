import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from'./ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    return (
        <div>
            <h2>Profile</h2>
            <nav>
                <link to ="details">Profile Details</link>
                <link to ="settings">Profile Settings</link>
            </nav>
            <Routes>
                <Route path="details" element={<ProfileDetails />}/>
                <Route path="settings" element={<ProfileSettings />}/>
            </Routes>
        </div>
    );
};

export default Profile;