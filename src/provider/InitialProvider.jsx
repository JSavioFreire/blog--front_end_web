import React, { useContext, useEffect } from 'react'
import Header from '../components/header/header'
import HomePage from '../pages/homePage/HomePage'
import { Global } from '../global/GlobalStyle'
import AboutMe from "../pages/aboutMePage/AboutMe"
import { useFetch } from '../hooks/useFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from '../context/Provider'
import Footer from '../components/footer/Footer'
import TutorialPage from '../pages/tutorialPage/TutorialPage'
import InspirationPage from '../pages/inspirationPage/InspirationPage'
const InitialProvider = () => {
    const { data: dataTec, loading: loadingTec } = useFetch('http://localhost:3000/tec');
    const { data: dataInsp, loading: loadingInsp } = useFetch('http://localhost:3000/inspiration');
    const { data: dataTut, loading: loadingTut } = useFetch('http://localhost:3000/tutorial');
    const { setApiTec, setLoadingApiTec, setApiInsp, setLoadingApiInsp, setApiTutorial, setLoadingApiTutorial } = useContext(Context);

    useEffect(() => {
        setApiTec(dataTec);
        setLoadingApiTec(loadingTec);
        setApiInsp(dataInsp);
        setLoadingApiInsp(loadingInsp);
        setApiTutorial(dataTut);
        setLoadingApiTutorial(loadingTut);
    })

    return (
        <BrowserRouter>
            <Global />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/tutorial" element={<TutorialPage />} />
                <Route path="/inspiration" element={<InspirationPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default InitialProvider