import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Shop from './component/Shop/Shop'

function App() {
  const [count, setCount] = useState([])

  // useEffect(() => {
  //   fetch('products.json')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
