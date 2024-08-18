import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Ensure this path is correct

const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  }
  
  const userData = useContext(UserContext); // Consume the UserContext here

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );

  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
  <h2 style={{ color: 'blue' }}>{props.name}</h2>
  <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
  <p>Bio: {props.bio}</p>
</div>

export default UserProfile; 