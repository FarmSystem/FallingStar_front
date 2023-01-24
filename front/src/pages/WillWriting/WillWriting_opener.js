import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Open, addWill, setUserName, setUserBirth } from '../../redux/store';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_opener.png';
import openernotice from '../../assets/img/openernotice.png';
import openernoticebox from '../../assets/img/openernoticebox.png';
import WillBox1 from '../../assets/img/WillBox1.png';
import WillBox2 from '../../assets/img/WillBox2.png';
import WillBox3 from '../../assets/img/WillBox3.png';

const Img2 = styled.img`
width: 200px;
margin:0;
border-color: #FFB762;

`
const ButtonImg = styled.button`
background-color: #FFB762;
width: 200px;
height:30px;
margin: 10px;
padding:0;
border-radius: 4px;
border: none;

margin-bottom: 30px;
&: hover{
    background: #FF8B02; //버튼색
}
`
const Img3 = styled.img`
width: 900px;
display: inline-block;
margin-left: 40px;
margin-right: 40px;
`
const WillBox = styled.div`
display: inline-block;
float: left;
width: 100%;
margin-left: 200px;
margin-right: 200px;
margin-bottom: 100px;
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
margin-left: 200px;
margin-top: 60px;
`
const OpenerBox = styled.div`
background: #FFFBF7;
border-radius: 10px;
padding: 30px;
margin: 30px;
margin-top: 60px;

width: 60%;
display: inline-block;
`
const InputContainer = styled.div`
width: 50%;
display: inline-block;
margin: 2px;
`
const OpenerBoxText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 24px;
text-align: center;

color: #2F2F2F;

float: left;
padding:8px;
margin-left: 60px;
`
const OpenerBoxInput = styled.input`
background: #FFEEDB;
border-radius: 3px;
float: left;
margin-left: 20px;
border: none;
padding:8px;
width:  200px;
`
const SaveButton = styled.button`
width: 100px;

background: #585858;
border-radius: 4px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
text-align: center;

color: #FFFFFF;
border: none;
padding: 8px;
margin: 10px;
&: hover{
    background-color: black;
}
`
const OpenerBoxSmallText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
text-align: center;

color: #727272;
`
const Br = styled.div`
height: 24px;
`
function WillWriting_opener() {
    //배열 만들기
    const [OpenerInfo, setOpenerInfo] = useState({ 
        name: '',
        phone: '',
        relationship: ''
    });
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [relationship, setrelationship] = useState('');

    const addOpenerInfo = () => {
        setOpenerInfo({ 
            name: name,
            phone: phone,
            relationship: relationship
        })
    }
    //리덕스
    let a = useSelector((state) => { return state } );
    const will = useSelector((state) => { return state.will } );
    let dispatch = useDispatch();
    {console.log(a)}

    const setWill = ()=>{
        dispatch(setUserName(a.login_user.name));
        dispatch(setUserBirth(a.login_user.birth));
        console.log('유언장 확인', will);
        dispatch(addWill(will));
        //console.log('추가', a.will_list);
    }
    return (
        <WCss.Background>
            {console.log(a)}
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <WCss.Img src={stepImg}/>
                <WCss.Box>
                <WCss.Title>열람인 지정</WCss.Title>
                    <WCss.Line/>
                    <WCss.SmallText>나의 유언장 내용을 미리 확인할 수 있는<br/>
                    열람인을 지정합니다.</WCss.SmallText>
                    <ButtonImg><Img2 src = {openernotice}/></ButtonImg>
                    <br/>
                    <Img3 src={openernoticebox} />

                    <OpenerBox>
                        <WCss.Title>열람인 등록하기</WCss.Title> 
                        <WCss.Line/> <br/>
                        <InputContainer>
                            <OpenerBoxText>이름</OpenerBoxText>
                            <OpenerBoxInput placeholder='이름을 입력해주세요' 
                                onChange={(event)=> {setname(event.target.value)}} /> <Br/>
                        </InputContainer>
                        <InputContainer>
                            <OpenerBoxText>전화번호</OpenerBoxText>
                            <OpenerBoxInput placeholder='전화번호를 입력해주세요'
                                onChange={(event)=> {setphone(event.target.value)}} /> <Br/>
                        </InputContainer>
                        <InputContainer>
                            <OpenerBoxText>관계</OpenerBoxText>
                            <OpenerBoxInput placeholder='열람인과의 관계를 입력해주세요.'
                                onChange={(event)=> {setrelationship(event.target.value)}} /> <Br/>
                        </InputContainer>
                        <OpenerBoxSmallText><br/>열람인으로 추가하면 자동으로 열람인에게 알림메시지가 발송됩니다.</OpenerBoxSmallText>
                        <SaveButton onClick={()=>{
                            addOpenerInfo(); 
                            dispatch(Open(OpenerInfo)); 
                            setWill();}}>
                        등록하기</SaveButton>
                    </OpenerBox>

                    <SubTitle>나의 열람인</SubTitle>
                    <WillBox>
                        <WillButton><WillBoxImg src = {WillBox1} /> </WillButton>
                        <WillButton><WillBoxImg src = {WillBox2} /> </WillButton>
                        <WillButton><WillBoxImg src = {WillBox3} /></WillButton>
                        
                    </WillBox>
                    
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = './WillWriting_recording')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { window.location.href = './WillWriting_complete1';setWill();
                    }}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
                </WCss.Box>
            </WCss.Container>

        </WCss.Background>
        
    )
}

export default WillWriting_opener
