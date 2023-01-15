
import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Question1, Question2,Question3 } from '../../redux/store';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import fileadd from '../../assets/img/Step1_fileadd.png';
import stepImg from '../../assets/img/WillWriting_opener.png';
import cemetry1 from '../../assets/img/cemetry1.png';
import cemetry2 from '../../assets/img/cemetry2.png';
import cemetry3 from '../../assets/img/cemetry3.png';
import cemetry4 from '../../assets/img/cemetry4.png';
import cemetry5 from '../../assets/img/cemetry5.png';
import cemetry6 from '../../assets/img/cemetry6.png';


const Background = styled.body`
background-color: #E9EAEC;
padding-bottom: 100px;
padding-top: 200px;
min-height:100%
height: auto;
text-align: center;
`


const ButtonContainer = styled.div`
width: 100%;
height: 80px;
text-align: center;
`
const ImgContainer = styled.div`
text-align: center;
width: 100%;
`

const Img = styled.img`
margin-top:4000;
width: 910px;
text-align: center;
padding-bottom: 100px;
`

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

const Box = styled.div`
background-color: white;
margin: 20px;
border-radius: 10px;
padding: 10px;
max-width:90%;
display: inline-block;
`
const Question = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 25px;
line-height: 30px;
text-align: left;
margin: 15px;
margin-left: 30px;
color: #000000;
margin-top: 50px;
`

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
&: hover{
    background: #FFE380; //버튼색
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
const NextButton = styled.button`
width: 170px;
height: 50px;
background: #000000;
border-radius: 6px;
border: none;

color: white;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 17px;
text-align: center;
margin: 15px;

&: hover{
    background: #E88B00; //버튼색
}
`
const PrevButton = styled.button`
width: 170px;
height: 50px;
border-radius: 6px;

color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 17px;
text-align: center;
margin: 15px;

&: hover{
    background: #E88B00; //버튼색
    color: white;
    border: none;
}
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
&: hover{
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
        <Background>
            {console.log(a)}
            <ImgContainer>
            <Img src={WillWritingTitle} />
            <Img src={stepImg} />            
            
            <Box>
            <Question>질문1. 어떤 장례식을 원하시나요?</Question>
            <ChooseBox onClick={()=>(setQ1('일반 3일장 장례식'))}>가족과 지인이 함께했으면 좋겠어요.<br/>(일반 3일장 장례식)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('가족장'))}>가족이랑만<br/>장례를 치고 싶어요.<br/>(가족장)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('무빈소 장례식'))}>빈소를 차리지 않고 간소하게 하 싶어요.<br/>(무빈소 장례식)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('종교장'))}>제가 믿는 종교에 따라 진행하고 싶어요.<br/>(종교장)</ChooseBox>
                <ChooseBox onClick={()=>(setQ1('희망방식 별도'))}>저만의 희망하는 장례방식이 있어요.<br/>(기타)</ChooseBox>

                <InputBox value = {inputvalue} type="text" placeholder="이 외의 희망사항을 남겨주세요." onChange={(event)=> {setinputvalue(event.target.value); {setQ3(inputvalue)}}}/>
            <Question>질문2. 장례에 초대하고 싶으신 분이 있으신가요?</Question>
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
                <ButtonContainer>
                <Button onClick={ addInvite }>입력</Button>
                {console.log(inviteArrary)}
                </ButtonContainer>
                <Img2 src={fileadd} /> 
            </SmallBox>
            <Question>질문3. 원하시는 묘는 무엇인가요?</Question>
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
                
                <InputBox value = {inputvalue} type="text" placeholder="이 외의 희망사항을 남겨주세요." onChange={(event)=> {setinputvalue(event.target.value); {setQ3(inputvalue)}}}/>
            </Box>


            <ButtonContainer>
                <PrevButton onClick={() => (window.location.href = '/WillWriting_notice')}>
                    이전으로</PrevButton>
                <NextButton 
                onClick={() => { 
                dispatch(Question1(Q1));
                dispatch(Question2(inviteArrary));
                dispatch(Question3(Q3))}}>
                    다음으로</NextButton>
            </ButtonContainer>
            </ImgContainer>


        </Background>

    )
}

export default WillWriting_step1;