import axios from "axios";
import styled, {keyframes} from "styled-components";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import Botao from "../../components/Common/Botao";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const animacaoAcessoNegado = keyframes`
    0%{opacity: 0; height: auto; width:auto; font-size: 2rem;}
    50%{opacity: 1; height: auto; width:auto; font-size: 2rem;}
    100%{opacity: 0; height: auto; width:auto; font-size: 2rem;}
`

const SecaoLogin = styled.section`
    padding: 5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;

    h2{
        font-family: "PoppinsLight";
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .obs{
        display: block;
        max-width: 300px;
        word-wrap: wrap;
        font-size: .7rem;
        font-weight: 600;
        margin-top: 1rem;
    }

    .acesso-negado{
        animation: ${animacaoAcessoNegado} 4s ;
        opacity: 0;
        width: 1px;
        height: 1px;
        font-size: 1px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: red;
        color: #FFFFFF;
        padding: 1rem;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label{
        display:block;
        font-weight: 600;
    }

    input{
        outline: none;
        width: 300px;
        padding: .5rem;
        border-radius: 10px;
        margin-top: 10px;
    }

    .icone-olho{
        cursor: pointer;
        position: absolute;
        right: 8px;
        bottom: 8px;
    }
`

const Div = styled.div`
    position: relative;
`

const Login = () => {

    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [tipoDeInput, setTipoDeInput] = useState('password');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [acessoNegado, setAcessoNegado] = useState(false);
    const {autenticado, setAutenticado} = useContext(AuthContext);
    const navegacao = useNavigate();

    const verificaLogin = async () => {
        try{
            const resposta = await axios.post('https://blognews-eight.vercel.app/login', {
                nome,
                senha
            });
            localStorage.setItem('token', resposta.data.token);
        }catch(erro){
            console.log("Erro no login", erro);
            setAcessoNegado(true);
        }
    }

    const fazerLogin = (e)=> {
        setAcessoNegado(false);
        e.preventDefault();
        verificaLogin();
        setAutenticado(true);
        navegacao('/admin');
    }

    function mostraOuOcultaSenha() {
        setSenhaVisivel(!senhaVisivel);
        tipoDeInput === 'password' ? setTipoDeInput('text') : setTipoDeInput('password');
    }

    return(
        <SecaoLogin>
                <div>
                    <h2>Login</h2>
                    <Form onSubmit={(e) => fazerLogin(e)}>
                        <Div>
                            <label htmlFor="usuario">Usuário:</label>
                            <input id="usuario" required type="text" onChange={(e)=> setNome(e.target.value)}/>
                        </Div>
                        <Div>
                            <label htmlFor="senha">Senha:</label>
                            <input id="senha" required type={tipoDeInput} onChange={(e)=> setSenha(e.target.value)} />
                            {senhaVisivel ? 
                                <IoEyeOffOutline onClick={mostraOuOcultaSenha} className="icone-olho" size={20} /> :                           
                                <IoEyeOutline onClick={mostraOuOcultaSenha} className="icone-olho" size={20} /> }
                        </Div>
                        <Botao type="submit">Entrar</Botao>
                    </Form>
                    {acessoNegado ? <span className="acesso-negado">Vai tentar hakear meu projeto mesmo? hahaha</span> : ''}
                    <span className="obs">
                        Obs: Esse login é apenas para inclusão de novos posts feitos por mim: Matheus. Ainda não existe uma opção para cadastrar novos usuários.
                    </span>
                </div>
        </SecaoLogin>
    )
}
export default Login;