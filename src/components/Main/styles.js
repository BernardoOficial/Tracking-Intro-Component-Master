import styled from "styled-components";
import { ReactComponent as Illustration } from "../../assets/images/illustration-devices.svg";

const Container = styled.main`
  margin-top: 40px;
  padding: 30px;
  width: 100%;
`;

const Wrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ContentIntro = styled.section`
  width: 100%;
  margin: 40px 0 10px;

  @media (min-width: 1200px) {
    width: 450px;
  }
`;

const defaultTitle = styled.h1`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Barlow Condensed", sans-serif;
  color: var(--color-text-blue);
`;

const TitlePrimary = styled(defaultTitle)`
  font-size: 50px;
  line-height: 58px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 20px 0 20px;
  letter-spacing: 2px;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const TitleSecondary = styled(defaultTitle)`
  color: var(--color-text-blue-secondary);
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;

  > span {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 15px;
    background: var(--color-text-blue);
    margin-right: 15px;

    font-weight: 700;
    letter-spacing: initial;
    color: var(--color-text-white-primary);
  }


  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Barlow", sans-serif;
  color: var(--color-text-blue-secondary);
  width: 100%;

  margin-bottom: 60px;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
    width: 280px;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 12px 25px;
  background: var(--bg-button);
  border-radius: 5px;
  margin: 0 auto 20px;

  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Barlow Condensed", sans-serif;
  color: var(--color-text-white-primary);
  cursor: pointer;
  display: block;

  :hover {
    opacity: 0.8;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0px;
    margin-right: 20px;
    display: inline-block;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--color-text-blue-secondary);
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Barlow Condensed", sans-serif;
  color: var(--color-text-blue);

  display: block;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 1200px) {
    display: inline-block;
    text-align: left;
    margin: initial;
  }
`;

const Figure = styled.figure`
  order: -1;
  width: 100%;

  @media (min-width: 1200px) {
    order: initial;
    width: 700px;
  }
`;

const IllustrationDevices = styled(Illustration)`
  width: 100%;

  @media (min-width: 1200px) {
    width: 700px;
  }
`;

export {
  Container,
  Wrapper,
  ContentIntro,
  TitlePrimary,
  TitleSecondary,
  Text,
  Button,
  Link,
  Figure,
  IllustrationDevices,
};
