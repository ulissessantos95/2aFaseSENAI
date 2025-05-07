import { useState, useEffect } from 'react'
import './Sorteio.css'

function Sorteio() {
    const[inputNome, setInputNome] = useState('')
    const[nomes, setNomes] = useState([])

    useEffect(() => 
        console.log(nomes), [nomes])

    function cadastrarNome(){
        setNomes([inputNome, ...nomes])
        setInputNome('')
        // console.log(nomes)
    }
    
    function sortearCliente(){
      let i = Math.floor(Math.random() * nomes.target)
     alert('cliente sorteado' + nomes[i])

    }

  return (
    <div className='container-sorteio'>
        <h2>!! SORTEIOOOOOOO !!</h2>
        <p>Inscreva-se aqui para o sorteio de uma linda camiseta</p>

        <label htmlFor="">Nome</label>
        <input type="text" 
            value={inputNome}
            onChange={(event) => setInputNome(event.target.value)}
        />
        <button onClick={cadastrarNome}>Cadastrar </button>
        <button onClick={sortearCliente}>Sortear</button>
        
    </div>

    
  )
}

export default Sorteio