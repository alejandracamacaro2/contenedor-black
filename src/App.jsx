import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Borde from './Componentes/Borde'
import borde from './assets/borde.png'
import Organico from './Componentes/Organico'
import organico from './assets/organico.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    < Organico imagen={organico} />
    <Borde imagen={borde} />
    
    

      </div>
      
    </>
  )
}

export default App