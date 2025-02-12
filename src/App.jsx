import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return <Routes>
    <Route index element={<Home/>}/>
    <Route path='products/:id' element={<Products/>}/>
  </Routes>
}

export default App
