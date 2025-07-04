import React, { useState } from 'react'
import './CaixaPomar.css'

function CaixaPomar() {
    const [maca, setMaca] = useState(0)
    const [laranja, setLaranja] = useState(0)
    const [bergamota, setBergamota] = useState(0)
    const [banana, setBanana] = useState(0)
    const [pera, setPera] = useState(0)

    const [prMaca, setPrMaca] = useState(0)
    const [prLaranja, setPrLaranja] = useState(0)
    const [prBergamota, setPrBergamota] = useState(0)
    const [prBanana, setPrBanana] = useState(0)
    const [prPera, setPrPera] = useState(0)
    const valorTotal = 0;
    


    function pagar() {
        setMaca(0);
        setLaranja(0);
        setBergamota(0);
        setBanana(0);
        setPera(0);

        valorTotal = prMaca + prLaranja + prBergamota + prBanana + prPera;
    }

   
    return (
        <div id="container">

            <div id='listaFr-esquerdo'>
                <table id='listaFr'>
                    <thead>
                        <tr>
                            <th>
                                Fruta
                            </th>
                            <th>
                                Valor (UND)
                            </th>
                        </tr>
                    </thead>

                    <tbody id='selecaoFr'>
                        <tr>
                            <td>Maçã</td>
                            <td>R$ 1,50</td>
                        </tr>

                        <tr>
                            <td>Laranja</td>
                            <td>R$ 2,00</td>
                        </tr>

                        <tr>
                            <td>Bergamota</td>
                            <td>R$ 1,00</td>
                        </tr>

                        <tr>
                            <td>Banana</td>
                            <td>R$ 1,25</td>
                        </tr>

                        <tr>
                            <td>Pera</td>
                            <td>R$ 0,50</td>
                        </tr>
                    </tbody>
                </table>

                

            </div>
            <div id='qntFrutas'>
                    <input
                        type="number"
                        id='qntMaca'
                        value={maca}
                        onChange={(e) => {
                            const newValue = Number(e.target.value);
                            setMaca(newValue);
                            if(maca > 0){
                                setPrMaca(newValue * 1.50);
                        
                            }else{
                                setPrMaca(0);
                            }
                            
                        }}
                    />
                    <input
                        type="number"
                        id='qntLaranja'
                        value={laranja}
                        onChange={(e) => {
                            const newValue = Number(e.target.value);
                            setLaranja(newValue);
                            setPrLaranja(newValue * 2.00);
                        }}
                    />
                    <input
                        type="number"
                        id='qntBergamota'
                        value={bergamota}
                        onChange={(e) => {
                            const newValue = Number(e.target.value);
                            setBergamota(newValue);
                            setPrBergamota(newValue * 2.00);
                        }}
                    />
                    <input
                        type="number"
                        id='qntBanana'
                        value={banana}
                        onChange={(e) => {
                            const newValue = Number(e.target.value);
                            setBanana(newValue);
                            setPrBanana(newValue * 2.00);
                        }}
                    />
                    <input
                        type="number"
                        id='qntPera'
                        value={pera}
                        onChange={(e) => {
                            const newValue = Number(e.target.value);
                            setPera(newValue);
                            setPrPera(newValue * 2.00);
                        }}
                    />
                </div>


            <div id='notaFi-direita'>
                <table id='notaFi'>
                    <thead>
                        <tr>
                            <th>Frutas</th>
                            <th>Quantidade</th>
                            <th>Valor UNT</th>
                        </tr>
                    </thead>

                    <tbody id='frutasCom'>
                        <tr>
                            <td>Maçã</td>
                            <td>{maca}</td>
                            <td>R$ {prMaca.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Laranja</td>
                            <td>{laranja}</td>
                            <td>R$ {prLaranja.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Bergamota</td>
                            <td>{bergamota}</td>
                            <td>R$ {prBergamota.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Banana</td>
                            <td>{banana}</td>
                            <td>R$ {prBanana.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Pera</td>
                            <td>{pera}</td>
                            <td>R$ {prPera.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Valor total</td>
                            <td></td>
                            <td >R$ {valorTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <div id='bnt-pagar'>
                    <button onClick={pagar} >Pagar</button>
                </div>
            </div>


        </div>
    )
}

export default CaixaPomar