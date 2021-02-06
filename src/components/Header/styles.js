import styled from 'styled-components'
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";

const Container = styled.header`
    padding: 30px;
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled(LogoIcon)`
    width: 32px;
    height: 32px;
`;

const IconMenuMobile = styled(HamburgerIcon)`
    display: block;
    
    @media (min-width: 1200px) {
        display: none;
    }
`;

export { Container, Wrapper, Logo, IconMenuMobile };