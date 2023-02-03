import Header from "./components/header/header"
import HomePage from "./pages/homePage/HomePage"

import { Global, theme } from "./global/GlobalStyle"
import Banner from "./components/banner/Banner"

import { ThemeProvider } from 'styled-components'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <HomePage/>
    </ThemeProvider>
  )
}

export default App
