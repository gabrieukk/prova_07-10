import './index.scss'

import sitOrcamento from '../../services/orcamentoFamiliarFunction';
import { useState } from "react";

export default function OrcamentoFam(){

    const[ ganhos, setGanhos] = useState(0);
    const[ gastos, setGastos] = useState(0);
    const[ resul, setResul] = useState(0);

    function calcularOrcamento() {
        const resp = sitOrcamento(ganhos, gastos);
        setResul(resp);
    }

    return(
        <>
            <main>
                <section>
                    <h1>Orçamento familiar</h1>
                    <div>
                        <label>Informe a quantidade dos ganhos:</label>
                        <input type="number" value={ganhos} onChange={e => setGanhos(e.target.value)}/>
                    </div>
                    <div>
                        <label>Informe a quantidade dos gastos::</label>
                        <input type="number" value={gastos} onChange={e => setGastos(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={calcularOrcamento}>ok</button>
                    </div>
                    <div>
                        {resul}
                    </div>
                </section>
            </main>
        </>
    )
}