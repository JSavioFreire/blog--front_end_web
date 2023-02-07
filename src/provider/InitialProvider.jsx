import React, { useContext, useEffect } from 'react'
import Header from '../components/header/header'
import HomePage from '../pages/homePage/HomePage'
import { Global } from '../global/GlobalStyle'
import AboutMe from "../pages/aboutMe/AboutMe"
import { useFetch } from '../hooks/useFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from '../context/Provider'
import Footer from '../components/footer/Footer'
const InitialProvider = () => {
    const { data: dataTec, loading: loadingTec } = useFetch('http://localhost:3000/tec');
    const { data: dataInsp, loading: loadingInsp } = useFetch('http://localhost:3000/inspiration');

    const { setApiTec, setLoadingApiTec, setApiInsp, setLoadingApiInsp } = useContext(Context);

    useEffect(() => {
        setApiTec(dataTec);
        setLoadingApiTec(loadingTec);
        setApiInsp(dataInsp);
        setLoadingApiInsp(loadingInsp);
    })

    return (
        <BrowserRouter>
            <Global />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default InitialProvider