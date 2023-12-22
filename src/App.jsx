import './App.css'
import {BrowserRouter} from "react-router-dom"

import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Body/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
