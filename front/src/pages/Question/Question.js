import React from "react";
import styled from "styled-components";

import questionBackground from "../../assets/img/questionBackground.png";
import questionLogo from "../../assets/img/questionLogo.png";
import lawyerBoard from "../../assets/img/lawyerBoard.png";

const Background = styled.body`
background-color: #ffffff;
padding-bottom: 100px;
min-height:100%
height: auto;
`;

const QuestionBackground = styled.img`
  width: 100%;
  height: 400px;
  opacity: 0.2;
  margin: 98px 0 0 0;
`;

const LogoContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const QuestionLogo = styled.img`
  width: 700px;
  z-index: 1;
  position: absolute;
  top: 220px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 80px 0 0 0;
  background: #f;
`;

const Board = styled.div`
  width: 80%;
  height: 100px;
  border: 2px solid blue;
`;

const LawyerBoard = styled.img`
  width: 900px;
`;

function Question() {
  return (
    <Background>
      <LogoContainer>
        <QuestionLogo src={questionLogo} />
      </LogoContainer>
      <QuestionBackground src={questionBackground} />
      <Container>
        <LawyerBoard src={lawyerBoard} />
      </Container>
    </Background>
  );
}

export default Question;
