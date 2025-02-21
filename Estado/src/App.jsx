
import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Riva")

 // setUsuario ("Deu bom")



  let nome = "Ulib"
  function lerNome() {
    nome = prompt ("Digite o nome do fulano")
    console.log(nome);
  }
  function lerUsuario(){
    let resposta = prompt ("Digite o novo user:")
    setUsuario (resposta) 
  }

  return (
    <>
      <h1>ESTADO</h1>
      Nome: {nome}

      <div>

      Usuário {usuario}

      </div>

      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar Usuario</button>
    </>
  )
}

export default App
