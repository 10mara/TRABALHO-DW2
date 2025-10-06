import "./styles/Agenda.css";
import agendaIcon from "./imgs/agenda.png";
import { useState } from "react";
import salvarIcon from "./imgs/salvar.png";
import Mascara from "./Mascara"

export default function Agenda({ setTelefoneSelecionado }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [contatos, setContatos] = useState([]);

  const salvarContato = () => {
    if (!nome || !numero) return;
    setContatos([...contatos, { nome, numero }]);
    setNome("");
    setNumero("");
  };

  const deletarContato = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };

  const editarContato = (index) => {
    const novoNome = prompt("Novo nome:", contatos[index].nome);
    const novoNumero = prompt("Novo número:", contatos[index].numero);
    if (novoNome && novoNumero) {
      const novosContatos = [...contatos];
      novosContatos[index] = { nome: novoNome, numero: novoNumero };
      setContatos(novosContatos);
    }
  };

  const enviarMensagem = (numero) => {
    setTelefoneSelecionado(numero.replace(/\D/g, ""));
  };

  return (
    <div className="boxAgd">
      <div className="header">
        <img src={agendaIcon} alt="icone" width={30} height={30} />
        <h1>Agenda de Contatos</h1>
      </div>

      <div className="box1">
        <div className="nome">
          <h2>Nome</h2>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="numero">
          <h2>Número</h2>
          {/* <input type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} /> */}
          <Mascara value={numero} onChange={setNumero}/>
        </div>
      </div>

      <div className="botaoSalvar">
        <button className="botaoComIcone" onClick={salvarContato}>
            <img src={salvarIcon} alt="" width={15}height={15}/>
            Salvar na Agenda
            </button>
      </div>

      <div className="box2">
        <h2>Seus contatos</h2>
        <div className="agenda">
          {contatos.map((contato, index) => (
            <div className="contato" key={index}>
              <h3>{contato.nome}</h3>
              <p>{contato.numero}</p>
              <div className="contato-buttons">
                <button onClick={() => enviarMensagem(contato.numero)}>Mensagem</button>
                <button onClick={() => editarContato(index)}>Editar</button>
                <button onClick={() => deletarContato(index)}>Deletar</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
