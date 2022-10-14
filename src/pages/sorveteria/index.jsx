import './index.scss'

import {useState} from 'react';
import sorveteria from '../../services/sorveteriaFunction';

export default function Sorveteria(){

    const [gramas, setGramas] = useState(0);
    const [Total, setTotal] = useState(0);

     function calcularTotal(){
        const resposta =  sorveteria(gramas);
        setTotal(resposta);
    }
    return(
        <>
            <div className="page flexbox-center">
                <section className="card">
                    <h1>Sorvete</h1>
                        <div> 
                            <div> Digite o valor em gramas:</div>
                            <input type="number" value={gramas} onChange={e => setGramas(e.target.value)}/>
                        <div/>
                        <div>
                            <button onClick={calcularTotal}> Concluir Compra</button>
                        </div>
                        <div>
                            {Total}
                        </div>
                        </div>
                </section>
            </div>
        </>
    )
}