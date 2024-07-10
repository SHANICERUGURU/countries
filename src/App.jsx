import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountriesContainer from './components/countriescontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CountriesContainer/> 
    </>
  )
}

export default App
