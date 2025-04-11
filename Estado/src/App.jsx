
import { useState } from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Estado from './components/Estado'
import Aviso from './components/Aviso'
import Temperatura from './components/Temperatura'

function App() {
  const [usuario, setUsuario] = useState("Riva")
  const [senha,setSenha] = useState()

  return (
    <>

    <Temperatura />
    <Aviso />
    <Conversao />
    <Conversao2 />
    <Estado />



    </>
  )
}

export default App
