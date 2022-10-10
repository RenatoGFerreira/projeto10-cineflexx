import styled from "styled-components"
import FilmeHorario from "./FilmeHorario"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function FilmePage() {

    const { filmeId } = useParams({})
    const [dataFilme, setDataFilme] = useState({})
    console.log(dataFilme.days)

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`
        const promise = axios.get(URL)

        promise.then((res) => {
            setDataFilme(res.data)
        })

        promise.catch((err) => {
            console.log(err.res.data)
        })
    }, [filmeId])


    return (
        <ScreenContainer>
            <div>
                <h1>Selecione o horário </h1>
            </div>

            <FilmeHorario />

            <Rodape>
                <FilmeSelecionado>
                    <img src={dataFilme.posterURL} alt="descrição do filme" />
                </FilmeSelecionado>
                <Descricao>
                    <span>{dataFilme.title}</span>
                    <span></span>
                </Descricao>
            </Rodape>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    h1{
        line-height: 5;
        font-size: 24px;
    }

`
const Rodape = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #C3CFD9;
    display: flex;
    justify-content: space-around;

`
const FilmeSelecionado = styled.div`
        width: 100px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        img{
            width: 90px;
            height: 140px;
        }
`
const Descricao = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    span{
        font-size: 25px;
        margin: 5px;
    }
`