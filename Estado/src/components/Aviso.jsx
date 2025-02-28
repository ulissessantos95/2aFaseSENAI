import { useState } from 'react'
import React from 'react'


function Aviso() {
    const [avisar, SetAvisar] = useState(false)

    function toggleAviso(){
        SetAvisar(!avisar)
        console.log(avisar);
    }


  return (


    <div>
      
      
      { avisar && 

          <p>
            Aviso por favor escreva de forma correta para que você
        não perca sua conta.  

            </p>

    } 
    
            

        <button onClick={toggleAviso}>Avisar</button>
    </div>
  )
}

export default Aviso