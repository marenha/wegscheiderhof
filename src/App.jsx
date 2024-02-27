import { useState } from 'react'
import './App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from 'semantic-ui-react'
import elsa from './assets/elsa.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="card">
      <Image src={elsa} />
      </div>
      <span>Elsa.</span>
    </>
  )
}

export default App
