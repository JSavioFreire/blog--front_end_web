import React, { useContext, useEffect } from 'react'
import Header from '../components/header/header'
import HomePage from '../pages/homePage/HomePage'
import { Global } from '../global/GlobalStyle'
import AboutMe from "../pages/aboutMe/AboutMe"
import { useFetch } from '../hooks/useFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from '../context/Provider'
const InitialProvider = () => {
    const { data, loading } = useFetch('http://localhost:3000/tec');
    const { setApiTec, setLoadingApiTec } = useContext(Context);

    useEffect(() => {
        setApiTec(data);
        setLoadingApiTec(loading);

    })

    return (
        <BrowserRouter>
            <Global />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default InitialProvider