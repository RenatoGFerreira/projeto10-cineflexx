import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SubCorpo({ img }) {
    return (
        <FilmeCapa>
            <Link to={`/filme/${img.id}`}>
                <img src={img.posterURL} alt={`capa do filme ${img.title} `} />
            </Link>
        </FilmeCapa>
    )
}


const FilmeCapa = styled.div`
    border: 1px solid #fff;
    background-color: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    width: 145px;
    height: 209px;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 129px;
        height: 193px;
    }
`
