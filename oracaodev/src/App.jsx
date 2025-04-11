import { useState } from 'react'
import './App.css'
import Desenvolvedor from './components/Desenvolvedor'
import Frontend from './components/Frontend'
import Backend from './components/Backend'
import Fullstack from './components/Fullstack'
import Deploy from './components/Deploy'

function App() {
  const[oracao, setOracao] = useState('')

  function mostrardesenvolvedor(){
    setOracao(<Desenvolvedor />)
  }

  function mostrarfrontend(){
    setOracao(<Frontend />)
  }

  function mostrarbackend(){
    setOracao(<Backend />)
  }

  function mostrarfullstack(){
    setOracao(<Fullstack />)
  }

  function mostardeploy(){
    setOracao(<Deploy />)
  }
  return (
    <div className='container'>
        <h1 className='titulo'>Orações Devs</h1>

        <div className='container-oracao'>
          <button className='botao-oracao' onClick={mostrardesenvolvedor}>Do desenvolvedor Web</button>
          <button className='botao-oracao' onClick={mostrarfrontend}>Do Frontend</button>
          <button className='botao-oracao' onClick={mostrarbackend}>Do Backend</button>
          <button className='botao-oracao' onClick={mostrarfullstack}>Do Fullstack</button>
          <button className='botao-oracao' onClick={mostardeploy}>Do deploy</button>
        </div>

        {oracao}

    </div>
  )
}

export default App