import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <Header></Header>
    </div>
  )
}

export default App
