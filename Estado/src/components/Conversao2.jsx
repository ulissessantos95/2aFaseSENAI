import { useState } from 'react'
import React from 'react'
function Conversao2() {
    const [km , setKm] = useState (0)
    const [milhas, setMilhas] = useState(0)
    const [legue, setLegue] = useState(0)
    
    function paramento(){
        let distancia = Number (prompt("Digite o valor:"))
        setKm((distancia/ 1.609).toFixed(2))
        setLegue((distancia/ 4.828).toFixed(2))

    setMilhas(distancia)

    }
    

  return (

    <div className='conteiner-paramento'>Km 🌪️ milhas

          <h2> Real ♾️ Dolar 🌪️ léguas </h2>
          <button onClick={paramento}>Resultado</button>
          <p>
            Quilomentro: {km}
          </p>
          <p>
            Milhas: {milhas}
          </p>
          <p>
            Legue: {legue}
          </p>
          
          </div>
      )

}

export default Conversao2