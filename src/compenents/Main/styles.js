import styled from "styled-components";


export const MainContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 100px;
    width: auto;
    color: #FAFAFA;

    @media (min-width: 1026px){
        flex-wrap: nowrap;
    }
`

export const Barra = styled.div `
    background-image: linear-gradient(to right, #8144a6, #36224f ) ;
    width: 100px;
    height: 10px;
    border-radius: 1rem;
    margin: 40px 0;

`


export const TextContainer = styled.div `
    color: #FAFAFA;
    max-width: 300px;
    font-size: 30px;
    h3{
        font-size: ;
    }
    p{
        margin:20px 0;
        font-size: 20px ;
    }

`

