import React from "react";
import {
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
} from "../Main/styles";

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <ContentIntro>
          <TitleSecondary>
            <span>New</span> Monograph Dashboard
          </TitleSecondary>
          <TitlePrimary>Powerful Insights Into Your Team</TitlePrimary>
          <Text>Project planning and time tracking for agile teams</Text>
          <Button>Schedule a Demo</Button>
          <Link href="#">To See a Preview</Link>
        </ContentIntro>
        <Figure>
          <IllustrationDevices />
        </Figure>
      </Wrapper>
    </Container>
  );
};

export default Main;
