import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

function App() {

  const [carros, setCarros] = useState<number>(0)

  function aumentar() {
    setCarros(carros + 1)
  }

  return (
    <>
      <Cabecalho carros={carros} />
      <Rodape />
    </>
  )
}

export default App
