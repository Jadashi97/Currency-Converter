import React,{useState, createContext} from 'react';

export const CurrencyContext = createContext();

const CurrencyProvider = () => {
    const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States");
    const [toCurrency, setToCurrency] = useState("🇸🇸 SSD - Australia");
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
