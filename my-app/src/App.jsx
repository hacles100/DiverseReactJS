import ComParametro from "./components/ComParametro"
import Primeiro from "./components/Primeiro"
import ComFilhos from "./components/ComFilhos"
import Card from "./components/layout/Card"
import './App.css'
import Repeticao from "./components/Repeticao"
import Condicional from "./components/Condicional"


function App(){

  return(
    <div className="App">

    <Card titulo='#05 Condicional v1'>
      <Condicional numero={2}/>
     </Card>

    <Card titulo='#04 Repeticao'>
      <Repeticao></Repeticao>
     </Card>
  
     <Card titulo='#03 Componentes Com Filhos'>
      <ComFilhos />
     </Card>

      <Card titulo='#02 Componente com parametro'>
        <ComParametro title='Esse e um titulo' subtitle='Esse e um subtitulo'/>
      </Card>

      <Card titulo='#01 Primeiro Componente'>
         <Primeiro/>
      </Card>
    </div>
  )
}

export default App