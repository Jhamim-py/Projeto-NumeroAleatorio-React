import React, {useState} from "react";
import './estilo.css';


function PaginaInicial(){

    //criar a variável de estado numeroAleatorio
    const [numeroAleatorio, setNumeroAleatorio] = useState(10);

    //função para gerar um  novo número aleatório - random()
    function  gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100-1) ) + 1;
        setNumeroAleatorio(novoNumero);
    }

    return(
        <div className="container">
            <h1>Número Aleatório</h1>
            <h2>{numeroAleatorio}</h2>
            <div className="area-botao">
                <label>
                    Click no botão para gerar um novo número
                </label>
                <button onClick={gerarNumero}>
                    Gerar novo número
                </button>
            </div>
        </div>
    );

}
export default PaginaInicial;