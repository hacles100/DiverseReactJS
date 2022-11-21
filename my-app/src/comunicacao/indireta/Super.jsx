import { useState } from "react"
import Sub from "./Sub"

function Super(){

    const [num, setNum] = useState(0)

    function Clicar(valorGerado){

        setNum(valorGerado)
      
    }

    return(
        <div>
            <h4>Valor: {num}</h4>
            <Sub noClicar={Clicar}></Sub>
        </div>
    )
}

export default Super