import axios from "axios";
import { useState, useEffect } from "react";

export const useBuscaPost = ()=> {

    const [posts, setPosts] = useState([]);
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(()=> {
        async function buscaApi(){
            try{
                const apiConvertida = await axios.get("http://localhost:3000/posts");
                setPosts(apiConvertida.data);
            }catch(error){
                setErro(error);
            }finally{
                setCarregando(false);
            }
        }
        buscaApi();
    }, []);

    return {posts, setPosts, erro, carregando};
};