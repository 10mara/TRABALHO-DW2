import Mascara from "./Mascara"
import Mensagem from "./Mensagem"
import Link from "./Link"
import { useState } from "react"
import "./styles/Gerador.css"

export default function Gerador(){

    const [telefone, setTelefone] = useState("");

    return(
        <div className="boxGrd">

            <div className="header">
                <h1>Gerador de Links</h1>
            </div>

            <div>
                <h2>Número do WhatsApp</h2>
                <Mascara value={telefone} onChange={setTelefone} />
            </div>

            <div className="mensagem">
                <h2>Mensagem(opcional)</h2>
                <input type="text" placeholder="Digite sua mensagem aqui..."/>
            </div>
            <Mensagem telefone={telefone}/>

            <div className="linkGerado">
                <h2>Link Gerado:</h2>
                <div className="copiarLink">
                    <p className="link">https://</p>
                     <Link/>
                </div>
                 <button className="botaoComIcone">Abrir Whatsapp</button>
            </div>
        </div>
    )
}