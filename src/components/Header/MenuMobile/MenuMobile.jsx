import React from 'react';
import { Navegation, Lista, Item, Link } from './styles';


const MenuMobile = (props) => {

    return (
      <Navegation>
        <Lista>
          <Item>
            <Link href="#">Product</Link>
          </Item>
          <Item>
            <Link href="#">FeLinktures</Link>
          </Item>
          <Item>
            <Link href="#">Pricing</Link>
          </Item>
          <Item>
            <Link href="#">Login</Link>
          </Item>
        </Lista>
      </Navegation>
    );
}

export default MenuMobile;