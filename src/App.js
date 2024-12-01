import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';

function App() {
  const now= new Date()
  const stTime= now.toLocaleTimeString()
  return (
    <>
      <div className='bg-container'>
        <Navbar />
        <Home id='home'/>
        <div className='footer-bar'>
          <p className='time-botm'>{stTime}</p>
        </div>
      </div>
    </>
  );
}

export default App;
