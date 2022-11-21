import ComParametro from "./basicos/ComParametro"
import Primeiro from "./basicos/Primeiro"
import ComFilhos from "./basicos/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./basicos/Repeticao"
import Condicional from "./basicos/Condicional"
import './App.css'
import Pai from "./comunicacao/direta/Pai"


function App(){

  return(
    <div className="App">

    <Card titulo='#06 Comunicacao Direta' color='#add6ff'>
      <Pai sobrenome='Gaucho'/>
     </Card>

    <Card titulo='#05 Condicional v1' color='#008744'>
      <Condicional numero={2}/>
     </Card>

    <Card titulo='#04 Repeticao' color='#83d0c9'>
      <Repeticao></Repeticao>
     </Card>
  
     <Card titulo='#03 Componentes Com Filhos' color='#29a8ab'>
      <ComFilhos />
     </Card>

      <Card titulo='#02 Componente com parametro' color='#a8e6cf'>
        <ComParametro title='Esse e um titulo' subtitle='Esse e um subtitulo'/>
      </Card>

      <Card titulo='#01 Primeiro Componente' color='#0392cf'>
         <Primeiro/>
      </Card>
    </div>
  )
}

export default App