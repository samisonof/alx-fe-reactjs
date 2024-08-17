import React from 'react';
import UserContext from './UserContext';  // Import UserContext
import ProfilePage from './ProfilePage';  // Import ProfilePage

function App() {
  // Define userData that will be passed to the context
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  // Wrap ProfilePage inside UserContext.Provider and pass userData as value
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
