import React, { useState } from "react";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import {
  Container,
  Wrapper,
  Logo,
  IconMenuMobile
} from "./styles.js";

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClickIcon = () => setOpenMenu(!openMenu);

  return (
    <Container>
      <Wrapper>
        <Logo />
        <IconMenuMobile onClick={handleClickIcon} openMenu={openMenu} />
        <MenuDesktop />
        {openMenu && <MenuMobile />}
      </Wrapper>
    </Container>
  );
};

export default Header;
