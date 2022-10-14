import './index.scss'

import acai from "../../services/acaiFunction"
import { useState } from "react";

export default function Acai(){

    const [qtdPeq, setQtdPeq] = useState(0)
    const [qtdMed, setQtdMed] = useState(0)
    const [qtdGra, setQtdGra] = useState(0)
    const [Desc, setVlDesc] = useState(0)
    const [Final, setVlFinal] = useState(0)

    async function calcularTotal(){
        const resposta = await acai(qtdPeq,qtdMed,qtdGra,Desc);
        setVlFinal(resposta);
    }

    return(
        <>
        <div className="page flexbox-center">
             <section className="card flexbox-center">
                <div>
                    <h1>COMPRE SEU AÇAÍZINHO</h1>
                        <div>
                            <label>Digite a quantidade de açaís pequenos:</label>
                            <input type="number"
                            value={qtdPeq} onChange={e => setQtdPeq(e.target.value)}/>
                        </div>

                        <div>
                            <label>Digite a quantidade de açaís médios:</label>
                            <input type="number"
                            value={qtdMed} onChange={e => setQtdMed(e.target.value)}/>
                        </div>

                        <div>
                            <label>Digite a quantidade de açaís grandes:</label>
                            <input type="number"
                            value={qtdGra} onChange={e => setQtdGra(e.target.value)}/>
                        </div>

                        <div>
                            <label>Digite qual o valor de desconto:</label>
                            <input type="number"
                            value={Desc} onChange={e => setVlDesc(e.target.value)}/>
                        </div>
                        </div>
                        
                        <div>
                            <button onClick={calcularTotal}>Finalizar</button> 
                        </div>

                        <div>
                            {Final}
                        </div>
            </section>
        </div>

        </>
    )
}