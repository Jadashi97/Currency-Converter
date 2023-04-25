import { useEffect, useState } from 'react'
import './App.css';
import InputAmount from './components/inputAmount';
import SelectCountry from './components/selectCountry';
import SwitchCurrency from './components/switchCurrency';
import { Container, Typography, Grid, } from "@mui/material";
import {CurrencyContext} from './context/CurrencyContext';



function App(){


    const boxStyles={
      background: "#fdfdfd",
      marginTop: "10%",
      textAlign: "center",
      color: "#222",
      minHeight: "20rem",
      borderRadius: 2,
      padding: "4rem 2rem",
      boxShadow: "0px 10px 15px -3px rgb(0, 0, 0, 0.1)",
      position: "relative"
    }


    return (
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant='h5' sx={{marginBottom: "2rem"}}>Wake Up and Track the Currencies!!</Typography>
        <Grid container spacing={2}>
          <InputAmount/>
          <SelectCountry/>
          <SwitchCurrency/>
          <SelectCountry/>
        </Grid>
      </Container>
    );
};

export default App;