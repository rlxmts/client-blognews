import axios from "axios";
import { useState } from "react";
import { useBuscaPost } from "./useBuscaPosts";

export const useDeletaPost = () => {
    const {posts, setPosts} = useBuscaPost();
    const [erroDeletar, setErroDeletar] = useState(null);
    const [carregandoDeletar, setCarregandoDeletar] = useState(false);

    const deletaPost = async (idPost)=> {    
        setCarregandoDeletar(true);
        try{
            const novaLista = posts.filter( post => post._id !== idPost);
            await axios.delete(`https://server-blognews.vercel.app/posts/${idPost}`);
            setPosts(novaLista);
        }catch(erro){
            setErroDeletar(erro);
            console.log(erro);
            setPosts(postsAnteriores => [...postsAnteriores, posts.find(post => post._id === idPost)]);
        }finally{
            setCarregandoDeletar(false);
        }
    };

    return{ deletaPost, erroDeletar, carregandoDeletar, posts };
};