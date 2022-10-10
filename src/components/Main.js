import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FilmesCapas from "./FilmesCapas"
import styled from "styled-components"
import loading from "./css/pulse.gif"


export default function Main() {

    const [imagens, setImagens] = useState([])


    useEffect(() => {

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)

        promise.then((res) => {
            setImagens(res.data)
        })
        promise.catch((err) => {
            console.log(err.res.data)
        })

    }, [])

    if (imagens.length === 0) {
        return (
            <TelaEspera>
                <img src={loading} alt="loading" />
            </TelaEspera>
        )
    }

    return (
        <ScreenContainer>
            <div>
                <h1>Selecione o filme</h1>
            </div>
            <Link to="/filme">
                <FilmesEmCartaz>
                    {imagens.map((img) => <FilmesCapas key={img.id} img={img} />)}
                </FilmesEmCartaz>
            </Link>
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

const FilmesEmCartaz = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;

`

const TelaEspera = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`