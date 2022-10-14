import './index.scss'

import {useState} from 'react';
import Signo from '../../services/signoLibraFunction';

export default function SignoLibra(){

    const [dia, setDia ] = useState (0);
    const [mes, setMes]  = useState ('');
    const [resul, setResul] = useState (false);

    function conferirSigno(){
        const resultado = Signo(dia,mes);
        setResul(resultado);
    }


    return(
        <>
        <div className="page flexbox-center">
             <section className="card">
                <h1>Signo</h1>
                    <div>
                        <div>Digite o mês do seu nascimento:</div>
                        <input type="text" value={mes} onChange={e => setMes(e.target.value)}/>
                    </div>
                    <div>
                        <div>Digite o dia do seu nascimento:</div>
                        <input type="number" value={dia} onChange={e => setDia(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={conferirSigno}>Checar se o signo é de Libras </button> 
                    </div>
                    <div> 
                        {resul === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}
                    </div>
            </section>
       </div>
        </>
    )
}