import "./styles/Agenda.css";
import agendaIcon from "./imgs/agenda.png";
import salvarIcon from "./imgs/salvar.png";
import Mascara from "./Mascara";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; 

export default function Agenda({ setTelefoneSelecionado }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [contatos, setContatos] = useState([]);
  const [contatoEditando, setContatoEditando] = useState(null);


  // Buscar contatos do Supabase
  useEffect(() => {
    const fetchContatos = async () => {
      const { data, error } = await supabase.from("contato").select("*");
      if (!error) setContatos(data);
    };
    fetchContatos();
  }, []);



  const salvarContato = async () => {
    if (!nome || !numero) return;
  
    if (contatoEditando) {
      // Atualizar contato
      const { error } = await supabase
        .from("contato")
        .update({ nome, numero })
        .eq("id", contatoEditando.id);
  
      if (!error) {
        // Atualiza localmente na lista contatos
        setContatos((prev) =>
          prev.map((c) => (c.id === contatoEditando.id ? { ...c, nome, numero } : c))
        );
        setContatoEditando(null);
        setNome("");
        setNumero("");
      } else {
        console.error("Erro ao atualizar contato:", error.message);
      }
    } else {
      // Inserir novo contato
      const { data, error } = await supabase
        .from("contato")
        .insert([{ nome, numero }]);
  
      if (!error && data && data.length > 0) {
        setContatos((prev) => [...prev, data[0]]);
        setNome("");
        setNumero("");
      } else if (error) {
        console.error("Erro ao salvar contato:", error.message);
      }
    }
  };
  
  
  

  const deletarContato = async (id) => {
    const { error } = await supabase.from("contato").delete().eq("id", id);
    if (!error) {
      setContatos(contatos.filter((c) => c.id !== id));
    }
  };


  const editarContato = (id) => {
    const contato = contatos.find(c => c.id === id);
    if (contato) {
      setContatoEditando(contato);
      setNome(contato.nome);
      setNumero(contato.numero);
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
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="numero">
          <h2>Número</h2>
          <Mascara value={numero} onChange={setNumero} />
        </div>
      </div>

      <div className="botaoSalvar">
        <button className="botaoComIcone" onClick={salvarContato}>
          <img src={salvarIcon} alt="" width={15} height={15} />
          Salvar na Agenda
        </button>
      </div>

      <div className="box2">
        <h2>Seus contatos</h2>
        <div className="agenda">
          {contatos.map((contato) => (
            <div className="contato" key={contato.id}>
              <h3>{contato.nome}</h3>
              <p>{contato.numero}</p>
              <div className="contato-buttons">
                <button onClick={() => enviarMensagem(contato.numero)}>
                  Mensagem
                </button>
                <button onClick={() => editarContato(contato.id)}>Editar</button>
                <button onClick={() => deletarContato(contato.id)}>
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
