import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Apicontext from './context/Apicontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apicontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Apicontext>
  </React.StrictMode>,
)
