import ComParametro from "./basicos/ComParametro"
import Primeiro from "./basicos/Primeiro"
import ComFilhos from "./basicos/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./basicos/Repeticao"
import Condicional from "./basicos/Condicional"
import Pai from "./comunicacao/direta/Pai"
import Super from "./comunicacao/indireta/Super"
import Input from "./components/layout/form/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"
import './App.css'


function App(){

  return(
    <div className="App">

      <h1>Fundamentos ReactJS</h1>
      <div className="Cards">

      <Card titulo='#10 Mega' color='#dec3c3'>
       <Mega qtdNumero={8}></Mega>
      </Card>


     <Card titulo='#09 Contad0r' color='#851e3e'>
      <Contador passo={5} valor={10}></Contador>
     </Card>

    <Card titulo='#08 Input' color='#011f4b'>
      <Input></Input>
     </Card>
      
    <Card titulo='#07 Comunicacao indireta' color='#000'>
      <Super></Super>
     </Card>


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
    </div>
  )
}

export default App