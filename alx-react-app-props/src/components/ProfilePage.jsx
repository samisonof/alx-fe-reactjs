import UserInfo from './UserInfo';

function ProfilePage() {
  return <UserInfo />;
}

function App() {
    const userData = {
        name: 'John Doe',
        location: 'New York, USA',
        age: 30
    };

    return (
        <UserContext.Provider value={userData}>
            <ProfilePage />
        </UserContext.Provider>
    );
}


export default ProfilePage;


