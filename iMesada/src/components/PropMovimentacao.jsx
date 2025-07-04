import React, { useEffect } from 'react'
import './PropMovimentacao.css'

function PropMovimentacao(props) {
  return (
    <div className={props.operacao}>
            <p className='nome-mov'>{props.nome} - </p>
            <p> R${props.preco} </p>
            <p> ({props.operacao})</p>
        </div>
  )
}

export default PropMovimentacao