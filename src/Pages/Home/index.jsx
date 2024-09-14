import styled from "styled-components";
import GaleriaPosts from "../../components/Sections/GaleriaPosts";
import Container from "../../components/Common/Container";

const Section = styled.section`
    padding: 5rem 0;
`

const H2 = styled.h2`
    font-weight: 500;
    text-align: center;
`

const Home = ()=> {
    return(
        <Section>         
            <Container>
                <H2> Posts recentes:</H2>
                <GaleriaPosts />
            </Container> 
        </Section>
    )
}
export default Home;