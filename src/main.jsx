import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Gracias from './components/Gracias.jsx'
import AutorizacionDatos from './components/AutorizacionDatos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/autorizacion-datos" element={<AutorizacionDatos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
