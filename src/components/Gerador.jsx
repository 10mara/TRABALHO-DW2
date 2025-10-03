import Mascara from "./Mascara"
import Mensagem from "./Mensagem"
import Link from "./Link"
import { useState } from "react"
import "./styles/Gerador.css"
import geradorIcon from "./imgs/gerador.png"

export default function Gerador(){

    const [telefone, setTelefone] = useState("");

    return(
        <div className="boxGrd">

            <div className="header">
                <img src={geradorIcon} alt="icone" width={30} height={30} />
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