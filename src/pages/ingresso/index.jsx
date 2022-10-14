
import { useState } from "react";
import ingresso from "../../services/ingresso";



export default function CalcularIngresso(){

    const[inteira, setInteira] = useState(0);
    const[meia, setMeia] = useState(0);
    const[diaSemana, setSemana] = useState("---");
    const[nacional, setNacional] = useState(false);
    const[resp, setResp] = useState(0);

    function confirmarIngresso(){
        const resp = ingresso(inteira,meia,diaSemana,nacional);
        setResp(resp)
    }

    return(

        <>
            <main>
            <section>
                    <h1>INGRESSO</h1>
                    <div>
                        <label>Quantidade de inteiras</label>
                        <input type="number" value={inteira} onChange={e => setInteira(Number(e.target.value))}/>
                    </div>
                    <div>
                        <label>Quantidade de meia</label>
                        <input type="number" value={meia} onChange={e => setMeia(Number(e.target.value))}/>
                    </div> 
                    <div>
                        <label>Informe a nacionalidade do filme</label>

                        <input type="checkbox" checked={nacional} onChange={e => setNacional(e.target.checked)}/>
                    </div>
                    <div>
                        <label>Informe o dia da semana</label>
                        <input type="text" value={diaSemana} onChange={e => setSemana(e.target.value)}/>
                    </div>
                   
                    <div>
                        <button onClick={confirmarIngresso}>Calcular</button>
                    </div>
                    <div>
                        <p>O total a se pagar é R${resp}</p>
                    </div>
                </section>
            </main>
        </>

    )
}