import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert ("MIIIIIAUUUUUUUU!")
    }
    return (
        <div className="container-corpo">
            <h1>Desbravando o React</h1>
            <p>Vamos começar a nossa aventura no React ♥ !</p>
            <button onClick={alertarUsuario}>Alerta</button>
            <img className='img' src="./Cat.02.jpg" alt="" />

            Kira Kalkmann 
        </div>
    )
}

export default Corpo;