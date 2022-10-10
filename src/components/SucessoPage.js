import styled from "styled-components"

export default function SucessoPage(){
    return(
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
                <button>Voltar para Home</button>
            </Finalizacao>
        </ScreenContainer>

    )
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;

    
    h1{
        line-height: 5;
        font-size: 24px;
        font-weight: 700;
        color: #247a6b;
    }

`

const FilmeSessao = styled.div`
border: 1px solid red;
width: 80%;
`
const Ingressos = styled.div`
border: 1px solid red;
width: 80%;
`
const Comprador = styled.div`
border: 1px solid red;
width: 80%;
`
const Finalizacao = styled.div`
border: 1px solid red;
`