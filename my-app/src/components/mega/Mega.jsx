import { useState } from "react"

function Mega(props){

    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))
    

    function gerarNovoNaoContido(array){

        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) ? gerarNovoNaoContido(array) : novoNumero
    }

    function Gerar(){
        const novoArray = Array(props.qtdNumero).fill(0).reduce(
            (a, e) => {
                console.log(a, e)
                return [...a, gerarNovoNaoContido(a)]

            }, []).sort((a, b) => a - b)

        setNumeros([novoArray])
    }

    return(
        <div>
            <h3>Loto</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={Gerar}>Gerar Numeros</button>
        </div>
    )
}

export default Mega