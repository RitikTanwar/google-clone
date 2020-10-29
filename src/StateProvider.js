import React, { createContext, useContext, useReducer } from 'react'


// Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialstate, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialstate)}>
        {children}
    </StateContext.Provider>
);

// Hook which allows us to pull infomation from data layer
export const useStateValue = () => useContext(StateContext);

