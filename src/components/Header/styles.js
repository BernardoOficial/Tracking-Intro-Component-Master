import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";

const Container = styled.header`
  padding: 30px;
  width: 100%;
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
