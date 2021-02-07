import styled from 'styled-components';

const Navegation = styled.nav`
    display: none;

    @media (min-width: 1200px) {
        display: block;
    }
`

const Lista = styled.ul`
    display: flex;
    list-style: none;
`

const Item = styled.li`
    margin: 0 20px;

    :nth-child(4) {
        margin-left: 100px;
        position: relative;
        
        a {
            opacity: 0.6;
        }

        :before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: -60px;
            margin: auto 0;

            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: var(--color-text-blue);
            opacity: 0.6;
        }
    }
`

const Link = styled.a`
  cursor: pointer;
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export {
    Navegation,
    Lista,
    Item,
    Link
}