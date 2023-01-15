import React from "react";
import styled from "styled-components";

import searchLogo from "../../assets/img/SearchLogo.png";
import writingNoFindImg from "../../assets/img/WritingNoFindImg.png";
import registrationImg from "../../assets/img/RegistrationImg.png";

import searchBarImg from "../../assets/img/SearchBarImg.png";
import mainPicture from "../../assets/img/mainpicture.png";

const Background = styled.body`
background-color: #E7E5E0;
padding-bottom: 100px;
min-height:100%
height: auto;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FindTextContainer = styled.div`
  border: 1px solid #000000;
  width: 800px;
  align-items: center;
  display: flex;
  flex-direction: column;

  width: 770px;
  height: 170px;
  border-radius: 10px;
`;

const FindText = styled.div`
  width: 100%;
  text-align: center;

  font-family: "JejuMyeongjo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  z-index: 1;
`;

const DateText = styled.div`
  position: absolute;
  top: 840px;
  width: 100%;
  text-align: center;

  font-family: "JejuMyeongjo";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  z-index: 1;
`;

const WritingFindImg = styled.img`
  width: 650px;
`;

const SearchLogo = styled.img`
  width: 400px;
`;

function WillSearch() {
  return (
    <Background>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <SearchLogo src={searchLogo} />
        <br />
        <br />
        <FindTextContainer>
          <br />
          <FindText>찾으시는 분</FindText>
          <br /> <br />
          <FindText>
            이름:
            <br />
            <br />
            주민등록번호:
          </FindText>
        </FindTextContainer>
        <br />
        <br />
        <br />
        <WritingFindImg src={writingNoFindImg} />
      </Container>
    </Background>
  );
}

export default WillSearch;
