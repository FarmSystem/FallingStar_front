import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Question4, Question5 } from '../../redux/store';
import axios from 'axios';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_step2.png';
import question4 from '../../assets/img/question4.png';
import question5 from '../../assets/img/question5.png';

const Question = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 25px;
line-height: 30px;
text-align: left;
margin: 15px;
margin-left: 70px;
color: #000000;
margin-top: 50px;
`
const ChooseBox = styled.div`
background: #ECECEC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 40%;
height: 60px;
border:none;
margin: 15px;
padding: 10px;  
padding-top: 50px;
display: inline-block;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 18px;
text-align: center;

color: #000000;
&: hover{
    background: #FFE380; //버튼색
}
`

const SmallBox = styled.div`
background: #F8F8F8; 
border-radius: 20px;
width: 85%;
margin: 15px;
display: inline-block;
`
const Text = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 27px;

color: #505050;

float: left;
text-align: left;
margin: 40px;
width: 50%;
padding-left: 30px;
`
const SmallButton = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;

width: 20%;
padding: 10px;
margin: 20px;
background: #636363;
border-radius: 4px;
display: inline-block;
float: left;
margin-right: 400px;
margin-left: 70px;
margin-bottom: 30px;

&: hover{
    background: black; //버튼색
}
`
const Img2 = styled.img`
width: 150px;
float: right;
margin: 20px;
padding-bottom: 60px;
margin-bottom: 5px;
margin-top: 5px;
`
function WillWriting_step2() {
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    const [Q4, setQ4] = useState(false);
    const [Q5, setQ5] = useState(false);
    const url ='https://www.g-health.kr/portal/health/pubHealthSearch/list.do?bbsId=U00198&menuNo=200452';
    const url2 = 'https://www.donor.or.kr/home/donor/organ_donation_apply.asp';
    return (
        <WCss.Background>
            {console.log(a)}
            {console.log(Q4, Q5)}
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <WCss.Img src={stepImg}/>
                <WCss.Box>
                    <Question>질문4. 연명치료에 대해 결정된 사항이 있나요?</Question>
                    <ChooseBox onClick={()=>(dispatch(Question4(true)))}>연명치료를 원해요.</ChooseBox>
                    <ChooseBox onClick={()=>(dispatch(Question4(false)))}>연명치료를 원하지 않아요.</ChooseBox>
                    <SmallBox>
                        <Text>
                        연명치료를 원하지 않으시다면
                        <br/>전국 보건소에서 연명치료 거부 신청을 하실 수 있습니다.
                        <br/><br/>지금 등록해보시는 건 어떨까요?
                        </Text>
                        <Img2 src={question4}/>
                        <SmallButton onClick={()=>{window.open(url)}}>보건소 찾기</SmallButton>
                    </SmallBox>
                    <Question>질문5. 장기기증을 신청하셨나요?</Question>
                    <ChooseBox onClick={()=>(dispatch(Question5(true)))}>장기기증을 신청하였습니다.</ChooseBox>
                    <ChooseBox onClick={()=>(dispatch(Question5(false)))}>장기기증을 신청하지 않았습니다.</ChooseBox>
                    <SmallBox>
                        <Text>
                        장기기증에 대한 의향이 있으신가요?
                        <br />의향이 있으시다면 바래 버튼을 통해 신청하실 수 있습니다.
                        </Text>
                        <Img2 src={question5}/>
                        <SmallButton onClick={()=>{window.open(url2)}}>장기기증 신청하기</SmallButton>
                    </SmallBox>

                </WCss.Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = './WillWriting_step1')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton onClick={() => (window.location.href = './WillWriting_step3')}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
            </WCss.Container>
        </WCss.Background>
        
    )
}

export default WillWriting_step2