import { Button } from '@mui/material';
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
  );
}

export default App;
