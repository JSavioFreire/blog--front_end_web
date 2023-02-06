import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';


import { theme } from "./global/GlobalStyle"

import { ThemeProvider } from 'styled-components'
import { ContextProvider } from "./context/Provider";
import InitialProvider from "./provider/InitialProvider";

function App() {


  useEffect(() => {
    AOS.init({ duration: 500 });
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <InitialProvider />
      </ContextProvider>
    </ThemeProvider>
  )
}

export default App
