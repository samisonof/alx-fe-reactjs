import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';


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
  
  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
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
