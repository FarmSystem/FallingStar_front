import React from "react";
import styled from "styled-components";

import questionBackground from "../../assets/img/questionBackground.png";
import questionLogo from "../../assets/img/questionLogo.png";

const Background = styled.body`
background-color: #F5F5F5;
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

function Question() {
  return (
    <Background>
      <LogoContainer>
        <QuestionLogo src={questionLogo} />
      </LogoContainer>
      <QuestionBackground src={questionBackground} />
    </Background>
  );
}

export default Question;
