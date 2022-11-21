import Sub from "./Sub"

function Super(){

    function Clicar(valorGerado){
        console.log('resultado')
        console.log(valorGerado)
    }

    return(
        <div>
            <h4>Valor no Console</h4>
            <Sub noClicar={Clicar}></Sub>
        </div>
    )
}

export default Super