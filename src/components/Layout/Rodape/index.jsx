import styled from "styled-components";
import Container from "../../Common/Container";

const Footer = styled.footer`
    width: 100%;
    padding: 1rem;
    text-align: center;

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`

const LinksRedesSociais = styled.a`
    font-size: .8rem;
    color: #0969da;
    font-weight: 600;
`
const Creditos = styled.span`
    font-size: .8rem;
    font-weight: 600;
`

const Rodape = () => {
    return(
        <Footer>
            <Container>
                <Creditos> Feito por: Matheus Cruz</Creditos>
                <ul>
                    <li><LinksRedesSociais 
                        href="https://github.com/rlxmts" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >GitHub
                    </LinksRedesSociais></li>
                    <li><LinksRedesSociais 
                        href="https://www.linkedin.com/in/matheusw16/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >Linkedin
                    </LinksRedesSociais></li>
                    <li><LinksRedesSociais 
                        href="https://horbiti.vercel.app/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >Portfólio
                    </LinksRedesSociais></li>
                </ul>
            </Container>
        </Footer>
    )
}

export default Rodape;