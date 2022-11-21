import Produtos from "../data/Produtos"

function Repeticao(){

    function getProdutosListItem(){

        return Produtos.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.nome} - R$ {prod.preco}</li>
        })
    }
     
    return(
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}

export default Repeticao