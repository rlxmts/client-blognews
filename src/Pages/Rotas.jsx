import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import EstiloGlobal from "../assets/EstiloGlobal";
import Cabecalho from "../components/Layout/Cabecalho";
import Rodape from "../components/Layout/Rodape";
import Login from "./Login";
import Painel from "./Painel";
import NovoPost from "./NovoPost";
import Home from "./Home";
import Post from "./Post";
import { temaClaro, temaEscuro } from "../assets/EstiloGlobal/tema";
import { useContext } from "react";
import { TemaContext, TemaProvider } from "../Context/ThemeContext";
import { AuthProvider } from "../Context/AuthContext";

const App = ()=> {
    return(
        <TemaProvider>
            <AppRotas />
        </TemaProvider>
    )
}

const AppRotas = () => {

    const {tema} = useContext(TemaContext);

    return(
        <StyledThemeProvider theme={ tema === 'light' ? temaClaro : temaEscuro}>
            <EstiloGlobal />
            <BrowserRouter>
            <AuthProvider>
                <Cabecalho />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Painel />} />
                    <Route path="/novo-post" element={<NovoPost />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
                <Rodape />
            </AuthProvider>
            </BrowserRouter>
        </StyledThemeProvider>
    )
}

export default App;