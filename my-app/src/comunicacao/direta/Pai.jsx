import Filho from "./Filho"

function Pai(props){

    return(
        <div>
            <Filho {...props}><strong>Hericles</strong></Filho>
            <Filho sobrenome={props.sobrenome}>Paloma</Filho>
            <Filho sobrenome='Rocha'>Cris</Filho>
        </div>
    )
}

export default Pai