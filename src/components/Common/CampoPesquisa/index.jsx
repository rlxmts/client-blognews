import styled from "styled-components";

const Input = styled.input`
    border-radius: 5px;
    border: 1px solid #DCDCDC;
    padding: .5rem 1rem .5rem 2rem ;
    width: 300px;
    margin: 0 auto;
    outline: none;
    background-color: transparent;
    color: #FFFFFF;

    &::placeholder{ 
        color: #DCDCDC;
    }
    &::-webkit-input-placeholder{
        color: #DCDCDC;
    }
    &:-moz-placeholder{
        color: #DCDCDC;
    }
    &::-moz-placeholder{
        color: #DCDCDC;
    }
    &:-ms-input-placeholder{
        color: #DCDCDC;
    }
`

const Div = styled.div`

    position: relative;

    &::before{
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background-image: url("./public/img/search.svg");
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
    }
`

const CampoPesquisa = () => {
    return(
        <Div>
            <label className="esconder" htmlFor="pesquisa">Pesquisar</label>
            <Input id="pesquisa" placeholder="Pesquisar" />
        </Div>
    )
}

export default CampoPesquisa;