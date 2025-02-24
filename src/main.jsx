import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import UseCarrito from './context/useCarrito.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCarrito>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UseCarrito>
  </StrictMode>
)
