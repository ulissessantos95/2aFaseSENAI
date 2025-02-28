import React from 'react'
import { useState } from 'react'

function Temperatura() {
    const [Celsius , setCelsius] = useState (0)
    const [Fahrenheit, setFahrenheit] = useState(0)
    const [Kelvin, setKelvin] = useState(0)
    
    function Calcular(){
        let entrada = Number (prompt("Digite o valor:"))
        
        setCelsius(entrada)
        setFahrenheit(entrada + 32)
        setKelvin(entrada + 273,15)



    }

  return (

    <div className='conteiner-tempero'> 
    
    <h1>Temperatura</h1>
<button onClick={Calcular}>Teste</button>

        <p>
            Celsius: {Celsius}
          </p>
          <p>
            Fahrenheit: {Fahrenheit}
          </p>
          <p>
            Kelvin: {Kelvin}
          </p>



    </div>

  )
}

export default Temperatura