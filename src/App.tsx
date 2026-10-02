import { useState } from 'react'

function App() {

  const [valorState, setValorState] = useState(5)
  let valorVariavel = 5

  let aumentar = () => {
    setValorState(valorState + 5)
    valorVariavel += 5
  }

  return (
    <>
      <p>Valor State: {valorState}</p>
      <p>Valor Variável: {valorVariavel}</p>
      <button onClick={aumentar}>Aumentar</button>
    </>
  )
}

export default App
