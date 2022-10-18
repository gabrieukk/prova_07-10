import './index.scss'

//functions
import Contar from '../../services/contarFunction'
import { useState } from 'react'

export default function ContarPage(){

    const[ inicio, setInicio ] = useState(0);
    const[ final, setFinal ] = useState(0);
    const[ resultado, setResultado ] = useState(0);

    function calcular(){
        const r = Contar(inicio, final);
        setResultado(r);
    }

    return(
        <>
            <main>
                <section>
                    <div>
                        <label> Insira o número de início:</label>
                        <input type="number" value={inicio} onChange={ e => setInicio(Number(e.target.value))}/>
                    </div>
                    <div>
                        <label> Insira o número do final:</label>
                        <input type="number" value={final} onChange={ e => setFinal(Number(e.target.value))}/>
                    </div>
                    <div>
                        <button onClick={calcular}> Contar </button>
                    </div>
                    <div>
                        {resultado}
                    </div>
                </section>
            </main>
        </>
    )
}