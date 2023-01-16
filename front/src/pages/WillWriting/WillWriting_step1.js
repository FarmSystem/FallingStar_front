
import React, { useState } from 'react';
import styled from 'styled-components';
import * as WCss from '../../styles/WillWritinCss';
import { Navigate } from "react-router-dom";

import InviteBox from '../../components/Invite/Invite';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Question1, Question2,Question3 } from '../../redux/store';
import axios from 'axios';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_step1.png';
import fileadd from '../../assets/img/Step1_fileadd.png';
import cemetry1 from '../../assets/img/cemetry1.png';
import cemetry2 from '../../assets/img/cemetry2.png';
import cemetry3 from '../../assets/img/cemetry3.png';
import cemetry4 from '../../assets/img/cemetry4.png';
import cemetry5 from '../../assets/img/cemetry5.png';
import cemetry6 from '../../assets/img/cemetry6.png';


const Button = styled.button`
ffont-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 17px;
line-height: 21px;
text-align: center;

color: #FFFFFF;


width: 148px;
height: 37px;
left: 582px;
top: 1328px;

background: #5B5A5A;
border-radius: 5px;
margin-top: 20px;
border: none;
&: hover{
    background: black; //버튼색
    color: white;
}
`;



const ChooseBox = styled.button`
background: #ECECEC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 160px;
height: 110px;
border:none;
margin: 10px;
padding: 10px;  

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 18px;
text-align: center;

color: #000000;
&: focus{
    background: #FFDF6C; //버튼색
}
`

const InputBox = styled.input`
width: 90%;
height: 110px;
left: 200px;
top: 915px;

background: #F4F4F4;
border-radius: 15px;
border: none;
padding: 10px;
margin: 10px;
`
const SmallBox = styled.div`
background: #F4F4F4;
border-radius: 15px;
width: 90%;
display: inline-block;
padding: 10px;
text-align: center;
padding-left: 20px;
margin-bottom: 30px;
`
const Container2 = styled.div`
display: inline-block;
`
const Row = styled.div`
margin: 2px;
padding: 12px;
width: 25%;
float: left;
margin-left: 8px;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 24px;
text-align: center;

color: #7B7575;
float: left;
`
const InputBox2 = styled.input`
background: #FFFFFF;
border-radius: 5px;
float: left;
border: none;
margin: 2px;
padding: 12px;
width: 25%;
margin-left: 8px;

`
const Line =  styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 24px;
color: #7B7575;

text-align: center;
float: left;
margin-left: 10px;
margin-top: 13px;
margin-right: 10px;
width: 10px;
`

const Container = styled.div`
text-align: center;
width: 100%;
display: inline-block;
`
const Img2 = styled.img`
width: 270px;
padding-right:1700px;
padding-left: 30px;
margin-bottom: 10px;
`

const Hr = styled.hr`
width: 100%;
display: inline-block;
`
const Img3  = styled.img`
width: 90%;
margin: 10px;
display: center;

`
const ChooseBox2 = styled.button`
background: #ECECEC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 160px;
height: 170px;
border:none;
margin: 10px;
padding: 10px;  

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 18px;
text-align: center;

color: #000000;

&: focus{
    background: #FFE380; //버튼색
}
`
const ChooseBox2Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #000000;
`
function WillWriting_step1() {
    const [inputvalue, setinputvalue] = useState('')
    const [inputvalue2, setinputvalue2] = useState('')

    const [inviteArrary, setinviteArrary] = useState([
        {
            name: '이여원',
            relationship: '녀',
            phone: '010-1234-1234',
        },
    ])
    const [name, setName]= useState('')
    const [relationship, setRelationship]= useState('')
    const [phone, setPhone]= useState('')
    const addInvite =()=>{
        setinviteArrary([...inviteArrary, {name: name, relationship: relationship, phone: phone}])
    }

    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    const [Q1, setQ1] = useState(" ")
    const [Q3, setQ3] = useState(" ")
    return (
        <WCss.Background>
            {console.log(a)}
            <WCss.Container>
            <WCss.Img src={WillWritingTitle} />
            <WCss.Img src={stepImg} />            
            
            <WCss.Box>
            <WCss.Question>질문1. 어떤 장례식을 원하시나요?</WCss.Question>
                <ChooseBox onClick={()=>(setQ1('일반 3일장 장례식'))}>가족과 지인이 함께했으면 좋겠어요.<br/>(일반 3일장 장례식)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('가족장'))}>가족이랑만<br/>장례를 치고 싶어요.<br/>(가족장)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('무빈소 장례식'))}>빈소를 차리지 않고 간소하게 하 싶어요.<br/>(무빈소 장례식)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('종교장'))}>제가 믿는 종교에 따라 진행하고 싶어요.<br/>(종교장)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('희망방식 별도'))}>저만의 희망하는 장례방식이 있어요.<br/>(기타)</ChooseBox>

                <InputBox value = {inputvalue} type="text" placeholder="이 외의 희망사항을 남겨주세요." onChange={(event)=> {setinputvalue(event.target.value); {setQ1(inputvalue)}}}/>
            <WCss.Question>질문2. 장례에 초대하고 싶으신 분이 있으신가요?</WCss.Question>
            <SmallBox>
                <Line> </Line>
                <Container2>
                <Row>성함</Row><Row>관계</Row><Row>연락처</Row>
                <Hr/>
                <br/>
                {/* map으로 저장된 inviteArrary 보여주기 */}
                {inviteArrary.map((tmp, i)=> (<InviteBox num = {i} name={tmp.name} relationship={tmp.relationship} phone={tmp.phone} />))}
                <Container>
                    <InputBox2 value = {name} type="text" placeholder="예시)  김철구" onChange={(event)=>setName(event.target.value)}/>
                    <InputBox2 value = {relationship} type="text" placeholder="예시)  자" onChange={(event)=>setRelationship(event.target.value)}/>
                    <InputBox2 value = {phone} type="text" placeholder="예시)  010-1234-5678" onChange={(event)=>setPhone(event.target.value)}/>
                </Container>
                </Container2>
                <WCss.ButtonContainer>
                <Button onClick={ addInvite }>입력</Button>
                {console.log(inviteArrary)}
                </WCss.ButtonContainer>
                <Img2 src={fileadd} /> 
            </SmallBox>
            <WCss.Question>질문3. 원하시는 묘는 무엇인가요?</WCss.Question>
                <ChooseBox2 onClick={()=>(setQ3('매장묘'))}> 
                    <ChooseBox2Title>매장묘</ChooseBox2Title>
                    <Img3 src = {cemetry1} /> <br />
                    전통 방식대로 터에 묻히길 원해요.
                </ChooseBox2>
                <ChooseBox2 onClick={()=>(setQ3('봉안묘'))}> 
                    <ChooseBox2Title>봉안묘</ChooseBox2Title>
                    <Img3 src = {cemetry2} /> <br />
                    화장 후 실외 시설물에 안치되길 원해요.                
                    </ChooseBox2>
                <ChooseBox2 onClick={()=>(setQ3('납골당'))}> 
                    <ChooseBox2Title>납골당</ChooseBox2Title>
                    <Img3 src = {cemetry3} /> <br />
                    화장 후 실내 시설물에 안치되길 원해요.                
                    </ChooseBox2>
                <ChooseBox2 onClick={()=>(setQ3('수목장'))}> 
                    <ChooseBox2Title>수목장</ChooseBox2Title>
                    <Img3 src = {cemetry4} /> <br />
                    화장 후 나무 아래 안치되길 원해요.
                </ChooseBox2>
                <ChooseBox2 onClick={()=>(setQ3('잔디장'))}> 
                    <ChooseBox2Title>잔디장</ChooseBox2Title>
                    <Img3 src = {cemetry5} /> <br />
                    화장 후 잔디 아래 묻히길 원해요.
                </ChooseBox2>
                <ChooseBox2 onClick={()=>(setQ3('기타'))}> 
                    <ChooseBox2Title>기타</ChooseBox2Title>
                    <Img3 src = {cemetry6} /> <br />
                    저만의 원하는 방식이 따로 있어요.                
                </ChooseBox2>
                
                <InputBox value = {inputvalue2} type="text" placeholder="이 외의 희망사항을 남겨주세요." onChange={(event)=> {setinputvalue2(event.target.value); setQ3(inputvalue2)}}/>
            </WCss.Box>


            <WCss.ButtonContainer>
                <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_notice')}>
                    이전으로</WCss.PrevButton>
                <WCss.NextButton 
                onClick={() => { window.location.href = '/WillWriting_step2';
                dispatch(Question1(Q1));
                dispatch(Question2(inviteArrary));
                dispatch(Question3(Q3))}}>
                    다음으로</WCss.NextButton>
            </WCss.ButtonContainer>
            </WCss.Container>


        </WCss.Background>

    )
}

export default WillWriting_step1;