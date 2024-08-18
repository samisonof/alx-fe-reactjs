import React from 'react';
import UserDetails from './UserDetails';

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserDetails />  {/* UserDetails will consume the UserContext */}
    </div>
  );
}

export default ProfilePage;
