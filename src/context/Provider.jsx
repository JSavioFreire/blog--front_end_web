import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [apiTec, setApiTec] = useState();
    const [loadingApiTec, setLoadingApiTec] = useState(true);

    const [apiInsp, setApiInsp] = useState();
    const [loadingApiInsp, setLoadingApiInsp] = useState(true);
    return (
        <Context.Provider value={{ apiTec, setApiTec, loadingApiTec, setLoadingApiTec, apiInsp, setApiInsp, loadingApiInsp, setLoadingApiInsp }}>
            {children}
        </Context.Provider>
    )
}