// HistoryContext.js
import React, { createContext, useState, useContext } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            {children}
        </HistoryContext.Provider>
    );
};

export const useHistory = () => useContext(HistoryContext);
