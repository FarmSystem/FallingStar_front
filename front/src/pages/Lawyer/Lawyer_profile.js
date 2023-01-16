import React from "react";
import styled from "styled-components";

import lawyerProfile from "../../assets/img/lawyerProfile.png";
import lawyerBackgroundImg from "../../assets/img/lawyerBackgroundImg.png";
import { symbol } from "prop-types";

const Background = styled.body`
background-color: #F5F5F5;
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
  border: 1px solid red;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LawyerProfile = styled.img`
  width: 1000px;
`;

function Lawyer_profile() {
  return (
    <Background>
      <LawyerProfile src={lawyerProfile} />
      <LawyerBackgroundImg src={lawyerBackgroundImg} />
    </Background>
  );
}

export default Lawyer_profile;
