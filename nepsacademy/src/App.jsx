import React, { useState } from 'react';
import './App.css'

function VerificarNotaAluno() {
  const [notaA, setNotaA] = useState('');
  const [notaB, setNotaB] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    const a = parseFloat(notaA);
    const b = parseFloat(notaB);

    if (isNaN(a) || isNaN(b)) {
      setResultado("Digite notas válidas.");
      return;
    }

    const media = (a + b) / 2;

    if (media >= 7) {
      setResultado("Aprovado");
    } else if (media >= 4) {
      setResultado("Recuperacao");
    } else {
      setResultado("Reprovado");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Verificação de Situação do Aluno Roberto</h2>
      <input
        type="number"
        step="0.1"
        placeholder="Nota A"
        value={notaA}
        onChange={(e) => setNotaA(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        placeholder="Nota B"
        value={notaB}
        onChange={(e) => setNotaB(e.target.value)}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={calcularResultado} style={{ marginLeft: '10px' }}>
        Verificar
      </button>

      {resultado && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Resultado: {resultado}
        </div>
      )}
    </div>
  );
}

export default VerificarNotaAluno;
