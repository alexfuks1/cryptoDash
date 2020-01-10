import React from 'react';
import './App.css';
import Selected from './components/Selected';

function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-center mt-5">Buy Cryptocurrency</h1>
      <p className="text-center mt-2">You can now buy cryptocurrencies instantly with credit card, or with bank transfer.</p>
      <Selected/>
    </div>
  );
}

export default App;
