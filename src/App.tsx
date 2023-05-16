import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar';

function App() {
  useEffect(() => {
    fetch(`http://localhost:8080/`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
      console.log(err.message);
     });
   }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
