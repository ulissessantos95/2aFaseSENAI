import { useState } from 'react'

import './App.css'

function App() {
  const [inputAntigo, setinputAntigo] = useState('')
  const [inputNovo, setinputNovo] = useState('')
  const [resultado, setResultado] = useState()


  function calcularAumento(){
    let antigo = Number (inputAntigo)
    let novo = Number (inputNovo)
    let diferenca = novo - antigo

    let percentual = (diferenca/antigo)*100

    setResultado(percentual)

  }

  return (
    <>

    <div>
    <label htmlFor="">Valor Antigo</label>
      <input type="text"
      value={inputAntigo}
      onChange={(avent) => setinputAntigo(avent.target.value)}
      />
    </div>
      

      <div>
      <label htmlFor="">Valor Novo</label>
      <input type="text"
      value={inputNovo}
      onChange={(avent) => setinputNovo(avent.target.value)}
      />

      </div>

      <button onClick={calcularAumento}>Calcular  valor</button>
      { resultado > 0 && 
      <div>
        {resultado.toFixed(2)}%
      </div>
}
    </>
  )
}

export default App
