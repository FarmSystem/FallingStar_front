import React from 'react'
import styled from 'styled-components';

import Logo from '../assets/img/Logo2.png';
import mainpicture from '../assets/img/mainpicture.png';
import icon1 from '../assets/img/buttonicon1.png';
import icon2 from '../assets/img/buttonicon2.png';
import icon3 from '../assets/img/buttonicon3.png';
//리덕스
import {useSelector, useDispatch} from "react-redux";
import { LoginState } from '../redux/store';

const Main = styled.body`
background-color: #6D6B64;
padding-bottom: 100px;
min-height:100%
height: auto;
`
const TitleText = styled.div`
font-family: 'JejuMyeongjo';
font-weight: 400;
font-size: 18px;
line-height: 28px;
text-align: center;
padding-top: 40px;
color: #FFFFFF;
`
const Img = styled.img`
width: 200px;
postition: absolute;
` 
const Img2 = styled.img`
position: absolute;
width: 60%;
left: 20%;
z-index:0;
`
const Title = styled.div`
text-align: center;
`
const TitleText2 = styled.div`
font-family: 'JejuMyeongjo';
font-weight: 200;
font-size: 13px;
line-height: 28px;
text-align: center;

color: #FFFFFF;
`
const Text = styled.div`
position: relative;

`
const Num = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 24px;
text-align: center;

color: #FFFFFF;
z-index:2;
height: 30%;
`
const Text2 = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 20px;
text-align: center;

color: #FFFFFF;
z-index:2;
margin-top: 10px;

`
const Text3 = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 18px;
text-align: center;
margin-bottom: 80px;

color: #FFFFFF;

`
const Button = styled.button`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 18px;
text-align: center;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.48);
border-radius: 7px;
padding:7px;
margin: 12px;
width: 150px;

z-index:-2;
`
const Img3 = styled.img`
width: 40px;
`
const Space = styled.br`
padding-top: 50px;
`
function Mainpage() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    {console.log(a.login_user.login)}

    return (
        <Main>
            <br/><br/><br/><br/><br/><br/>
            <TitleText>당신의 마지막 말이 소중히 보관되길,</TitleText>
            <br/>
            <Title><Img src={Logo}/></Title>
            <TitleText2>블록체인 유언장 법률 커뮤니티</TitleText2>
            <Text>
            <Img2 src={mainpicture}/>
            <Num> <br/><br/><br/>현재 12,203,566 개의 유언장이 보관되었습니다. </Num>
            </Text>
            <br/><br/><br/><br/>
            <Title><Img3 src={icon1}/></Title>
            <Text2>당신의 유언장을 남겨보세요.<br/>            
                <Button onClick={() => (window.location.href = '/WillWriting_notice')}> 유언장 작성하기 </Button>
            </Text2>
            <Text3>저장된 유언장은 블록체인 기술을 통해 <br/>타인에 의해 훼손되지 않고 안전하게 보관됩니다.</Text3>
            
            <Title><Img3 src={icon1}/></Title>
            <Text2>별세와 함께 상속과 관련한 <br/>법률적 고민을 해결하세요.<br/>            
                <Button onClick={() => (window.location.href = '/Lawyer')}> 변호사 알아보기 </Button>
            </Text2>
            <Text3>블록체인과 녹음 방식을 통해 <br/>법적효력이 있는 온라인 유언장을 제공합니다.</Text3>
            
            <Title><Img3 src={icon1}/></Title>
            <Text2>유언장을 찾지 못하셨나요? <br/>가족의 유언장이 보관되어있는지 확인해보세요.<br/>            
                <Button onClick={() => (window.location.href = '/WillSearch')}> 유언장 찾기 </Button>
            </Text2>
            <Text3>이름, 주민등록번호를 통해 유언장의 유무를 검색하실 수 있고 <br/>별세 전담변호사를 통해 확인절차를 거친 뒤,
            <br/>법률문서로 유언장을 찾으실 수 있습니다. </Text3>
            

        </Main>
    )
}

export default Mainpage
