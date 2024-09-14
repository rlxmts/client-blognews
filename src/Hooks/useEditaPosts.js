import axios from "axios";
import { useState } from "react";

export const useEditaPosts = ()=> {

    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(false);
    
    const editaPost = async (id, titulo, texto, imagem)=> {

        console.log(titulo, texto, imagem)

        try{
            setCarregando(true);
                await axios.put(`https://server-blognews.vercel.app/posts/${id}`, {
                titulo: titulo,
                texto: texto,
                imagem: imagem
            });
        }catch(erro){
            setErro(erro);
        }finally{
            setCarregando(false);
        }
    }

    return{ erro, carregando, editaPost };
}