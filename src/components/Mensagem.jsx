// Importa o React e o hook useState para gerenciar estados
import React, { useState } from "react";
import "./styles/Gerador.css";
import "./styles/Mensagem.css";
import whatsIcon from "./imgs/whats.png";
import linkIcon from "./imgs/link.png";

// Componente principal que gera e traduz mensagens do WhatsApp
export default function Mensagem({ telefone }) {
  // Estados para controlar mensagem, link e idiomas
  const [mensagem, setMensagem] = useState("");
  const [link, setLink] = useState("");
  const [idiomaOrigem, setIdiomaOrigem] = useState("pt");
  const [idiomaSelecionado, setIdiomaSelecionado] = useState("en");
  const [traduzindo, setTraduzindo] = useState(false);

  // Lista de idiomas disponíveis para tradução
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

  // Função que traduz a mensagem usando a API MyMemory
  const traduzirMensagem = async () => {
    if (!mensagem.trim()) {
      alert("Digite uma mensagem para traduzir");
      return;
    }

    setTraduzindo(true);

    try {
      // Monta a URL da API com os idiomas selecionados
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        mensagem
      )}&langpair=${idiomaOrigem}|${idiomaSelecionado}`;

      // Faz a requisição de tradução
      const response = await fetch(url);
      const data = await response.json();

      // Se houver texto traduzido, atualiza o estado da mensagem
      if (data.responseData && data.responseData.translatedText) {
        const textoTraduzido = data.responseData.translatedText;
        setMensagem(textoTraduzido);
      } else {
        alert("Erro ao traduzir. Tente novamente.");
      }
    } catch (error) {
      // Caso a requisição falhe, mostra um alerta
      console.error("Erro na tradução:", error);
      alert("Erro ao traduzir. Verifique sua conexão e tente novamente.");
    } finally {
      // Finaliza o estado de tradução
      setTraduzindo(false);
    }
  };

  // Função que cria o link do WhatsApp com a mensagem e número formatados
  const handlePrepararMensagem = () => {
    if (!telefone) {
      alert("Por favor, insira um número de telefone válido");
      return;
    }

    // Remove caracteres não numéricos do número
    const telefoneFormatado = telefone.replace(/\D/g, "");
    // Codifica a mensagem para URL
    const mensagemFormatada = encodeURIComponent(mensagem);
    // Monta o link completo do WhatsApp
    const linkGerado = `https://wa.me/${telefoneFormatado}?text=${mensagemFormatada}`;
    setLink(linkGerado);
  };

  // Copia o link gerado para a área de transferência
  const copiarLink = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert("Link copiado para a área de transferência!");
    }
  };

  // Abre o WhatsApp com o link gerado em uma nova aba
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
        {/* Campo de texto controlado da mensagem */}
        <textarea
          placeholder="Digite sua mensagem aqui..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />

        {/* Seção de seleção de idiomas e botão de tradução */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
            marginBottom: "10px",
            flexDirection: "column",
          }}
        >
          {/* Seleção do idioma de origem */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                minWidth: "120px",
              }}
            >
              Idioma de origem:
            </label>
            <select
              value={idiomaOrigem}
              onChange={(e) => setIdiomaOrigem(e.target.value)}
              disabled={traduzindo}
              style={{
                fontFamily: "var(--font-primary)",
                background: "#ecececff",
                padding: "3px 12px",
                borderRadius: "5px",
                border: "1px solid #f1f1f1ff",
                fontSize: "10px",
                flex: "1",
              }}
            >
              {idiomas.map((idioma) => (
                <option key={idioma.codigo} value={idioma.codigo}>
                  {idioma.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Seleção do idioma para tradução */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                minWidth: "120px",
              }}
            >
              Traduzir para:
            </label>
            <select
              value={idiomaSelecionado}
              onChange={(e) => setIdiomaSelecionado(e.target.value)}
              disabled={traduzindo}
              style={{
                fontFamily: "var(--font-primary)",
                background: "#ecececff",
                padding: "3px 12px",
                borderRadius: "5px",
                border: "1px solid #f1f1f1ff",
                fontSize: "10px",
                flex: "1",
              }}
            >
              {idiomas.map((idioma) => (
                <option key={idioma.codigo} value={idioma.codigo}>
                  {idioma.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Botão que dispara a tradução */}
          <button
            onClick={traduzirMensagem}
            disabled={traduzindo || !mensagem.trim()}
            style={{
              fontFamily: "var(--font-primary)",
              padding: "5px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor:
                traduzindo || !mensagem.trim() ? "#ccc" : "#25D366",
              color: "white",
              fontSize: "14px",
              cursor: traduzindo || !mensagem.trim() ? "not-allowed" : "pointer",
              fontWeight: "500",
            }}
          >
            {traduzindo ? "Traduzindo..." : "Traduzir"}
          </button>
        </div>

        {/* Botão que gera o link do WhatsApp */}
        <button className="botaoComIcone" onClick={handlePrepararMensagem}>
          <img
            src={whatsIcon || "/placeholder.svg"}
            alt=""
            width={15}
            height={15}
          />{" "}
          Preparar Mensagem
        </button>
      </div>

      {/* Área que mostra e copia o link gerado */}
      <div className="linkGerado">
        <h2>Link Gerado:</h2>
        <div className="copiarLink">
          <p className="link">{link}</p>
          <button id="link" onClick={copiarLink}>
            <img
              src={linkIcon || "/placeholder.svg"}
              alt=""
              width={25}
              height={25}
            />
          </button>
        </div>

        {/* Botão que abre o WhatsApp diretamente */}
        <button className="botaoComIcone" onClick={abrirWhatsapp}>
          <img
            src={whatsIcon || "/placeholder.svg"}
            alt=""
            width={15}
            height={15}
          />{" "}
          Abrir WhatsApp
        </button>
      </div>
    </div>
  );
}
