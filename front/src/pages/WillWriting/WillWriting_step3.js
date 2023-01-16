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

const SmallBox = styled.div`
width: 90%;
background-color: #F8F8F8;
border-radius: 10px;
display: inline-block;
padding: 20px;
padding-left: 40px;
margin-bottom: 30px;

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
padding-left: 18px;
padding-right: 18px;
margin: 3px;
float: left;

&: hover{
    background: black; //버튼색
}
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
const SaveButton = styled.button`

`
function WillWriting_step3() {
    const [Input, setInput] = useState('');
    //배열 만들기
    const [FamilyArray, setFamilyArray] = useState({ 
        child:'',
        parents:'',
        sibile:'',
        uncle:'',
        spouse:''
    });
    //인풋 값 저장변수 -> useState 사용하기..
    const [Child, setchild] = useState(' ');
    const [Parents, setparents] = useState('');
    const [Sibile, setsibile] = useState('');
    const [Uncle, setuncle] = useState('');
    const [Spouse, setspouse] = useState('');

    //배열 값 바꾸는 함수 -> 이게 문제 
    const addFamily =()=>{
        setFamilyArray({child: Child, parents: Parents, sibile:Sibile, uncle:Uncle, spouse:Spouse});
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
                        <BoxText>가족관계를 정확히 알고 싶으신가요?</BoxText><br/><br/>
                        <BoxButton>가족관계 증명서 발급하기</BoxButton>
                    </SmallBox>
                    <TableBox>
                        <TableTitle>직계비속 (자녀, 손자녀 등)</TableTitle>
                        <TableContent>성함 
                            <TableInput value = {Child} type="text" placeholder="예시) 김철구, 김영희" 
                            onChange={(event)=> {setchild(event.target.value)}}/>
                        </TableContent>
                        <TableTitle>직계존속 (부모, 조부모 등)</TableTitle>
                        <TableContent>성함 
                            <TableInput value = {Parents} type="text" placeholder="예시) 김철구, 김영희" 
                            onChange={(event)=> {setparents(event.target.value);}}/>
                        </TableContent>   
                        <TableTitle>형제, 자매</TableTitle>
                        <TableContent>성함 
                            <TableInput value = {Sibile} type="text" placeholder="예시) 김철구, 김영희" 
                            onChange={(event)=> {setsibile(event.target.value);}}/>
                        </TableContent>   
                        <TableTitle>4촌 이내 방계혈족 (삼촌, 고모, 이모 등)</TableTitle>
                        <TableContent>성함 
                            <TableInput value = {Uncle} type="text" placeholder="예시) 김철구, 김영희" 
                            onChange={(event)=> {setuncle(event.target.value);}}/>
                        </TableContent>   
                        <TableTitle>배우자</TableTitle>
                        <TableContent>성함 
                            <TableInput value = {Spouse} type="text" placeholder="예시) 김철구, 김영희" 
                            onChange={(event)=> {setspouse(event.target.value);}}/>
                        </TableContent>                       
                    </TableBox>
                
                </WCss.Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_notice')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { addFamily();console.log(FamilyArray)}}>
                        다음으로</WCss.NextButton>
                    
                </WCss.ButtonContainer>
            </WCss.Container>
        </WCss.Background>
        
    )
}

export default WillWriting_step3
