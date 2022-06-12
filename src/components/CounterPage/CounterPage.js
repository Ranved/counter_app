import React, { useContext } from 'react';
import CounterCard from './CounterCard/CounterCard';
import { ModeContext } from '../../context/ModeContext';

export default function CounterPage() {

  const { darkMode } = useContext(ModeContext);
  
    return (
      <div className={darkMode ? 'counter-page counter-page-dark' : 'counter-page'}>
        <CounterCard />
      </div>
  );
}


