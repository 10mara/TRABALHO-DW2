import { useState } from 'react'
import Gerador from './components/Gerador'
import Agenda from './components/Agenda'


function App() {

  return (
    <div className='container'>
      <div className='titulo'>
        <div>
          <h1>WhatsSM</h1>
        </div>
        <div>
          <p>O jeito mais rápido de iniciar conversas no WhatsApp. Gere links instantâneos e mantenha seus contatos organizados.</p>
        </div>

      </div>
      <div>
        <Gerador/>
        <Agenda/>
      </div>
      
    </div>
  )
}

export default App
