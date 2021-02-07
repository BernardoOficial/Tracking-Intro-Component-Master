import styled from "styled-components";

const Container = styled.footer`
  margin: 30px 0 20px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  font-family: "Barlow", "Barlow Condensed", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--color-text-blue);
  padding: 0 30px;

  > a {
    color: var(--color-text-blue);
  }

  @media (min-width: 1200px) {
    margin: 100px 0 20px;
  }
`;

export {
    Container
}