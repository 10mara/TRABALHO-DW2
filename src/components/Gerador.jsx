

export default function Gerador(){
    return(
        <div id="container">
            <div className="header">
                <h1>Gerador de Links</h1>
            </div>
            <div>
                <h2>Número do WhatsApp</h2>
                <input type="text" />
            </div>
            <div className="mensagem">
                <h2>Mensagem(opcional)</h2>
                <input type="text" />
            </div>
        </div>
    )
}