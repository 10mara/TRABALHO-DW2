import Gerador from "./Gerador";
import "./styles/Gerador.css"

export default function Mensagem({ telefone }) {
  const handlePrepararMensagem = () => {
    if (!telefone || telefone.trim() === "") {
      alert("Por favor, preencha o número de telefone.");
      return;
    }

    // Continuação da lógica...
    console.log("Número válido:", telefone);
  };

  return (
    <div>
      <h2>Mensagem (opcional)</h2>
      <input type="text" placeholder="Digite sua mensagem aqui..." />
      <button className="botaoComIcone" onClick={handlePrepararMensagem}>
        Preparar Mensagem
      </button>
    </div>
  );
}
