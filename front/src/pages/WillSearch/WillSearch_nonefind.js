import React from "react";
import styled from "styled-components";

import searchLogo from "../../assets/img/SearchLogo.png";
import writingNoFindImg from "../../assets/img/WritingNoFindImg.png";
//리덕스
import {useSelector} from "react-redux";
import { useLocation } from "react-router-dom";

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
  font-size: 17px;
  line-height: 18px;
  text-align: center;

  color: #000000;

  border: 1px solid #ffffff;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 7px;
  margin: 12px;
  width: 120px;
  height: 45px;
  cursor: pointer;
`;

function WillSearch() {
   //리덕스
  let a = useSelector((state) => { return state.will_list } )
  let b = useSelector((state) => { return state } )

  const find = useLocation();
  {console.log(find, b)}
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
            이름: {find.state.name}
            <br />
            <br />
            주민등록번호:{find.state.residentNum}
          </FindText>
        </FindTextContainer>
        <br />
        <br />
        <br />
        <WritingFindImg src={writingNoFindImg} />
        <br />
        <br />
        <ButtonContainer>
          <Button onClick={() => (window.location.href = "/WillSearch")}>
            뒤로가기
          </Button>
        </ButtonContainer>
      </Container>
    </Background>
  );
}

export default WillSearch;
