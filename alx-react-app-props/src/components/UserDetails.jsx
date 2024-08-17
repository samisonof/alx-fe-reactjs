function UserDetails({ userData }) {
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }

  import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Location: {userData.location}</p>
            <p>Age: {userData.age}</p>
        </div>
    );
}

export default UserDetails;
  