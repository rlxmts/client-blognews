import styled from "styled-components";
import { useBuscaPost } from "../../../Hooks/useBuscaPosts.js";
import { Link } from "react-router-dom";

const Section = styled.section`
    padding: 2rem 0;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    gap: 1rem;
    padding: 2rem 0;
`
const Li = styled.li`
    padding: 1rem;
    border: 1px solid ;
    border-radius: 10px;
`

const TituloPost = styled.h3`
    font-size: .9rem ;
    font-weight: 600;
    font-family: 'PoppinsLight';
`
const PreviaTexto = styled.span`
    font-size: .7rem;
    font-weight: 600;
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
    margin-top: 5px;
`

const GaleriaPosts = ()=> {    

    const {posts, erro, carregando} = useBuscaPost();

    if(carregando)return <p>Carregando...</p>
    if(erro) return <p className="msg-erro">Parece que houve um erro ao carregar o conteúdo: {erro.message}</p>
    
    return(
        <Section>
                <Ul>
                    {posts.map( item => {
                        return(
                            <Li className="item-post" key={item._id}>
                                <Link to={`post/${item._id}`}>
                                    <TituloPost>{item.titulo}</TituloPost>
                                    <PreviaTexto>{item.texto}</PreviaTexto>
                                </Link>
                            </Li>
                        )
                    })}
                </Ul>
        </Section>
    )
}

export default GaleriaPosts;