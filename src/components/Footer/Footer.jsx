import React from "react";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        {" "}
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/bernardooficial" target="_blank">BernardoOficial</a>.
    </Container>
  );
};

export default Footer;
