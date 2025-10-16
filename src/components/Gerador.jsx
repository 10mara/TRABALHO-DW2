// Importa os componentes utilizados e estilos
import Mascara from "./Mascara"; 
import Mensagem from "./Mensagem";
import "./styles/Gerador.css";
import geradorIcon from "./imgs/gerador.png";
import { useState, useEffect } from "react";

// Componente principal que combina número e mensagem para gerar o link do WhatsApp
export default function Gerador({ telefoneSelecionado, setTelefoneSelecionado }) {
  
  // Estado local para armazenar o número de telefone
  const [telefone, setTelefone] = useState(telefoneSelecionado || "");

  // Atualiza o estado local caso o número selecionado venha de outro componente
  useEffect(() => {
    if (telefoneSelecionado) setTelefone(telefoneSelecionado);
  }, [telefoneSelecionado]);

  return (
    <div className="boxGrd">
      {/* Cabeçalho do gerador */}
      <div className="header">
        <img src={geradorIcon} alt="icone" width={30} height={30} />
        <h1>Gerador de Links</h1>
      </div>

      {/* Área principal: campo de número + mensagem */}
      <div className="gerador">
        <h2>Número do WhatsApp</h2>
        <Mascara value={telefone} onChange={setTelefone} /> {/* Campo com máscara */}
        <Mensagem telefone={telefone} /> {/* Componente para digitar/traduzir mensagem */}
      </div>
    </div>
  );
}
