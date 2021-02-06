import React from "react";
import { Navegation, Lista, Item, Link } from "./styles";

const MenuDesktop = (props) => {
  return (
    <Navegation>
      <Lista>
        <Item>
          <Link>Product</Link>
        </Item>
        <Item>
          <Link>Features</Link>
        </Item>
        <Item>
          <Link>Pricing</Link>
        </Item>
        <Item>
          <Link>Login</Link>
        </Item>
      </Lista>
    </Navegation>
  );
};

export default MenuDesktop;
