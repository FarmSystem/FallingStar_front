import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

import searchLogo from "../../assets/img/SearchLogo.png";
import writingFindImg from "../../assets/img/WritingFindImg.png";

const Background = styled.body`
background-color: #E7E5E0;
padding-bottom: 100px;
min-height:100%
height: auto;
li {
    list-style: none;
}
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

const ButtonContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

  width: 770px;
  height: 80px;
`;

const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 18px;
  text-align: center;

  color: #000000;

  border: 1px solid #ffffff;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 7px;
  margin: 12px;
  width: 150px;
  height: 50px;
  cursor: pointer;
`;

function WillSearch_find1() {
  const find = useLocation();
  const name = find.state.name;
  const residentNum = find.state.residentNum;
  console.log(name, residentNum);
  const navigate = useNavigate();

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
            이름: {name}
            <br />
            <br />
            주민등록번호: {residentNum}
          </FindText>
        </FindTextContainer>
        <br />
        <br />
        <br />
        <WritingFindImg src={writingFindImg} />
        <DateText>작성 날짜</DateText>
        <br /> <br /> <br />
        <ButtonContainer>
          <Button onClick={() => (navigate("/WillSearch_find2",{
          state: {
            name: name,
            residentNum: residentNum
          }
        }))}>
            찾기
          </Button>
        </ButtonContainer>
      </Container>
    </Background>
  );
}

export default WillSearch_find1;
