import React from 'react'
import styled from "styled-components";
import * as WCss from '../../../styles/WillWritinCss';

//리덕스
import {useSelector, useDispatch} from "react-redux";
import { addUserInfo } from '../../../redux/store';
//이미지
import WillBox1 from '../../../assets/img/WillBox1.png';
import WillBox2 from '../../../assets/img/WillBox2.png';
import WillBox3 from '../../../assets/img/WillBox3.png';

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

const Willbox = styled.div`
width: 60%;
border-radius: 10px;
border: 0.1px solid grey;
margin: 20px;
margin-bottom: 10px;
padding: 30px;
padding-left: 80px;
padding-right: 80px;
display: inline-block;
background-color:white;
font-family: 'JejuMyeongjo';
text-align: left;
line-height:24px;
font-weight: 100;

`

const Br = styled.div`
margin: 10px;
`
const P = styled.div`
font-family: 'JejuMyeongjo';
text-align: left;
line-height:24px;
color: #C57110;
white-space: nowrap;
display: inline;
`
const Edit = styled.button`
width: 150px;
height: 40px;
left: 516px;
top: 491px;
background: #C8B692;
border-radius: 5px;

font-family: 'Inter';
font-style: normal;
font-weight:900;
font-size: 15px;
line-height: 158%;
color: #FFFFFF;
border:none;
margin: 60px;

&: hover{
    background: black; //버튼색
}
`
const Will = styled.div`
display: inline-block;
float: left;

margin: 10px;
margin-left: 100px;
`
const WillButton = styled.button`
border: none;
background-color: #FFFDF8;
padding: 0px;
margin: 10px;
display: inline-block;
float: left;

width: 200px;
`
const WillBoxImg = styled.img`
width: 200px;
padding: -2px;
&: hover{
    box-shadow: 0px 0px 10px 5px #FFEEB4;
}
`
const SubTitle = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 39px;

color: #000000;
text-align: left;
margin: 10px;
margin-left: 100px;
margin-top: 60px
`

function WillBox() {
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    //현재 날짜 구하기
    let now = new Date();
    let year = now.getFullYear(); //년
    let month = now.getMonth()+1; //월
    let day = now.getDate(); //일
    return (
        <Background>
            <Title>유언장 메시지 보관함</Title>
            <hr/>
            <Hello>{a.login_user.name}님의 유언장 메시지</Hello>
            
            <Willbox>
                {a.will.text}
                <br/><br/>작성일자 :  {year}년 {month}월 {day}일 
            </Willbox>
            <SubTitle>유언장 보관함</SubTitle>
            <Will>
                <WillButton><WillBoxImg src = {WillBox1} /> </WillButton>
                <WillButton><WillBoxImg src = {WillBox2} /> </WillButton>
                <WillButton><WillBoxImg src = {WillBox3} /></WillButton>
            </Will>
            <Edit>수정하기</Edit>

        </Background>
    )
}

export default WillBox
