import { useEffect, useState, useContext } from "react";
import "./App.css";
import InputAmount from "./components/InputAmount";
import SwitchCurrency from "./components/SwitchCurrency.jsx";
import SelectRegion from "./components/SelectRegion";
// import Home from "./components/Home";
import { Container, Typography, Grid, Box, Link } from "@mui/material";
import { CurrencyContext } from "./context/CurrencyContext";
import axios from "axios";

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFristAmount,
  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  console.log(resultCurrency);

  useEffect(() => {
    if (firstAmount) {
      const appId = "63438de6bc7c4d97ab9dc5e54cd42a4a";

      axios
        .get(`https://openexchangerates.org/api/latest.json?app_id=${appId}`)
        .then((response) => {
          const data = response.data;
          // Process the response data
          const rates = data.rates;
          const baseCurrency = data.base;

          // Use the rates and baseCurrency in your app
          console.log(`Base Currency: ${baseCurrency}`);
          console.log(`Exchange Rates:`);
          for (const currency in rates) {
            console.log(`${currency}: ${rates[currency]}`);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    //   axios
    //     .get(`https://openexchangerates.org/api/latest.json?app_id=${appId}`)
    //     //  {
    //     //   params: {
    //     //     apikey: import.meta.env.VITE_API_KEY,
    //     //     base_currency: codeFromCurrency,
    //     //     currencies: codeToCurrency,
    //     //   },
    //     // })
    //     .then((response) => {
    //       const data = response.data;
    //       const rates = data.rates;

    //       const base_currency = data.base;
    //       codeFromCurrency === base_currency;
    //       codeToCurrency === rates;

    //       setResultCurrency(response.data.data[codeToCurrency]);
    //     })
    //     .catch((error) => console.log(error));
    // }
  }, [firstAmount, fromCurrency, toCurrency]);

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10%",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgb(0, 0, 0, 0.1)",
    position: "relative",
  };

  return (
    <div>
      {/* <Home/> */}

      <Container maxWidth="md" sx={boxStyles}>
        <Typography
          variant="h4"
          sx={{ marginBottom: "2rem", fontWeight: "bold" }}
        >
          Rasulu Coming Soon!!!!
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
          We dont need Dahabshill/Western Union/Remitly
        </Typography>
        <Grid container spacing={2}>
          <InputAmount />
          <SelectRegion
            value={fromCurrency}
            setValue={setFromCurrency}
            label="From"
          />
          <SwitchCurrency />
          <SelectRegion
            value={toCurrency}
            setValue={setToCurrency}
            label="To"
          />
        </Grid>

        {firstAmount ? (
          <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
            <Typography>
              {firstAmount} {fromCurrency} =
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "5px", fontWeight: "bold" }}
            >
              {resultCurrency * firstAmount} {toCurrency}
            </Typography>
          </Box>
        ) : (
          " "
        )}
        <Typography
          fontSize="10px"
          sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        >
          <Link>Lets Get in Touch!</Link>
        </Typography>
      </Container>
    </div>
  );
}

export default App;
