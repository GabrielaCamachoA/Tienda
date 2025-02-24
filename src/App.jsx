import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './components/Header'
import Carrito from './pages/Carrito'

function App() {
  return <>
  <Header/>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='products/:id' element={<Products/>}/>
    <Route path='carrito' element={<Carrito/>}/>
  </Routes>
   </>
}

export default App
