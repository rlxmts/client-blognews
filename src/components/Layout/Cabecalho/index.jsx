import styled from "styled-components";
import Container from "../../Common/Container";
import Logo from "../../Common/Logo";
import CampoPesquisa from "../../Common/CampoPesquisa";
import { FaRegMoon } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TemaContext } from "../../../Context/ThemeContext";
import { AuthContext } from "../../../Context/AuthContext";

const Header = styled.header`
    height: 70px;
    background-color: #24292f;
    width: 100%;
    box-shadow: 0px 0px 5px #00000070;
    display: flex;
    align-items: center;
    justify-content: start;

    .container-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: transparent;
    }

    .botao-login{
        color: #FFFFFF;
        font-family: "PoppinsLight";
        font-weight: 500;
        font-size: .9rem;
        background-color: transparent;
    }
`
const Div = styled.div`
    display: flex ;
    gap: 10px;
    align-items: center;
    background-color: transparent;
    .icon-tema{
        background-color: transparent;
        cursor: pointer;
    }
`
const Cabecalho = () => {
    const {tema, trocaTema} = useContext(TemaContext);
    const { autenticado } = useContext(AuthContext);
    const rotaBtLogin = autenticado ? '/admin' : '/login';
    const textoBtLogin = autenticado ? 'Painel' : 'Login';

    return(
        <>
            <Header>
                <Container className="container-header">
                        <Logo />
                        <Div>
                            {/* <CampoPesquisa /> */}
                            {tema === 'light' ? 
                            <FaRegMoon 
                                onClick={trocaTema}
                                className="icon-tema" 
                                size={20} 
                                fill="#FFFFFF"
                            />
                            :
                            <LuSun
                                onClick={trocaTema}
                                className="icon-tema" 
                                size={20} 
                                fill="#FFFFFF" 
                            />
                            }
                            <Link to={rotaBtLogin} className="botao-login">{textoBtLogin}</Link>
                        </Div>
                </Container>
            </Header>
        </>
    )
}

export default Cabecalho;