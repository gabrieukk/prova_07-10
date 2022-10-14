import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Acai from './pages/acai';
import Sorveteria from './pages/sorveteria';
import SignoLibra from './pages/signoLibra';

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/acai' element={<Acai />} />
                <Route path='/sorveteria' element={<Sorveteria />} />
                <Route path='/signo' element={<SignoLibra />} />
            </Routes>
        </BrowserRouter>
    )
}