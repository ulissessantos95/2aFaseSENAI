import { useState } from 'react'
import './Conversao.css'

function Conversao() {
  
  const[real, setReal] = useState(0)
  const[dolar, setDolar] = useState(0)
  function converterRealPRaDolar(){
    let entrada = Number (prompt("Digite o valor R$:"))
    setDolar((entrada * 5.81).toFixed(2)) 
    setReal(entrada)
  }

  return (
    <div className="conteiner-conversao">
      <h2> Real ♾️ Dolar </h2>

      <button onClick={converterRealPRaDolar}>Converter</button>
      <p>
        Valor original: R$ {real}
      </p>
      <p>
        Valor convertido: U${dolar}
      </p>
      
      </div>
  )
}

export default Conversao