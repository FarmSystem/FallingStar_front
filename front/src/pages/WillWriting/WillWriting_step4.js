import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Question1, Question2, Question3 } from '../../redux/store';
import axios from 'axios';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_step3.png';
import notice from '../../assets/img/notice.png';
import searchimg from '../../assets/img/step3img.png';

const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 30px;
text-align: center;

color: #000000;
margin-top:30px;
`
const Line = styled.hr`
border: 0.2px solid #000000;
width: 110px;

`
const SmallText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 12px;
line-height: 18px;
text-align: center;

color: #727272;
`

const SmallBox = styled.div`
width: 90%;
background-color: #F8F8F8;
border-radius: 10px;
display: inline-block;
padding: 20px;
padding-left: 40px;

`
const BoxButton = styled.button`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

background: #636363;
border-radius: 7px;
border: none;
padding: 7px;
padding-left: 13px;
padding-right: 13px;
margin: 3px;
float: left;

&: hover{
    background: black; //버튼색
}
`
const BoxText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 17px;
line-height: 21px;
float: left;
color: #727272;
`
const Table = styled.li`

`
const SaveButton = styled.button`

`
const Img2 = styled.img`
width: 100px;
margin:0;
`
const ButtonImg = styled.button`
border: none;
background-color: white;
width: 100px;
height:25px;
margin: 10px;
padding:0;
border-radius: 4px;
&: hover{
    background: black; //버튼색
}
`
const Img3 = styled.img`
width: 700px;
`


function WillWriting_step4() {
    return (
        <WCss.Background>
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <WCss.Img src={stepImg}/>
                <WCss.Box>
                    <Title>상속관계정리서</Title>
                    <Line/>
                    <SmallText>민법상 유산으로 인정되는 재산목록을 정리해주세요.</SmallText>
                    <ButtonImg><Img2 src = {notice}/></ButtonImg>
                    <br />
                    <SmallBox>
                        <BoxText>재산의 시세를 정확히 알고 싶으신가요?</BoxText><br/><br/>
                        <BoxButton>중고차 시세</BoxButton>
                        <BoxButton>주택 시세</BoxButton>
                        <BoxButton>인터넷 등기소</BoxButton>
                        <BoxButton>상속인 금융 거래 조회</BoxButton>
                    </SmallBox>
                </WCss.Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_notice')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { window.location.href = '/WillWriting_step4';}}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
            </WCss.Container>
        </WCss.Background>
        
    )
}

export default WillWriting_step4
