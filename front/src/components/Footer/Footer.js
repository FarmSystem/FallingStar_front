import React from 'react'
import styled from 'styled-components';
import Logo from '../../../src/assets/img/Logo.png';

const Foot = styled.div`
position:absolute;
bottom:0;
width: 100%;
text-align: center;
`

const Leftbox = styled.div`
position: absolute;
left: 6.64%;
right: 80.23%;
top: 29.55%;
bottom: 46.82%;
`

const Rightbox = styled.div`
position: absolute;
left: 66.64%;
right: 6.72%;
top: 22.27%;
bottom: 39.09%;

font-family: 'JejuMyeongjo';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 143.5%;
text-align: left;
`
const Line = styled.hr`
border: 0.1px solid #000000;
position:absolute;
bottom:20px;
width: 100%;
`



const Img = styled.img`
width: 200px;
`

function Footer() {
    return (
        <Foot>
            <Line/>
            <Leftbox>
                <Img src={Logo}/>
            </Leftbox>
            <Rightbox>
            (주)별세 <br/>
            오시는 길 : (도로명)[04620] 서울특별시 중구 필동로 1길 30 <br/>
            TEL : 010-1234-6289 <br/>
            우편 : 04620 <br/>
            <br/>
            copyright © dongguk university farmsystem 별세팀 <br/>
            </Rightbox>
        </Foot>
    )
}

export default Footer
