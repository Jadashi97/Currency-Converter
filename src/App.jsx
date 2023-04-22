import { useEffect, useState } from 'react'
import './App.css';

var myHeaders = new Headers();
myHeaders.append("apikey", "Akpu7bDYd7LIenw3xG1fk6JA1pEkpuLk");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// const api_key = 'Akpu7bDYd7LIenw3xG1fk6JA1pEkpuLk';

// const base_url = `https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,GBP${api_key}`
const base_url = 'https://api.apilayer.com/fixer/convert?to=to&from=from&amount=amount'

console.log(base_url);

function App() {
    const [amount, setAmount] = useState(" ");
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState("EUR");
    const [exhangeRate, setExchageRate] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
      async function fetchExhangeRate(){
        try {
          const response = await fetch(`${base_url}&base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
          const data = await response.json();
          console.log(data)
          setExchageRate(data.rates[toCurrency]);
        } catch (error) {
          console.log("Not able to fetch currency data")
        }
      }

      fetchExhangeRate();
    }, [fromCurrency, toCurrency]);


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
            type="number" 
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

export default App