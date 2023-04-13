import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { emptyChatImage } from "../../data";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const subTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="image" />
        <Title>WhatsApp Web</Title>
        <subTitle>
          Now send and receive messages without keeping your phone online.
        </subTitle>
        <br />
        <subTitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </subTitle>
        <StyledDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;
