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
                <Mascara value={telefone} onChange={setTelefone} />
            </div>

            <div>
                <Mensagem telefone={telefone}/>
            </div>
        </div>
    )
}