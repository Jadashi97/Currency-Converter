import {useState, createContext} from 'react';

export const CurrencyContext = createContext();

const CurrencyProvider = ({children}) => {
    const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States");
    const [toCurrency, setToCurrency] = useState(" EUR - Euro");
    const [firstAmount, setFirstAmount] = useState(" ");

    const value = {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyProvider;
