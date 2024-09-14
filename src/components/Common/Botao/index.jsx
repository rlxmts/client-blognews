import styled from "styled-components";

const Botao = styled.button`
    padding: .5rem 1rem;
    width: 100%;
    max-width: 300px;
    background-color: #24292f;
    color: #FFFFFF;
    font-family: "PoppinsLight";
    font-size: 1.2rem;
    border-radius: 10px;
    border: 1px solid #00000070;
    cursor: pointer;
    transition: .5s;

    &:hover{
        background-color: #00205b;
    }
`
export default Botao;