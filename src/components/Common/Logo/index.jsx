import { Link } from "react-router-dom";
import styled from "styled-components"

const H1 = styled.h1`
    color: #FFFFFF;
    font-weight: 400;
    font-family: "PoppinsLight";
    background-color: transparent;
`

const Logo = () => {
    return(
        <Link to="/" style={{backgroundColor: 'transparent'}}>
            <H1>BlogNews</H1>
        </Link>
    )
}

export default Logo;