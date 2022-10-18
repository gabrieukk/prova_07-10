import { useState } from "react";
import Linhas from "../../services/linha";




export default function Linha(){

    const [qtd, setQtd] = useState(0);
    const [resp, setResp]= useState([]);

    function fazerLinha() {
        const r = Linhas(qtd);
        setResp(r);
    }
    
    return(
        <main>
            <div>
                <p>tamanho: </p>
            </div>
            <div>
                <input type='number' value={qtd} onChange = {e => setQtd (Number(e.target.value))}/>
            </div>
            <div>
                <button onClick={fazerLinha}>OK</button>
            </div>
            <div>
                {resp}
            </div>

    </main>
    )
}