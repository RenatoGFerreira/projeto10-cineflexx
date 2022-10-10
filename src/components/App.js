import GlobalStyle from "./css/GLobalStyle"
import Topo from "./Topo"
import Main from "./Main"
import FilmePage from "./FilmePage"
import SessaoPage from "./SessaoPage"
import SucessoPage from "./SucessoPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"



export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Topo/>

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/filme/:filmeId" element={<FilmePage/>}/>
                <Route path="/sessao/:filmeid" element={<SessaoPage/>}/>
                <Route path="/sucesso" element={<SucessoPage/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}