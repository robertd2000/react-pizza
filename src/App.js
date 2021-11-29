import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import './App.css'
import { Header } from './components'
import { Cart, Home } from './pages'
import { setPizzas } from './redux/reducers/pizzas'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const foo = async () => {
      const response = await axios.get('http://localhost:3001/pizzas')
      dispatch(setPizzas(response.data))
    }
    foo()
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
