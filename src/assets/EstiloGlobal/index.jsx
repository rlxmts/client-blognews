import { createGlobalStyle } from "styled-components";
import PoppinsThin from "../Fonts/Poppins/Poppins-Thin.ttf";
import PoppinsLight from "../Fonts/Poppins/Poppins-Light.ttf";
import PoppinsMedium from "../Fonts/Poppins/Poppins-Medium.ttf";
import Montserrat from "../Fonts/Montserrat/Montserrat-VariableFont_wght.ttf";

const EstiloGlobal = createGlobalStyle`

    @font-face {
        font-family: "PoppinsThin";
        src: local('Poppins Thin'), local('PoppinsThin'), url(${PoppinsThin});
    }    
    @font-face {
        font-family: "PoppinsLight";
        src: local('Poppins Light'), local('PoppinsLight'), url(${PoppinsLight});
    }
    @font-face {
        font-family: "PoppinsMedium";
        src: local('Poppins Medium'), local('PoppinsMedium'), url(${PoppinsMedium});
    }
    @font-face {
    font-family: "Montserrat";
    src: local('Montserrat') url(${Montserrat});
    }

    *{
        background-color: ${({ theme }) => theme.fundo};
        padding: 0;
        margin: 0;
        text-decoration: none;
        text-transform: none;
        font-style: normal;
        box-sizing: border-box;
        font-size: 16px;
        color: ${({ theme }) => theme.texto};
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        list-style: none;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    input{
        border: 1px solid ${({ theme }) => theme.borda}; 
    }

    .item-post{
        border: 1px solid ${({ theme }) => theme.borda}; 
    }

    .esconder{
        font-size: 1px;
        color: transparent;
        position: absolute;
        width: 1px;
        height: 1px;
    }

    .msg-erro{
        color: red;
        font-weight: 600;
        margin-top: 1rem;
    }

    .acesso-negado{
        text-align: center;
        width: 100%;
        max-width: 300px;
        margin: 2rem auto;
        font-weight: 600;
    }
`

export default EstiloGlobal;