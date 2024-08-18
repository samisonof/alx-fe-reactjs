import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './WelcomeMessage'; // Adjust the path if necessary
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;
