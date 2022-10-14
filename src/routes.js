import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Acai from './pages/acai';
import Sorveteria from './pages/sorveteria';
import SignoLibra from './pages/signoLibra';
import Salario from './pages/salario';
import PageAbastecimento from './pages/abastecimento';
import Febre from './pages/temperatura';
import Ingresso from './pages/ingresso';
import OrcamentoFam from './pages/orcamentoFam';

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/acai' element={<Acai />} />
                <Route path='/sorveteria' element={<Sorveteria />} />
                <Route path='/signo' element={<SignoLibra />} />
                <Route path='/salario' element={<Salario/>}/>
                <Route path='/abastecimento' element={<PageAbastecimento/>}/>
                <Route path='/febre' element={<Febre/>}/>
                <Route path='/ingresso' element={<Ingresso/>}/>
                <Route path='/orcamento' element={<OrcamentoFam/>}/>
            </Routes>
        </BrowserRouter>
    )
}