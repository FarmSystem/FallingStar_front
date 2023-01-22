import React from 'react'
import styled from "styled-components";
import * as WCss from '../../../styles/WillWritinCss';
import letter from "../../../assets/img/letter.png";


//리덕스
import {useSelector, useDispatch} from "react-redux";
import { addUserInfo } from '../../../redux/store';

const Background = styled.body`
background-color: #FBF9F4;
padding-bottom: 100px;
padding-top: 200px;
min-height:100%
height: auto;
text-align: center;
`;

const Title = styled.div`
font-family: 'JejuMyeongjo';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 158%;

display: center;
align-items: center;
text-align: center;

color: #000000;
margin-bottom: 60px;
`
const Hello = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 35px;
line-height: 158%;
display: center;
color: #000000;

margin: 60px;
`

const Img = styled.img`
width: 200px;
display: center;

`
const SmallText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 158%;
text-align: center;
color: #000000;
margin-bottom: 60px;
`
const Category = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 23px;
line-height: 158%;
color: orange;
text-align: center;
margin-bottom: 60px;
`
const Menu = styled.button`
width: 110%;
height:80px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 26px;
line-height: 158%;
text-align: left;
color: #000000;

border:none;
margin: 6px;
border-radius: 4px;
padding-left: 50px;

&: hover{
    background-color: #C8B692;
}
`
function OpenerAgree() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    return (
        <Background>
            <WCss.Container>
                <Title>관계인 확인절차 승인여부</Title>
                <hr/>
                <Hello>{a.login_user.name}님의 유언장 찾기 요청</Hello>
                <Img src={letter}/>

                <Category>승인 대기 중</Category>
                <SmallText>승인 후 문자메시지를 통해 유언장 열람과 관련된 <br/>
                법적절차 동의 여부 안내 메시지를 전송해드릴 예정입니다.</SmallText>

            </WCss.Container>
        </Background>
    )
}

export default OpenerAgree
