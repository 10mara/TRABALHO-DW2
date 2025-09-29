import { useState } from "react";
import "./styles/Gerador.css";

export default function Mensagem({ telefone }) {
  const [mensagem, setMensagem] = useState("");
  const [link, setLink] = useState(""); // estado para o input

  function handlePrepararMensagem() {
    if (!telefone || telefone.trim() === "") {
      console.log("Número inválido:", telefone);
      return;
    }

    if (telefone.length < 10 || telefone.length > 11) {
      console.log("Número inválido:", telefone);
      return;
    }

    // remove símbolos extras, deixa só números
    const numeroLimpo = `${telefone.slice(0, 2)}${telefone.slice(2, 7)}${telefone.slice(7)}`;

    // codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    setLink (`https://wa.me/55${numeroLimpo}?text=${mensagemCodificada}`);

  }

  return (
    <div>
      <div>
        <h2>Mensagem (opcional)</h2>
      <input
        type="text"
        placeholder="Digite sua mensagem aqui..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button className="botaoComIcone" onClick={handlePrepararMensagem}>
        Preparar Mensagem
      </button>
      </div>
       <div className="linkGerado">
          <h2>Link Gerado:</h2>
          <div className="copiarLink">
              <p className="link">{link}</p>
              <button>Copiar</button>
          </div>
          <button className="botaoComIcone">Abrir Whatsapp</button>
          </div>
    </div>
  );
}
