import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ApiContext from './context/ApiContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ApiContext>
  </StrictMode>
)
