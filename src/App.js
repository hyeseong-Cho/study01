import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
      <div className="text-3xl bg-red-300 italic">React Study</div>
  );
}

export default App;
