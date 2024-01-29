import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    {/*Los componntes como el de arriba son sensibles a mayusculas*/}
  </React.StrictMode>,
  {/*Componente que abre y cierra*/}
)
