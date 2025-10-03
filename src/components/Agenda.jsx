import "./styles/Agenda.css"
import agendaIcon from "./imgs/agenda.png"
export default function Agenda(){
    return(
        <div className="boxAgd">

            <div className="header">
                <img src={agendaIcon} alt="icone" width={30} height={30}/>
                <h1>Agenda de Contatos</h1>
            </div>

            <div className="box1">
                <div className="nome">
                <h2>Nome</h2>
                <input type="text" placeholder="Nome do contato" />
            </div>
             <div className="numero">
                <h2>Número</h2>
                <input type="text" placeholder="Número"/>
            </div>
            </div>

            <div className="botaoSalvar">
                 <button className="botaoComIcone">Salvar na Agenda </button>
            </div>

            <div className="box2">
                <h2>Seus contatos</h2>
                <div className="agenda">
                    <div className="contato">
                        <p>João</p>
                        <p>Número do contato</p>
                        <button >Mensagem</button>
                        <button>Editar</button>
                        <button>Deletar </button>
                    </div>
                </div>
            </div>
        </div>
    )
}