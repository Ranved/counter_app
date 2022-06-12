import React, {useContext} from 'react';
import { ModeContext } from '../../context/ModeContext';

export default function Header({toggleMode}) {

  const {darkMode, setDarkMode}=useContext(ModeContext);

  return (
    <div className={darkMode ? 'header header-dark' : 'header'}>
      <h3>Counter App</h3>
      <button onClick={toggleMode} className={darkMode ? 'mode-btn mode-btn-dark' : 'mode-btn'}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
  );
}
