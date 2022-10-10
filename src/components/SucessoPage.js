import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SucessoPage() {
    return (
        <ScreenContainer>
            <div>
                <h1>Pedido Feito com Sucesso!</h1>
            </div>
            <FilmeSessao>
                <h2>Filme e Sessão</h2>
                <p>Enola Holmes</p>
                <p>24/06/2021</p>
            </FilmeSessao>
            <Ingressos>
                <h2>Ingressos</h2>
                <p>Assento: 15</p>
                <p>Assento: 16</p>
            </Ingressos>
            <Comprador>
                <h2>Comprador</h2>
                <p>Nome: João da SIlva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </Comprador>
            <Finalizacao>
                <Link to={"/"}>
                    <button>Voltar para Home</button>
                </Link>
            </Finalizacao>
        </ScreenContainer>

    )
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    
    h1{
        line-height: 5;
        font-size: 24px;
        font-weight: 700;
        color: #247a6b;
    }
    h2{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 5px;
    }

`

const FilmeSessao = styled.div`
margin-bottom: 20px;
width: 80%;
`
const Ingressos = styled.div`
margin-bottom: 20px;
width: 80%;
`
const Comprador = styled.div`
margin-bottom: 20px;
width: 80%;
`
const Finalizacao = styled.div`
margin-bottom: 20px;
    button{
            background-color: #E8833A;
            color: #fff;
            height: 43px;
            font-size: 18px;
            border-radius: 3px;
            margin-right: 10px ;
        }
`