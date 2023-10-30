import './App.css'
import {BrowserRouter} from "react-router-dom"

import Header from './Frontend/components/templates/Header/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </>
  )
}

export default App
