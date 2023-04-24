import { useEffect, useState } from 'react'
import './App.css';

// const api_key = 'Akpu7bDYd7LIenw3xG1fk6JA1pEkpuLk';

// const base_url = `https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,GBP${api_key}`
const BASE_URL = 'https://api.exchangeratesapi.io/v1';

const params = (paramsObj) => {
  return new URLSearchParams({
    access_key: 'IVQpm3CkfAWredpe4U37lfsEZoI7XFC1',
    ...paramsObj
  })
}

const getLatest = (options) => {
  fetch(`${BASE_URL}/latest?${params(options)}`)
  .then(res => res.json())
  .then(console.log);
}

getLatest();

function App() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState("EUR");
    const [exhangeRate, setExchageRate] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(0);



    // useEffect(() => {
    //       // const response = await fetch(`${base_url}&base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
    //       fetch(BASE_URL)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //       // setExchageRate(data.rates[toCurrency]);
    //       // console.log(data)
    // },[]);


    useEffect(()=> {
      setConvertedAmount( amount / exhangeRate);
    }, [amount, exhangeRate]);


    const handleAmountChange = (e) => {
      setAmount(parseFloat(e.target.value));
    }


    const handleFromCurrencyConverter = (e)=> {
      setFromCurrency(e.target.value);
    }

    const handleToCurrencyConverter = (e) => {
      setToCurrency(e.target.value);
    }

    return (
      <div className="App">
        {/* change this to my own logo for the currency converter  */}
        <h1 className="text-5xl font-bold px-4 py-4">Currency Converter</h1>
        <div>
        <label>
          Amount:
          <input 
            value={amount}
            onChange={handleAmountChange}
            type="text" 
            name="currency" 
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset" 
          />
        </label>
        <label>
          From:
          <select value={fromCurrency} onChange={handleFromCurrencyConverter} className='py-5 px-4'>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* add more currencies here */}
          </select>
        </label>
        <label>
          To:
          <select value={toCurrency} onChange={handleToCurrencyConverter} className='px-4'>
            <option value="SSP">SSP</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="UGX">UGX</option>
            {/* add more currencies here */}
          </select>
        </label>
        <div>
          Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
        </div>
      </div>

      </div>
    )
}

export default App;