import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Prova from "./pages/prova/prova";

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/prova' element={<Prova />} />
            </Routes>
        </BrowserRouter>
    )
}