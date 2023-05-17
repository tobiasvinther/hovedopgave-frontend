import { Button } from '@mui/material';
import Navbar from './components/navbar/navbar';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import { Grid } from "@mui/material";
import SearchBtn from './components/SearchBtn';

function App(): JSX.Element {

  useEffect(() => {
    fetch(`http://localhost:8080/`)
     .then((response: Response) => response.json())
     .then((actualData: any) => console.log(actualData))
     .catch((err: Error) => {
      console.log(err.message);
     });
   }, [])

   
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Button>Test</Button>
        <React.Fragment>
      <Grid 
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: "50vh" }}
        >
          <SearchBar />
          <SearchBtn />
      </Grid>
    </React.Fragment>
      </header>
    </div>
  );
}

export default App;
