import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VegOrNonVeg from './VegOrNonVeg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  // <VegOrNonVeg></VegOrNonVeg>
)
