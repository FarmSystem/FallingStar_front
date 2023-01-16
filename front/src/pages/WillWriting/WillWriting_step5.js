import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Text } from '../../redux/store';
import axios from 'axios';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_step5.png';
import TextAreaImg from '../../assets/img/TextAreaImg.png';
import WillBox1 from '../../assets/img/WillBox1.png';
import WillBox2 from '../../assets/img/WillBox2.png';
import WillBox3 from '../../assets/img/WillBox3.png';

const Box = styled.div`
background-color: #FFFDF8;
margin: 20px;
border-radius: 10px;
padding: 10px;
width:90%;
display: inline-block;
padding-bottom: 90px;
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
const TextArea = styled.textarea`
width: 80%;
height: 110%;
display: center;
background-color: transparent;
border: none;
position: relative;
padding: 30px;
font-size: 18px;
&:focus {
    outline: none;
}
`
const Img2 = styled.img`
width: 75%;
margin: 0px;
z-index: 0;
position: absolute;
display: inline-block;
`
const SaveButton = styled.button`
background: #383838;
border-radius: 4px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 21px;

width: 300px;
display: inline-block;
margin-top: 300px;
padding: 10px;
align-items: center;
text-align: center;

color: #FFFFFF;
&: hover {
    background-color: black;
}
`
const WillBox = styled.div`
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

function WillWriting_step5() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    const [WillText, setWillText] = useState('');

    return (
        <WCss.Background>
            {console.log(a)}
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <WCss.Img src={stepImg}/>
                <Box>
                    <WCss.Title>유언장 작성하기</WCss.Title>
                    <WCss.Line/>
                    <SubTitle>전하고 싶은, 전하지 못했던, <br/>남기고 싶은 말씀을 적어보세요.</SubTitle>
                    <Img2 src={TextAreaImg}/>
                    <TextArea value={WillText} type= "text" placeholder='텍스트를 입력해주세요.' 
                    onChange={(event)=> setWillText(event.target.value)}/> <br/>
                    <SaveButton onChange={dispatch(Text(WillText))}>저장하기</SaveButton>
                    {console.log(WillText)}
                    <SubTitle>유언장 보관함</SubTitle>
                    <WillBox>
                        <WillButton><WillBoxImg src = {WillBox1} /> </WillButton>
                        <WillButton><WillBoxImg src = {WillBox2} /> </WillButton>
                        <WillButton><WillBoxImg src = {WillBox3} /></WillButton>
                    </WillBox>

                </Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_step4')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { window.location.href = '/WillWriting_recording';}}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
            </WCss.Container>

        </WCss.Background>
        
    )
}

export default WillWriting_step5
