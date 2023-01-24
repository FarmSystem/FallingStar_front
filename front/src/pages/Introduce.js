import React from 'react'
import styled from 'styled-components';

import * as WCss from '../styles/WillWritinCss';
import fallingstarlogo from '../assets/img/fallingstarlogo.png';
//import "../styles/Main.css";

const Title = styled.div`
font-family: 'JejuMyeongjo';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 158%;

display: center;
align-items: center;
text-align: center;

color: #000000;
margin-bottom: 60px;
`
const Background = styled.body`
padding-bottom: 100px;
padding-top: 200px;
min-height:100%
height: auto;
text-align: center;
background-color: linear-gradient(180deg, #E6E0CF 0%, rgba(250, 250, 250, 0) 100%);
`
const Img = styled.img`
width: 400px;
`
function Introduce() {
    return (
        <Background>
            
            <Title>
            당신이 남긴 말이 소중한 사람들에게 온전히 전달되길 바랍니다.
            </Title>
            <Img src={fallingstarlogo}/>


        </Background>
    )
}

export default Introduce
