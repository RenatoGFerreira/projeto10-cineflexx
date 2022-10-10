import styled from "styled-components"

export default function Topo() {
    return (
        <TopoContainer>
            <h1>cineflex</h1>
        </TopoContainer>
    )
}


const TopoContainer = styled.div`
/* Falta colocar a fonte roboto */

    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;

     h1{
        color: #E8833A;
        font-size: 34px ;
        font-weight: 400;
        text-transform: uppercase;
     }
`