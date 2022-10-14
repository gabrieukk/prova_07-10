import { Link } from "react-router-dom"
import './index.scss'


export default function Home(){
    return(
            <div className="page">        
                <h1>PROVA - O7/10 😀 </h1>
                <div className="links">
                    <p className="link"><Link to='/acai'> Compre seu açaí</Link></p>
                    <p className="link"> <Link to='/sorveteria'> Compre seu sorvete </Link> </p>
                    <p className="link"> <Link to='/signo'> Verifique se seu signo é de Libras </Link> </p>
                    <p className="link"><Link to='/salario'>Calcule seu salário</Link></p>
                    <p className="link"><Link to='/abastecimento'>Calcule quantas paradas</Link></p>
                    <p className="link"><Link to='/febre'>Confira se você está morrendo</Link></p>
                    <p className="link"><Link to='/ingresso'>Valor do ingresso</Link></p>
                    <p className="link"><Link to='/orcamento'>Situação do orçamento</Link></p>
                </div>
            </div>    
    )
} 