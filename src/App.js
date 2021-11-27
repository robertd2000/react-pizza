import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { Header } from './components'
import { Cart, Home } from './pages'

function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    const foo = async () => {
      const response = await axios.get('http://localhost:3000/db.json')
      setPizzas(response.data.pizzas)
    }
    foo()
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={pizzas} />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
