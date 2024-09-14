import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [autenticado, setAutenticado] = useState(false);
    useEffect(()=> {
        const token = localStorage.getItem('token');
        if(token){
            try{
                axios.get('http://localhost:3000/admin',{
                    headers: {
                        Authorization: token,
                    },
                })
                setAutenticado(true);
            }catch(erro){
                setAutenticado(false);
                console.log("Erro ao autenticar com o token salvo!");
            }
        }else{
            setAutenticado(false);
        }
    }, []);

    return(
        <AuthContext.Provider value={{autenticado, setAutenticado}}>
            {children}
        </AuthContext.Provider>
    )
}