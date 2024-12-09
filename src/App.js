import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { useEffect, useState } from 'react';
import Technologies from './components/Technologies';
import Projects from './components/Projects'
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [distime, setdistime]= useState('')
  useEffect(()=>{
    const time=()=>{
      setInterval(displaytime, 60000)
    }
    time()
  })
  function displaytime(){
    const now= new Date()
    const stTime= now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    setdistime(stTime)
  }
  
  return (
    <>
      <div className='bg-container'>
        <Navbar />
        <Home/>
        <About/>
        <Technologies />
        <Projects />
        <Certificates />
        <Contact />
        <div className='footer-bar'>
          <p className='time-botm'>{distime}</p>
        </div>
      </div>
    </>
  );
}

export default App;
