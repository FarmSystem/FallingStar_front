import React from 'react'
import styled from "styled-components";
import * as WCss from '../../styles/WillWritinCss';

//리덕스
import {useSelector, useDispatch} from "react-redux";
import { addUserInfo } from '../../redux/store';

import letter from "../../assets/img/letter.png";

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

margin: 30px;
margin-bottom:10px;
`
const Birth = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 158%;
color: #000000;
display: center;
margin: 10px;
margin-top: 5px;
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
font-weight: 600;
font-size: 15px;
line-height: 158%;
color: #FFFFFF;
border:none;
margin-bottom: 60px;

&: hover{
    background: black; //버튼색
}
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
color: #000000;
text-align: left;
padding-left: 60px;
margin-top: 60px;
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
function MyPage() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    return (
        <Background>
            <WCss.Container>
                <Title>내 정보</Title>
                <hr/>
                <Hello>{a.login_user.name}님 안녕하세요.</Hello>
                <Birth>{(a.login_user.birth).substr(0, 2)} 년 {(a.login_user.birth).substr(2, 2)} 월 {(a.login_user.birth).substr(4, 2)} 일생 <br /></Birth>
                <Edit>내 계정정보 수정하기</Edit>
                <br/>
                <Img src={letter}/>
                <SmallText>작성하신 유언장을 블록체인 기술로 안전하게 보관 중입니다.</SmallText>
                
                <Category>유언장</Category>
                <Menu>나이 블록체인 유언장 수정하기</Menu>
                <Menu>유언장 메시지 보관함</Menu>
                <Menu>나의 열람인</Menu>
                
                <Category>법률 커뮤니티</Category>
                <Menu>나의 관심 변호사</Menu>
                <Menu>내가 작성한 게시글</Menu>
            </WCss.Container>
        </Background>
    )
}

export default MyPage
