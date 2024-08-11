import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)


  function App() {
    return (
        <div className="App">
            <WelcomeMessage />
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



<div className='App'>
      <Header/>

    </div>

    <div className='App'>
      <MainContent/>

    </div>


    <div className='App'>
      <Footer/>

    </div>

     
    </>
  )
}

export default App
