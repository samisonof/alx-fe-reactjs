import React, { useContext } from 'react';
import UserContext from './UserContext';  // Import UserContext

function UserDetails() {
  // Consume the context to access userData
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}
console.log(userData);

export default UserDetails;
