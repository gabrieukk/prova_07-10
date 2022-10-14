import './index.scss';
import { useState } from 'react';
import SalarioLiquido from '../../services/salarioFunction';

export default function Salario (){

    const [salario, setSalario]=useState(0);
    const [bonus, setBonus]=useState(0);
    const [desc, setDesc]=useState(0);
    const [resp, setResp]=useState(0);

    function calcularSalario(){
        const resposta =  SalarioLiquido(salario,bonus,desc);
        setResp(resposta);
    }


    return(
        <main>
            <h1>Salário líquido</h1>
            <p>Salário</p>
            <input type="number" value ={salario} onChange={e => setSalario(e.target.value)}/>
            <p>Bonus</p>
            <input type="number" value ={bonus} onChange={e => setBonus(e.target.value)}/>
            <p>Desconto</p>
            <input type="number" value ={desc} onChange={e => setDesc(e.target.value)}/>
            <button onClick={calcularSalario}>OK</button>

            <div>
               <p></p>{resp}
            </div>
        </main>
    )
}