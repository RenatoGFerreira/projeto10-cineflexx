import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SessaoPage() {
    return (
        <ScreenContainer>
            <div>
                <h1>Selecione o(s) assento(s) </h1>
            </div>
            <Poltronas>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
                <button>01</button>
            </Poltronas>
            <OpcoesPoltronas>
                <Separa>
                    <button></button>
                    <span>Selecionado</span>
                </Separa>
                <Separa>
                    <button></button>
                    <span>Disponível</span>
                </Separa>
                <Separa>
                    <button></button>
                    <span>Indisponível</span>
                </Separa>
            </OpcoesPoltronas>
            <InputsDados>
                <p>Nome do Comprador</p>
                <input type="text" placeholder="Digite seu nome" />
                <p>CPF do comprador</p>
                <input type="number" placeholder="CPF" />
            </InputsDados>
            <FinalizaEScolha>
                <Link to={"/sucesso"}>
                <button>Reservar Assentos</button>
                </Link>
            </FinalizaEScolha>
            <Rodape>
                <FilmeSelecionado>
                    <img src={"https://lojasaraiva.vteximg.com.br/arquivos/ids/12710394/1006692973.jpg?v=637154390275970000"} alt="capa do filme" />
                </FilmeSelecionado>
                <Descricao>
                    <span>Enola Holmes</span>
                    <span>Quinta-Feira - 17:00</span>
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
const Poltronas = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    button{
        width: 25px;
        height: 25px;
        border-radius: 15px;
        margin: 5px 2px;
        font-size: 11px;
    }

`
const OpcoesPoltronas = styled.div`

    width: 70%;
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;
    button{
        width: 25px;
        height: 25px;
        border-radius: 15px;
        margin: 5px 2px;
        font-size: 11px;
    }

`
const Separa = styled.div`
    text-align: center;
`
const InputsDados = styled.div`
    margin: 10px;
`
const FinalizaEScolha = styled.div`
button{
        background-color: #E8833A;
        color: #fff;
        height: 43px;
        font-size: 18px;
        border-radius: 3px;
        margin-right: 10px ;
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