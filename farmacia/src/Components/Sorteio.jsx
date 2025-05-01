import { useState } from 'react'
import './Sorteio.css'

function Sorteio() {
    const [inputNome, setInputNome] = useState ('')
    const [nomes, setNomes] = useState ([])


    

function cadastrarNome(){
    setNomes([inputNome, ...nomes])
} 
  return (
    <div className='container-sorteio'>
        <h2>SORTEIOOOOO!!</h2>

    <p>Inscreva-se aqui para o sorteio de uma linda camiseta</p>

    <label htmlFor="">Nome</label>
    <input type="text" 
    value={inputNome}
    onChange={(event) => setInputNome(event.target.value)}
    />

    <button onClick={cadastrarNome}>Cadastrar</button>

    </div>
  )
}

export default Sorteio