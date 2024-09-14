import axios from "axios";
import styled from "styled-components";
import Container from "../../components/Common/Container";
import Botao from "../../components/Common/Botao";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Section = styled.section`
    padding: 5rem 0;
    
    .container-novopost{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    form{
        width:100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    input, textarea{
        outline: none;
        border-radius: 10px;
        width: 100%;
        padding: .5rem;
    }

    label{
        display:block;
    }
`

const NovoPost = () => {

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [imagem, setImagem] = useState('');
    const {autenticado} = useContext(AuthContext);

    const enviarPost = (e) => {
        e.preventDefault();

        axios.post('https://server-blognews.vercel.app/posts', {
            titulo: titulo,
            texto: texto,
            imagem: imagem
        });

        setTitulo('');
        setTexto('');
        setImagem('');
    }

    if(!autenticado){
        return(<p className="acesso-negado">Acesso Negado!</p>)
    }

    return(
        <Section>
            <Container className="container-novopost">
                <Link to="/admin">
                    <Botao>Voltar para Painel Principal</Botao>
                </Link>
                <form onSubmit={(e)=> enviarPost(e)}>
                    <div>
                        <label htmlFor="titulo">Titulo do Artigo</label>
                        <input 
                            value={titulo}
                            onChange={(e)=> setTitulo(e.target.value)}
                            id="titulo" 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="texto">Texto</label>
                        <textarea 
                            value={texto}
                            onChange={(e)=> setTexto(e.target.value)}
                            rows="8" 
                            id="texto"
                        />
                    </div>
                    <div>
                        <label htmlFor="imagem">Imagem</label>
                        <input
                            value={imagem} 
                            onChange={(e)=> setImagem(e.target.value)} 
                            id="imagem"     
                            placeholder="http://..."
                        />
                    </div>
                    <Botao type="submit">Postar</Botao>
                </form>
            </Container>
        </Section>
    )
}

export default NovoPost;