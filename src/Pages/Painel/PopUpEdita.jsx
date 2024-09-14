import styled from "styled-components";
import Container from "../../components/Common/Container";
import Botao from "../../components/Common/Botao";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useEditaPosts } from "../../Hooks/useEditaPosts";

const ModalEditar = styled.div`
    width: 100% ;
    max-width: 600px;
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 100px #00000070;
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    
    .container-modal-editar{
        padding: 1rem 1rem 2rem 1rem;
        border-radius: 20px;
    }
`

const FormEditar = styled.form`
    display: flex;
    flex-direction: column;

    input, textarea{
        margin: .5rem 0 1rem 0;
        outline: none;
        padding: .5rem;
        border-radius: 10px;
        border: 1px solid ;
    }
    
    .msg-erro{
        margin-top: 1rem;
        color: red;
        font-weight: 600;
        font-size: .8rem;
    }
    
    .msg-erro{
        margin-top: 1rem;
        color: #000000;
        font-weight: 600;
        font-size: .8rem;
    }
` 
const DivHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    h4{
        font-weight: 600;
    }

    .icone-fechar-modal-editar{
        cursor: pointer;
    }
`

const PopUpEdita = ({postTitulo, postTexto, postImagem, aoClicarFechar, postId})=> {

    const [titulo, setTitulo] = useState(postTitulo);
    const [texto, setTexto] = useState(postTexto);
    const [imagem, setImagem] = useState(postImagem);

    const alterarTitulo = (e)=>{
        setTitulo(e.target.value)
    }
    
    const alterarTexto = (e)=>{
        setTexto(e.target.value)
    }
    
    const alterarImagem = (e)=>{
        setImagem(e.target.value)
    }

    const {editaPost, erro, carregando } = useEditaPosts();


    const aoSubmeter = (e)=> {
        e.preventDefault();
        editaPost(postId, titulo, texto, imagem);
        setTitulo('');
        setTexto('');
        setImagem('');
    }

    return(
        <ModalEditar>
            <Container className="container-modal-editar">
                <DivHeader>
                    <h4>Edite seu post:</h4>
                    <IoMdClose 
                        size={30} 
                        className="icone-fechar-modal-editar"
                        onClick={aoClicarFechar}
                    />
                </DivHeader>
                <FormEditar onSubmit={(e)=> aoSubmeter(e)}>
                    <label htmlFor="postTitulo">Titulo:</label>
                    <input 
                        value={titulo} 
                        id="postTitulo" 
                        onChange={(e) => alterarTitulo(e)}
                    />
                    <label>Texto:</label>
                    <textarea 
                        rows={8} 
                        value={texto} 
                        id="postTexto"
                        onChange={(e) => alterarTexto(e)}
                    />
                    <label>Imagem</label>
                    <input 
                        value={imagem ? imagem : ''} 
                        onChange={(e) => alterarImagem(e)}
                    />
                    <Botao>Salvar</Botao>                    
                    {carregando ?<p className="msg-carregando"> Carregando...</p> : ''}
                    {erro ?<p className="msg-erro"> Parece que houve um erro: {erro.message}</p> : ''}
                </FormEditar>
            </Container>
        </ModalEditar>
    )
}

export default PopUpEdita;