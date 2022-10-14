import './index.scss'

import { useState } from 'react'
import verificarFebre from '../../services/temperaturaFunction'

export default function Febre(){

        const[temperatura, setTemperatura] = useState(0);
        const[resposta, setResposta] = useState('---');

        function situacaoFebre(){
            const resp = verificarFebre(temperatura);
            setResposta(resp);
        }

        return(
        <>
            <main>
                <section>
                    <h1>Verificar febre</h1>
                    <div>
                        <label>Digite a temperatura:</label>
                        <input type="number" value={temperatura} onChange={e => setTemperatura(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={situacaoFebre}>Calcular</button>
                    </div>
                    <div>
                        {resposta}
                    </div>
                </section>
            </main>
        </>
       )
} 