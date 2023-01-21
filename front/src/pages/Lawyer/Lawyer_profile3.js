import React from "react";
import styled from "styled-components";

import lawyerProfile3 from "../../assets/img/lawyerProfile3.png";
import lawyerBackgroundImg from "../../assets/img/lawyerBackgroundImg.png";
import star from "../../assets/img/StarColor.png";

const Star = styled.img`
  position: absolute;
  top: 420px;
  right: 285px;
  cursor: pointer;
  width: 55px;

  :active {
    opacity: 0.3;
  }
`;

const Background = styled.body`
background-color: #FFFCF2;
padding-bottom: 100px;
min-height:100%
height: auto;
`;

const LawyerBackgroundImg = styled.img`
  width: 100%;
  height: 400px;
  opacity: 0.2;
  margin: 98px 0 0 0;
`;

const ProfileContainer = styled.div`
  z-index: 1;
  top: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1130px;
`;

const LawyerProfile = styled.img`
  position: absolute;
  top: 300px;
  width: 1000px;
`;

const TextMessage = styled.div`
  top: 710px;
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  left: 280px;
  line-height: 30px;
  text-decoration: underline;
  color: #939393;
  cursor: pointer;
`;

function Lawyer_profile() {
  return (
    <Background>
      <ProfileContainer>
        <LawyerBackgroundImg src={lawyerBackgroundImg} />
        <LawyerProfile src={lawyerProfile3} />
        <TextMessage>빠른 상담을 위해 메시지 보내기</TextMessage>
        <Star src={star} />
      </ProfileContainer>
    </Background>
  );
}

export default Lawyer_profile;
