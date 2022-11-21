import Filhos from '../data/Filhos'

function ComFilhos(){
    
    function getFilhos(){
        return Filhos.map(filho => {
            return <li key={filho.nome}>{filho.nome} {filho.apelido}</li>
        })
    }

    return(
        <div>
            <h3>Filhos:</h3>
            <ol>
                {getFilhos()}
            </ol>
        </div>
    )
}

export default ComFilhos