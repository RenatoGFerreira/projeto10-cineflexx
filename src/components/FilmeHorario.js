import { Link } from "react-router-dom"
import styled from "styled-components"
import SessaoPage from "./SessaoPage"

export default function FilmeHorario() {

    return (
        <FilmeHorariosty>
            <h2>domingo - 21/03/2021</h2>
            <Link to={`/sessao/${1}`}>
                    <button>17:00</button>
            </Link>

        </FilmeHorariosty>
    )
}

const FilmeHorariosty = styled.div`
    width: 80%;
    margin-bottom: 20px;


    h2{
        margin-bottom: 10px;
    }

    button{
        background-color: #E8833A;
        color: #fff;
        width: 83px;
        height: 43px;
        font-size: 18px;
        border-radius: 3px;
        margin-right: 10px ;
    }

`