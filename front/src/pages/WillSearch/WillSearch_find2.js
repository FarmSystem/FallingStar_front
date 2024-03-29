import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import find2Img from "../../assets/img/Find2Img.png";
import searchLogo from "../../assets/img/SearchLogo.png";

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

const SearchLogo = styled.img`
  width: 400px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

  width: 770px;
  height: 120px;
`;

const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-size: 15px;
  font-weight: 900;
  line-height: 140%;
  text-align: center;

  color: #2d2d2d;

  border: 1px solid #ffffff;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 7px;
  margin: 12px;
  width: 190px;
  height: 65px;
  cursor: pointer;
`;

const Find2Img = styled.img``;

function WillSearch() {
  const find = useLocation();
  {console.log(find)}
  const name = find.state.name;
  const residentNum = find.state.residentNum;
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
        <br /> <br />
        <Find2Img src={find2Img} />
        <br />
        <br /> <br /> <br />
        <ButtonContainer>
          <Button
            onClick={() => (navigate("/WillSearch_complete",{
              state: {
                name: name,
                residentNum: residentNum
              }
            }))}
          >
            별세 전담 변호사에게 <br />
            유언장 서류 요청하기
          </Button>
        </ButtonContainer>
      </Container>
    </Background>
  );
}

export default WillSearch;
