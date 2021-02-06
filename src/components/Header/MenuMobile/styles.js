import styled from "styled-components";

const Navegation = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  width: calc(100% - 30px);
  max-width: 250px;
  margin: 0 auto;
  padding: 8px;
  display: block;

  background-color: var(--color-text-white-primary);
  box-shadow: -1px 1px 15px -8px var(--color-text-blue-secondary);
  border-radius: 20px;

  animation: openMenu 300ms ease-out;
  @keyframes openMenu {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const Lista = styled.ul`
    list-style: none;
`

const Item = styled.li`
    width: 100%;
    text-align: center;

    &:nth-child(4) {
        border-top: 1px solid #dddddd;
        margin-top: 20px;
        opacity: 0.8;            
    }
`

const Link = styled.a`
    display: block;
    padding: 10px;

    font-family: 'Barlow Condensed', 'Barlow';
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-text-blue);

    &:hover {
        text-decoration: underline;
    }
`

export {
    Navegation,
    Lista,
    Item,
    Link
}