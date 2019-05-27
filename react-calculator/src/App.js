import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import {CalculatorCode} from './components/CalculatorCode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
         <CalculatorCode />
      </header>
    </div>
  );
}

export default App;
