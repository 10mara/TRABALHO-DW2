import React, { useState } from "react";
import "./styles/Gerador.css";
import "./styles/Mensagem.css";
import whatsIcon from "./imgs/whats.png";
import linkIcon from "./imgs/link.png";


export default function Mensagem({ telefone }) {
  const [mensagem, setMensagem] = useState("");
  const [link, setLink] = useState("");
  const [idiomaSelecionado, setIdiomaSelecionado] = useState("en");
  const [traduzindo, setTraduzindo] = useState(false);

  // Lista de idiomas
  const idiomas = [
    { codigo: "en", nome: "Inglês" },
    { codigo: "es", nome: "Espanhol" },
    { codigo: "fr", nome: "Francês" },
    { codigo: "de", nome: "Alemão" },
    { codigo: "it", nome: "Italiano" },
    { codigo: "ja", nome: "Japonês" },
    { codigo: "ko", nome: "Coreano" },
    { codigo: "zh", nome: "Chinês" },
    { codigo: "ru", nome: "Russo" },
    { codigo: "ar", nome: "Árabe" },
    { codigo: "pt", nome: "Português" },
  ];

  // Função de tradução
  const traduzirMensagem = async () => {
    if (!mensagem.trim()) {
      alert("Digite uma mensagem para traduzir");
      return;
    }

    setTraduzindo(true);

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(mensagem)}&langpair=pt|${idiomaSelecionado}`
      );

      const data = await response.json();

      if (data.responseStatus === 200 && data.responseData) {
        setMensagem(data.responseData.translatedText);
      } else {
        alert("Erro ao traduzir. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na tradução:", error);
      alert("Erro ao traduzir. Verifique sua conexão.");
    } finally {
      setTraduzindo(false);
    }
  };

  const handlePrepararMensagem = () => {
    if (!telefone) {
      alert("Por favor, insira um número de telefone válido");
      return;
    }

    const telefoneFormatado = telefone.replace(/\D/g, "");
    const mensagemFormatada = encodeURIComponent(mensagem);
    const linkGerado = `https://wa.me/${telefoneFormatado}?text=${mensagemFormatada}`;
    setLink(linkGerado);
  };

  const copiarLink = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert("Link copiado para a área de transferência!");
    }
  };

  const abrirWhatsapp = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Prepare a mensagem primeiro!");
    }
  };

  return (
    <div className="mensagem">
      <div>
        <h2>Mensagem (opcional)</h2>
        <textarea
          placeholder="Digite sua mensagem aqui..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        
        {/* TRADUTOR */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
          <select
            value={idiomaSelecionado}
            onChange={(e) => setIdiomaSelecionado(e.target.value)}
            disabled={traduzindo}
            style={{
              padding: '8px 12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '14px',
              flex: '1'
            }}
          >
            {idiomas.map((idioma) => (
              <option key={idioma.codigo} value={idioma.codigo}>
                {idioma.nome}
              </option>
            ))}
          </select>

          <button
            onClick={traduzirMensagem}
            disabled={traduzindo || !mensagem.trim()}
            style={{
              padding: '8px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: traduzindo || !mensagem.trim() ? '#ccc' : '#25D366',
              color: 'white',
              fontSize: '14px',
              cursor: traduzindo || !mensagem.trim() ? 'not-allowed' : 'pointer',
              fontWeight: '500'
            }}
          >
            {traduzindo ? "Traduzindo..." : "Traduzir"}
          </button>
        </div>
        
        <button className="botaoComIcone" onClick={handlePrepararMensagem}>
          <img src={whatsIcon || "/placeholder.svg"} alt="" width={15} height={15} /> Preparar Mensagem
        </button>
      </div>

      <div className="linkGerado">
        <h2>Link Gerado:</h2>
        <div className="copiarLink">
          <p className="link">{link}</p>
          <button id="link" onClick={copiarLink}>
            <img src={linkIcon || "/placeholder.svg"} alt="" width={25} height={25} />
          </button>
        </div>
        <button className="botaoComIcone" onClick={abrirWhatsapp}>
          <img src={whatsIcon || "/placeholder.svg"} alt="" width={15} height={15} /> Abrir WhatsApp
        </button>
      </div>
    </div>
  );
}