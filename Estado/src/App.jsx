
import { useState } from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'

function App() {
  const [usuario, setUsuario] = useState("Riva")
  const [senha,setSenha] = useState()

 // setUsuario ("Deu bom")



  let nome = "Ulib"
  function lerNome() {
    nome = prompt ("Digite o nome do fulano")
    console.log(nome);
  }
  function lerUsuario(){
    let resposta = prompt ("Digite o novo user:")
    setUsuario (resposta) 

    let pw = prompt ("Digite uma nova senha:")
    let pw2 = prompt ("Confirme a senha:")
    if (pw == pw2){
      setSenha(pw)
    } else{
      alert("As senhas são diferentes")
    }
  }

  return (
    <>
    <Conversao />
    <Conversao2 />



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
