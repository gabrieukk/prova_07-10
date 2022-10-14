import { useState } from "react";
import Abastecimento from "../../services/abastecimentoFunction";
import './index.scss'

export default function PageAbastecimento(){

    const[capacidade, setCapacidade] = useState(0);
    const[consumo, setConsumo] = useState(0);
    const[distancia, setDistancia] = useState(0);
    const[resposta, setResposta] = useState(0);

    function calcularTotal(){
        const resp = Abastecimento(capacidade,consumo,distancia);
        setResposta(resp)
    }


    return(
        <>
            <main>
                <section>
                    <h1>ABASTECIMENTO</h1>
                    <div>
                        <label>Digite a capacidade:</label>
                        <input type="number" value={capacidade} onChange={e => setCapacidade(e.target.value)}/>
                    </div>
                    <div>
                        <label>Digite o consumo:</label>
                        <input type="number" value={consumo} onChange={e => setConsumo(e.target.value)}/>
                    </div>
                    <div>
                        <label>Digite a distância:</label>
                        <input type="number" value={distancia} onChange={e => setDistancia(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={calcularTotal}>Calcular</button>
                    </div>
                    <div>
                        <p>Você precisará de {resposta} paradas para abastecer.</p>
                    </div>
                </section>
            </main>
        </>
    )
}