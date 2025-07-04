import React, { useEffect, useState } from 'react'
import './ControleSaldo.css'
import PropMovimentacao from './PropMovimentacao';

function ControleSaldo() {
    const [saldo, setSaldo] = useState(500);
    const [valorInput, setValorInput] = useState('');
    const [tipoMovimentacao, setTipoMovimentacao] = useState('');
    const [operacao, setTipoOperacao] = useState([])

    useEffect(() => console.log(operacao), [operacao])

    function credito() {
        if (!valorInput || !tipoMovimentacao) {
            alert("digite o valor ")
        } else {
            let novoValor = saldo + valorInput;

            let itemOperacao = {
                id: Date.now(),
                nome: tipoMovimentacao,
                preco: valorInput,
                operacao: 'Crédito'
            }

            setSaldo(novoValor);
            setTipoOperacao([itemOperacao, ...operacao]);
            setValorInput('');
            setTipoMovimentacao('');
        }

    }

    function debito() {

        if (!valorInput || !tipoMovimentacao) {
            alert("digite o valor ")
        } else {
            let novoValor = saldo - valorInput;

            let itemOperacao = {
                id: Date.now(),
                nome: tipoMovimentacao,
                preco: valorInput,
                operacao: 'Débito'
            }

            setSaldo(novoValor);
            setTipoOperacao([itemOperacao, ...operacao]);
            setValorInput('');
            setTipoMovimentacao('');
        }

    }

    return (
        <div className='container-saldo'>

            <h2>Saldo Atual</h2>

            <h2>Controle Financeiro</h2>

            <h3>Saldo: {saldo}</h3>

            <input type="text " placeholder='Nome da Movimentação' className='input-valor' value={tipoMovimentacao} onChange={(event) => { setTipoMovimentacao(event.target.value) }} />

            <input type="text " placeholder='Valor' className='input-valor' value={valorInput} onChange={(event) => { setValorInput(Number(event.target.value)) }} />


            <div className='botoes-saldo'>
                <button onClick={credito} className='botao-credito'>Crédito</button>
                <button onClick={debito} className='botao-debito'>Débito</button>
            </div>

            <h1>Kowalski, relatório!</h1>

            <div className='container-movimentacoes'>
                {operacao.map((p) => (<PropMovimentacao key={p.id} nome={p.nome} preco={p.preco} operacao={p.operacao}/>))}
                
            </div>
        </div>
    )
}

export default ControleSaldo