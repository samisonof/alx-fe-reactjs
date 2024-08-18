import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';
import Counter from './Counter';
import UserContext from './UserContext';



<UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

function App() {
  return (
      <div className="App">
          <WelcomeMessage />
      </div>
  );
}

function App() {
  return (
      <div className="App">
          <Header />
          <MainContent />
          <Footer />
      </div>
  );
}


function App() {
  const [count, setCount] = useState(0)


  function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
    return (
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    );
  }
  
  
  



  return (
    <>
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>



     
    </>
  )
}

export default App
