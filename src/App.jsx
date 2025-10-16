import { useState } from 'react';
import './index.css';
import Gerador from './components/Gerador';
import Agenda from './components/Agenda';
import WhatsAppImg from '../src/assets/logo-whatsapp.webp'
import React from "react"

function App() {
  // Estado que armazena o número selecionado para envio de mensagens
  const [telefoneSelecionado, setTelefoneSelecionado] = useState("");

  // Estados auxiliares (não utilizados diretamente aqui, mas disponíveis se necessário)
  const [telefone, setTelefone] = React.useState("")
  const [mensagem, setMensagem] = React.useState("")

  return (
    <div className='container'>
      {/* Cabeçalho da aplicação */}
      <div className='titulo'>
        <div className='header'>
          <img src={WhatsAppImg} alt="" width={60} height={60}/>
          <h1>WhatsSM</h1>
        </div>
        <div>
          <p>O jeito mais rápido de iniciar conversas no WhatsApp. Gere links instantâneos e mantenha seus contatos organizados.</p>
        </div>
      </div>

      {/* Área principal: gerador de links e agenda de contatos */}
      <div className='caixas'>
        <div>
          <Gerador 
            telefoneSelecionado={telefoneSelecionado} 
            setTelefoneSelecionado={setTelefoneSelecionado} 
          />
        </div>
        
        <div>
          <Agenda setTelefoneSelecionado={setTelefoneSelecionado} />
        </div>
      </div>
    </div>
  );
}

export default App;
