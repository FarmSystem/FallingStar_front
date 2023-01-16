import React, { useState } from "react";
import styled from "styled-components";
import stepImg from "../../assets/img/StepImg.png";
import helpIcon1 from "../../assets/img/HelpIcon1.png";
import helpIcon2 from "../../assets/img/HelpIcon2.png";
import mouseOverhelpIcon1 from "../../assets/img/MouseOverHelpIcon1.png";
import mouseOverhelpIcon2 from "../../assets/img/MouseOverHelpIcon2.png";

const Background = styled.body`
background-color: #E9EAEC;
padding-bottom: 100px;
min-height:100%
height: auto;

li {
    list-style: none;
}
`;

const ImgContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 365px;
`;

const HelpIconWrapper = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
`;

const HelpIconContainer1 = styled.div`
  padding: 0 0 0 57.9%;
  width: 230px;
  height: 160px;
  text-align: center;
  z-index: 1;

  position: absolute;
`;

const HelpIconContainer2 = styled.div`
  padding: 0 0 0 65.8%;
  width: 260px;
  height: 160px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
`;

const StepImg = styled.img`
  width: 900px;
`;

/*
:hover {   
    background:url("../../assets/img/MouseOverHelpIcon1.png");
    background-size: cover;
}
*/

const MouseOverHelpIcon1 = styled.img`
  padding-left: 966px;
`;

const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-align: center;

  color: #ffffff;

  border: 1px solid #444444;
  background: #444444;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  padding: 7px;
  margin: 12px;
  width: 230px;
  height: 55px;
  cursor: pointer;
`;

const Help1 = () => {
  const [isListHover, setIsListHover] = useState(false);
  return (
    <li
      onMouseOver={() => setIsListHover(true)}
      onMouseOut={() => setIsListHover(false)}
    >
      <img src={isListHover ? mouseOverhelpIcon1 : helpIcon1} alt="도움말 1" />
    </li>
  );
};

const Help2 = () => {
  const [isListHover, setIsListHover] = useState(false);
  return (
    <li
      onMouseOver={() => setIsListHover(true)}
      onMouseOut={() => setIsListHover(false)}
    >
      <img src={isListHover ? mouseOverhelpIcon2 : helpIcon2} alt="도움말 2" />
    </li>
  );
};

function WillWriting_notice() {
  /*
    
    <HelpIcon>
        <img src="../../assets/img/HelpIcon.png" id="help1" />
    </HelpIcon>

    var help1 = document.getElementById("help1");
    help1.addEventListener("mouseover", function () {
        help1.src = "../../assets/img/MouseOverHelpIcon1.png";
    });

    help1.addEventListener("mouseout", function () {
        help1.src = "../../assets/img/HelpIcon.png";
    });
    
    */

  return (
    <Background>
      <br />
      <br />
      <br />
      <br />
      <br />

      <ImgContainer>
        <br />
        <br />
        <br />
        <br />
        <StepImg src={stepImg} />
      </ImgContainer>

      <HelpIconWrapper>
        <HelpIconContainer1>
          <Help1></Help1>
        </HelpIconContainer1>
        <HelpIconContainer2>
          <Help2></Help2>
        </HelpIconContainer2>
      </HelpIconWrapper>

      <ButtonContainer>
        <Button onClick={() => (window.location.href = "/WillWriting_step1")}>
          유언장 작성하기
        </Button>
      </ButtonContainer>
    </Background>
  );
}

export default WillWriting_notice;
