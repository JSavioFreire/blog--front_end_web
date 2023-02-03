import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [apiTec, setApiTec] = useState();

    return (
        <Context.Provider value={{ apiTec, setApiTec }}>
            {children}
        </Context.Provider>
    )
}