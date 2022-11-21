
function Sub(props){

    return(
        <div>
            <button onClick={()=> {props.noClicar(Math.random())}}>Alterar</button>
        </div>
    )
}

export default Sub