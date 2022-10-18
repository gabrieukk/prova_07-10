import { useState } from "react";
import retangulo from "../../services/retanguloFunction";

import './index.scss'

export default function RetanguloPage(){
    
    const[base, setBase] = useState(0);
    const[altura, setAltura] = useState(0);
    const[resp, setResp] = useState([]);

    function criarRetangulo(){
        const r = retangulo(base,altura);
        setResp(r);
    }
    
    return(
        <>
            <main>
                <section>
                    <div>
                        <label>BASE:</label>
                        <input type="number" value={base} onChange={e => setBase (Number(e.target.value))} />
                    </div>
                    <div>
                        <label>ALTURA:</label>
                        <input type="number" value={altura} onChange={e => setAltura(Number(e.target.value))} />
                    </div>
                    
                    <div>
                        <button onClick={criarRetangulo}>CRIAR RETÂNGULO</button>
                    </div>

                    <div>
                        {resp.map(item =>
                            <div>
                                {item.map(c => <span> {c} </span>)}
                            </div>
                        )}

                        <hr />

                        {resp.map(item =>
                            <div>
                                {item.map(c => <span className="circ"> &nbsp;</span>)}
                            </div>
                        )}

                    </div>

                </section>
            </main>
        </>
    )
}
