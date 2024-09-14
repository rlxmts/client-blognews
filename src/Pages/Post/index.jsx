import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../../components/Common/Container";
import styled from "styled-components";

const SecaoPost = styled.article`
    padding: 5rem 0;

    .container-post{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            max-width: 600px;
        }

        .titulo-post{
            max-width: 600px;
            font-size: 2rem;
            font-family: "PoppinsMedium", sans-serif;
            font-weight: 600;
            margin: 2rem 0 1rem 0;
        }

        p{
           width: 100%;
           max-width: 600px;
           font-weight: 400;
           line-height: 1.5rem;
        }
    }
`

const Post = () => {
    const parametro = useParams(); 
    const [livrofiltrado, setLivroFiltrado] = useState({})
    useEffect(()=> {
        async function buscaLivro(){
            try{
                const livro = await axios.get(`http://localhost:3000/posts/${parametro.id}`);
                setLivroFiltrado(livro.data.postBuscado);
            }catch{
                console.log("erro na busca!")
            }
        }
        buscaLivro();
    },[parametro]);

    return(
        <SecaoPost>  
            <Container className="container-post">
                <img src={livrofiltrado.imagem} />
                <h1 className="titulo-post">{livrofiltrado.titulo}</h1>
                <p>{livrofiltrado.texto}</p>
            </Container>
        </SecaoPost>
    )
}

export default Post;