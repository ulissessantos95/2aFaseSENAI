import'./Body.css'
import Sorteio from './Sorteio'

function Body() {
  return (
    <div className="container-body">
        <h2>Venha para a inauguração da Farmácia</h2>
        <p>Sua farmácia querida está sob nova direção.
            Venha para a festa de lançamento do dia dd/mm/aaaa !
        </p>

        <Sorteio/>
    
    </div>
  )
}

export default Body