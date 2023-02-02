import Header from "./components/header/header"
import HomePage from "./pages/homePage"

import { Global } from "./global/GlobalStyle"

function App() {

  return (
    <div>
      <Global />
      <Header />
      <HomePage />
    </div>
  )
}

export default App
