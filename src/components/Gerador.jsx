import Mascara from "./Mascara";
import Mensagem from "./Mensagem";
import "./styles/Gerador.css";
import geradorIcon from "./imgs/gerador.png";
import { useState, useEffect } from "react";

export default function Gerador({ telefoneSelecionado, setTelefoneSelecionado }) {
  const [telefone, setTelefone] = useState(telefoneSelecionado || "");

  useEffect(() => {
    if (telefoneSelecionado) setTelefone(telefoneSelecionado);
  }, [telefoneSelecionado]);

  return (
    <div className="boxGrd">
      <div className="header">
        <img src={geradorIcon} alt="icone" width={30} height={30} />
        <h1>Gerador de Links</h1>
      </div>
      <div className="gerador">
        <h2>Número do WhatsApp</h2>
        <Mascara value={telefone} onChange={setTelefone} />
        <Mensagem telefone={telefone} />
      </div>
      
    </div>
  );
}
