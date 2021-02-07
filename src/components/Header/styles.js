import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  width: 100%;
  z-index: 3;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(LogoIcon)`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

const IconMenuMobile = styled.div`
  width: 24px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.openMenu ? `url(${Close})` : `url(${Hamburger})`};
  background-repeat: no-repeat;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export { Container, Wrapper, Logo, IconMenuMobile };
