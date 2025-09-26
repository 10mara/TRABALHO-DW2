
import "./styles/Gerador.css"
export default function Gerador(){
    return(
        <div className="boxGrd">

            <div className="header">
                <h1>Gerador de Links</h1>
            </div>

            <div>
                <h2>Número do WhatsApp</h2>
                <input type="text" />
            </div>

            <div className="mensagem">
                <h2>Mensagem(opcional)</h2>
                <input type="text" placeholder="Digite sua mensagem aqui..."/>
            </div>
             <button className="botaoComIcone"></button>

            <div className="linkGerado">
                <h2>Link Gerado:</h2>
                <div className="copiarLink">
                    <p className="link">https://</p>
                     <button className="botaoComIcone"></button>
                </div>
                 <button className="botaoComIcone"></button>
            </div>
        </div>
    )
}