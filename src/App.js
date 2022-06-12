import React, {useState} from 'react';
import './App.css';
import CounterPage from './components/CounterPage/CounterPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {ModeContext} from './context/ModeContext';

function App() {
  
  const [darkMode, setDarkMode]=useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <div className="App">
     <ModeContext.Provider value={{darkMode, setDarkMode}}> 
        <Header toggleMode={toggleMode}/>
        <CounterPage />
        <Footer />
      </ModeContext.Provider> 
    </div>
  );
}

export default App;
