import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GotagotaApp } from './GotagotaApp'
import './style.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <GotagotaApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
