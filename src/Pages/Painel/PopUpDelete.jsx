import styled from "styled-components";

const PopUp = styled.div`

    width: 100%;
    height: 100%;
    background-color: #00000070;
    position: absolute;
    top:0;
    left: 0;

    .popup-conteudo{
        width: 300px;
        background-color: #FFFFFF !important;
        color: #000000 !important;
        padding: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        z-index :9999 ;
    }

    span{
        text-transform: uppercase;
        font-size: .7rem;
        font-weight: 600;
        background-color: transparent;
        color: #000000;
    }
    
    .caixa-bts{
        width: 100%;
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1rem;
        background-color: transparent;


        button{
            padding: .5rem 1rem;
            background-color: #00205b !important;
            color: #FFFFFF !important;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            width: 40%;
        }
    }
`

const PopUpDelete = ({aoClicarConfirmar, aoClicarCancelar})=> {
    return(
        <PopUp>
            <div className="popup-conteudo">
                <span>Tem certeza que deseja excluir o post?</span>
                <div className="caixa-bts">
                    <button onClick={aoClicarConfirmar}>SIM</button>
                    <button onClick={aoClicarCancelar} >NÃO</button>
                </div>
            </div>
        </PopUp>
    )
}

export default PopUpDelete;