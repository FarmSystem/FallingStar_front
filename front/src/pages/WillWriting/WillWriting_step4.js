import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Property } from '../../redux/store';
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
//표
const TableBox = styled.div`
width: 90%;
margin-left: 40px;
display: inline-block;
padding-bottom: 40px;
`
const TableTitle = styled.div`
background: #D8D8D8;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 27px;
color: #000000;

width: 240px;
height: 26px;
padding: 6px;
float: left;

border-top: 0.2px solid;
border-bottom: 0.2px solid;
`
const TableContent = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 21px;
color: #000000;

width: 64%;
height:26px;
padding: 6px;
float: left;

border-top: 0.2px solid;
border-bottom: 0.2px solid;
text-align: left;
padding-left: 20px;
`
const TableInput = styled.input`
margin: 1px;
margin-left: 13px;
border: 0.1px solid;
padding: 4px;
`

function WillWriting_step4() {
    //배열 만들기
    const [PropertyArray, setPropertyArray] = useState({ 
        house: 0,
        bond:0,
        patent: 0,
        car: 0
    });
    //인풋 값 저장변수 -> useState 사용하기..
    const [House, sethouse] = useState(0);
    const [Bond, setbond] = useState(0);
    const [Patent, setpatent] = useState(0);
    const [Car, setcar] = useState(0);

    //배열 값 바꾸는 함수 -> 이게 문제 
    const addProperty =()=>{
        setPropertyArray({house: House, bond: Bond, patent: Patent, car: Car});
    }

    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    return (
        <WCss.Background>
            {console.log(a)}
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
                    <TableBox>
                        <TableTitle>등산</TableTitle>
                        <TableContent>항목 개수
                            <TableInput value = {House} type="text" placeholder="예시) 1" 
                            onChange={(event)=> {sethouse(event.target.value); console.log(House)}}/>
                        </TableContent>
                        <TableTitle>채권 기타의 청구권</TableTitle>
                        <TableContent>항목 개수
                            <TableInput value = {Bond} type="text" placeholder="예시)1" 
                            onChange={(event)=> {setbond(event.target.value);}}/>
                        </TableContent>   
                        <TableTitle>특허권, 회원권 등의 권리</TableTitle>
                        <TableContent>항목 개수
                            <TableInput value = {Patent} type="text" placeholder="예시) 1" 
                            onChange={(event)=> {setpatent(event.target.value);}}/>
                        </TableContent>   
                        <TableTitle>부동산 및 이에 준하는 권리와 자동차</TableTitle>
                        <TableContent>항목 개수
                            <TableInput value = {Car} type="text" placeholder="예시) 1" 
                            onChange={(event)=> {setcar(event.target.value);}}/>
                        </TableContent>                         
                    </TableBox>
                </WCss.Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_step4')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { window.location.href = '/WillWriting_recording';
                    addProperty();dispatch(Property(PropertyArray));console.log(PropertyArray)}}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
            </WCss.Container>
        </WCss.Background>
        
    )
}

export default WillWriting_step4
