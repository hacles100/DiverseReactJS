import './Card.css'

function Card(props){

    return(
        <div className='Card'  style={{borderColor: props.color || '#000'}}>
            <div className='Conteudo'>
                {props.children}
            </div>

            <div className='Footer' style={{backgroundColor: props.color || '#000'}}>
                {props.titulo}
            </div>
        </div>
    )
}

export default Card