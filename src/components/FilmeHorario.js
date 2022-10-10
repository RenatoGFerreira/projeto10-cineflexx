import styled from "styled-components"

export default function FilmeHorario({item}){

    
    return(
        <FilmeHorariosty>
            <h2>Quinta-Feira - 24/06/2021</h2>
            <button>15:00</button>
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