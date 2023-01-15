import React, { useState } from 'react';
import styled from 'styled-components';
import stepImg from '../../assets/img/StepImg.png';
import helpIcon1 from '../../assets/img/HelpIcon1.png';
import helpIcon2 from '../../assets/img/HelpIcon2.png';
import mouseOverhelpIcon1 from '../../assets/img/MouseOverHelpIcon1.png';
import mouseOverhelpIcon2 from '../../assets/img/MouseOverHelpIcon2.png';

const Background = styled.body`
background-color: #E9EAEC;
padding-bottom: 100px;
min-height:100%
height: auto;

li {
    list-style: none;
}
`

const ImgContainer = styled.div`
text-align: center;
width: 100%;
height: 370px;
`

const ButtonContainer = styled.div`
width: 100%;
height: 80px;
text-align: center;
`

const StepImg = styled.img`
width: 910px;
`

const Button = styled.button`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
text-align: center;

color: #FFFFFF;

background: #444444;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 13px;
padding:7px;
margin: 12px;
width: 230px;
height: 55px;
cursor: pointer;

`;


function WillWriting_notice() {
    return (
        <Background>
            <br /><br /><br /><br /><br />

            <ImgContainer>
                <br /><br /><br /><br />
                <StepImg src={stepImg} />
            </ImgContainer>

            


            <ButtonContainer>
                <Button onClick={() => (window.location.href = '/WillWriting_step1')}>
                    유언장 작성하기</Button>
            </ButtonContainer>

        </Background>

    )
}

export default WillWriting_notice;