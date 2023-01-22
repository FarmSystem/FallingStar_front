import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import searchLogo from "../../assets/img/SearchLogo.png";
import completeImg from "../../assets/img/CompleteImg.png";

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

const WritingFindImg = styled.img`
  width: 650px;
`;

const SearchLogo = styled.img`
  width: 400px;
`;

const CompleteImg = styled.img`
  width: 450px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 90px;
`;

const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 18px;
  text-align: center;

  color: #ffffff;

  border: 1px solid #585858;
  background: #585858;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 7px;
  margin: 12px;
  width: 180px;
  height: 50px;
  cursor: pointer;
`;

const NoticeText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: #8d8d8d;
`;

function WillSearch_complete() {
  //const find = useLocation();
  //{console.log(find)}
  const data = useLocation();
  {console.log(data)}

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
            이름: {data.state.name}
            <br />
            <br />
            주민등록번호: {data.state.residentNum}
          </FindText>
        </FindTextContainer>
        <br />
        <br />
        <br />
        <br />
        <CompleteImg src={completeImg} />
        <br />
        <ButtonContainer>
          <Button onClick={() => (window.location.href = "/MyPage")}>
            마이페이지 가기
          </Button>
        </ButtonContainer>
        <NoticeText>
          관계인 승인 후, 이메일로 유언장 사용과 관련한 <br />
          추가적인 서류 절차 안내 이메일이 발송됩니다.
        </NoticeText>
      </Container>
    </Background>
  );
}

export default WillSearch_complete;
