import React, {useContext} from 'react';
import { ModeContext } from '../../context/ModeContext';

export default function Footer() {

  const {darkMode, setDarkMode} = useContext(ModeContext);

  return (
    <div className={darkMode ? 'footer footer-dark' : 'footer'}>
      <p>Counter App 2022</p>
    </div>
  );
}
