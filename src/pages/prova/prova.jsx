import { useState } from "react"
import './index.scss'

export default function Prova(){

//açai
    const [qtdPeq, setQtdPeq] = useState(0)
    const [qtdMed, setQtdMed] = useState(0)
    const [qtdGra, setQtdGra] = useState(0)
    const [Desc, setVlDesc] = useState(0)
    const [Final, setVlFinal] = useState(0)
//signo
    const [dia, setDia ] = useState (0);
    const [mes, setMes]  = useState ('');
    const [resul, setResul] = useState (false);
//sorvete
    const [gramas, setGramas] = useState(0);
    const [Total, setTotal] = useState(0);
  

    function acai(){

        if(qtdPeq < 0 || qtdMed < 0 || qtdGra < 0 || Desc < 0 ){
          alert('Valor negativo não é permitido')
        }
      
    
        let resp = (qtdGra * 17.50 + qtdMed * 15.00 + qtdPeq * 13.50) * (Desc / 100 -1) 
    
        resp = Math.abs(resp);

        setVlFinal(resp)
      }
    
      function Signo (){
    
        let resp = false
       
        if (dia <= 0 || mes == Number) {
        throw new Error('Dia ou mês inválido');
       }
    
        if (mes == "setembro" && dia >= 23 && dia <= 30 || 
            mes == "outubro" && dia >= 1 && dia <=22){
              
              resp = true
        }
           setResul(resp)
      }

      function sorveteria(){
     
        let valor = gramas * 3.50;
        
        if(gramas <= 0) {
            return('Peso inválido')

        }
        if(gramas >= 1000){
          valor = Math.round(gramas * 3.00);
        }
        setTotal(valor / 100);
    }
    

    return(
        
        <main className="page">
            <section className="acai">
                <div>
                    <h1>Açaí</h1>
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
                            <button onClick={acai}>Finalizar</button> 
                        </div>

                        <div>
                            {Final}
                        </div>
            </section>

            <section className="box-signo">
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
                        <button onClick={Signo}>Checar se o signo é de Libras </button> 
                    </div>
                    <div> 
                        {resul === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}
                    </div>
            </section>
            
            <section className="box-sorvete">
                <h1>Sorvete</h1>
                    <div> 
                        <div> Digite o valor em gramas:</div>
                        <input type="number" value={gramas} onChange={e => setGramas(e.target.value)}/>
                    <div/>
                    <div>
                        <button onClick={sorveteria}> Concluir Compra</button>
                    </div>
                    <div>
                        {Total}
                    </div>
                    </div>
            </section>
        </main>
            
        
    )
}